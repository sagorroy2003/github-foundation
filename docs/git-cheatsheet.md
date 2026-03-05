# Git CLI Cheat Sheet

> A quick-reference guide for the core Git commands used every day, plus an in-depth look at the **merge vs. rebase** trade-off — one of the most important decisions you will make for long-term project scalability.

---

## Core Commands

### Repository Setup

| Command | Description |
|---------|-------------|
| `git init` | Initialise a new local repository in the current directory. Creates the hidden `.git/` folder. |
| `git clone <url>` | Download a remote repository and its full history to a local directory. |
| `git config --global user.name "Name"` | Set the author name used in every commit. |
| `git config --global user.email "email@example.com"` | Set the author email used in every commit. |

---

### Tracking Changes

| Command | Description |
|---------|-------------|
| `git status` | Show which files are modified, staged, or untracked. Run this constantly. |
| `git add <file>` | Stage a specific file for the next commit. |
| `git add .` | Stage **all** changes in the current directory (use with care). |
| `git diff` | Show unstaged changes line by line. |
| `git diff --staged` | Show what is already staged and will go into the next commit. |
| `git commit -m "message"` | Record staged changes in the repository history. |
| `git commit --amend` | Edit the most recent commit's message or content (only before pushing). |

---

### Inspecting History

| Command | Description |
|---------|-------------|
| `git log` | Show the full commit history. |
| `git log --oneline --graph --all` | Compact, visual branch graph — the most useful log view. |
| `git show <commit>` | Display the diff and metadata for a specific commit. |
| `git blame <file>` | Show who last modified each line of a file. |

---

### Branching

| Command | Description |
|---------|-------------|
| `git branch` | List local branches. |
| `git branch <name>` | Create a new branch (does not switch to it). |
| `git switch <name>` | Switch to an existing branch (modern replacement for `git checkout`). |
| `git switch -c <name>` | Create **and** switch to a new branch in one step. |
| `git branch -d <name>` | Delete a fully-merged branch safely. |
| `git branch -D <name>` | Force-delete a branch even if it has unmerged commits. |

---

### Remote Operations

| Command | Description |
|---------|-------------|
| `git remote -v` | List configured remote repositories. |
| `git fetch <remote>` | Download remote changes without merging them. Safe; nothing local changes. |
| `git pull` | Fetch **and** merge remote changes into the current branch. |
| `git pull --rebase` | Fetch and replay local commits on top of the remote branch (cleaner history). |
| `git push <remote> <branch>` | Upload the current branch to the remote. |
| `git push -u origin <branch>` | Push and set the upstream so future `git push` needs no arguments. |
| `git push --force-with-lease` | Force-push safely — fails if someone else has pushed since your last fetch. |

---

### Merging & Rebasing

| Command | Description |
|---------|-------------|
| `git merge <branch>` | Integrate another branch into the current one, preserving full history. |
| `git merge --no-ff <branch>` | Force a merge commit even when a fast-forward is possible (records the merge explicitly). |
| `git rebase <branch>` | Replay your commits on top of another branch, creating a linear history. |
| `git rebase -i HEAD~<n>` | Interactive rebase — squash, reorder, or edit the last *n* commits. |
| `git rebase --abort` | Cancel an in-progress rebase and restore the previous state. |
| `git cherry-pick <commit>` | Apply a single commit from another branch onto the current branch. |

---

### Undoing Changes

| Command | Description |
|---------|-------------|
| `git restore <file>` | Discard unstaged changes in a file (replaces old `git checkout -- <file>`). |
| `git restore --staged <file>` | Unstage a file without discarding the changes. |
| `git revert <commit>` | Create a new commit that undoes a previous commit — safe for shared branches. |
| `git reset --soft HEAD~1` | Undo the last commit but keep changes staged. |
| `git reset --hard HEAD~1` | Undo the last commit **and discard** all changes. ⚠️ Destructive. |
| `git stash` | Temporarily shelve uncommitted changes. |
| `git stash pop` | Re-apply the most recent stash and remove it from the stash list. |

---

### Tagging

| Command | Description |
|---------|-------------|
| `git tag` | List all tags. |
| `git tag -a v1.0.0 -m "Release 1.0.0"` | Create an annotated tag with a message. |
| `git push origin --tags` | Push all tags to the remote. |

---

## `git merge` vs. `git rebase` — In Depth

This is one of the most debated topics in Git. The right choice depends on your team size, workflow, and how much you value a clean history versus an accurate record of events.

---

### `git merge` — Preserves History Faithfully

**How it works:**
Git finds the common ancestor of the two branches and creates a new **merge commit** that has two parents, recording exactly when and how branches diverged and rejoined.

```
main:    A --- B --- C ------- M   ← merge commit
                      \       /
feature:               D --- E
```

**Trade-offs for long-term scalability:**

| Benefit | Detail |
|---------|--------|
| ✅ Non-destructive | Never rewrites existing commits; safe on shared/public branches. |
| ✅ Accurate audit trail | The graph shows when features were developed and integrated. |
| ✅ Easy conflict resolution | Conflicts appear once at the merge commit, not once per replayed commit. |

| Drawback | Detail |
|----------|--------|
| ❌ Noisy history | On active repos, the log fills with merge commits that add little meaning. |
| ❌ Harder to bisect | `git bisect` can be confused by the non-linear graph when hunting bugs. |
| ❌ Complex graph | `git log --graph` becomes a tangled web on long-lived projects. |

**Best for:** Long-running release branches, open-source projects with many contributors, any branch that has been pushed to a shared remote.

---

### `git rebase` — Creates a Linear, Readable History

**How it works:**
Git takes every commit on your feature branch and replays them, one by one, on top of the target branch tip. Each replayed commit gets a **new SHA** even if its content is unchanged.

```
Before rebase:          After rebase:
main:    A --- B --- C  main:    A --- B --- C --- D' --- E'
                   \                                   ↑
feature:    D --- E      feature commits replayed as new commits
```

**Trade-offs for long-term scalability:**

| Benefit | Detail |
|---------|--------|
| ✅ Linear history | `git log --oneline` reads like a clean narrative — easy to scan. |
| ✅ Easier bisect | A straight line of commits makes `git bisect` highly effective. |
| ✅ Cleaner PRs | Your feature branch always sits neatly on top of the latest main. |

| Drawback | Detail |
|----------|--------|
| ❌ Rewrites history | New SHAs break any branch or tag that pointed at the old commits. |
| ❌ Dangerous on shared branches | If teammates have based work on your commits, rebasing orphans their work. |
| ❌ More conflicts | Each replayed commit is independently applied, so a conflict that merge resolves once may appear multiple times. |

**Best for:** Local feature branches that **have not been pushed to a shared remote**, cleaning up commits before opening a PR (use `git rebase -i`).

---

### The Golden Rule

> **Never rebase a branch that others are working on.**

If a branch exists only on your machine, rebase freely. Once it is pushed and shared, switch to merge to avoid rewriting history that teammates have already built on top of.

---

### Quick Decision Guide

```
Is the branch public / shared with others?
│
├── YES → use git merge
│
└── NO (local only or just yours)
    │
    ├── Want clean history before PR? → git rebase -i, then open PR
    │
    └── Just integrating latest main → git rebase main (then force-push)
```
