# GitHub Foundations Certification — Study & Practice Repository

> A comprehensive, interactive sandbox for mastering Git, GitHub collaboration, and CI/CD automation in preparation for the **GitHub Foundations Certification**.

---

## 📚 Master Syllabus — Exam Domains

Use the checklist below to track your progress across all four exam domains.

### Domain 1 — Introduction to Git & GitHub
- [ ] Understand version control concepts (snapshots, commits, history)
- [ ] Install Git and configure user identity (`git config`)
- [ ] Initialize a repository (`git init`) and clone an existing one (`git clone`)
- [ ] Understand the three areas: working tree, staging area, repository
- [ ] Navigate GitHub UI: profile, repositories, stars, forks

### Domain 2 — Working with Repositories
- [ ] Stage and commit changes (`git add`, `git commit`)
- [ ] Inspect history (`git log`, `git status`, `git diff`)
- [ ] Work with branches: create, switch, rename, delete (`git branch`, `git switch`)
- [ ] Merge and rebase branches (`git merge`, `git rebase`)
- [ ] Resolve merge conflicts hands-on (see `practice/` sandbox)
- [ ] Push and pull remote changes (`git push`, `git pull`, `git fetch`)
- [ ] Tagging releases (`git tag`)
- [ ] Use `.gitignore` to exclude files

### Domain 3 — Collaboration Features
- [ ] Fork a repository and open a Pull Request
- [ ] Review, comment on, and approve/request changes in a PR
- [ ] Use Issue Templates to file structured bug reports and feature requests
- [ ] Use the PR Template for consistent contribution descriptions
- [ ] Understand GitHub Projects, Milestones, and Labels
- [ ] Protect branches via Branch Protection Rules
- [ ] Use `CODEOWNERS` to auto-assign reviewers

### Domain 4 — Modern GitHub Features (Actions & Security)
- [ ] Understand GitHub Actions concepts: workflows, jobs, steps, runners
- [ ] Write a CI workflow that triggers on `push` and `pull_request`
- [ ] Use Actions marketplace actions (e.g., `actions/checkout`, `actions/setup-node`)
- [ ] Read and interpret workflow run logs
- [ ] Understand GitHub Packages and artifact storage
- [ ] Enable Dependabot alerts and security advisories
- [ ] Use Secret scanning and code scanning (CodeQL)

---

## 📂 Repository Layout

```
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md          # Structured bug report template
│   │   └── feature_request.md     # Structured feature request template
│   ├── workflows/
│   │   └── ci-test.yml            # GitHub Actions CI pipeline
│   └── PULL_REQUEST_TEMPLATE.md   # PR description template
├── docs/
│   └── git-cheatsheet.md          # Core Git CLI reference + merge vs. rebase
├── practice/
│   ├── server.js                  # Node.js sandbox — branch & conflict practice
│   └── sorter.cpp                 # C++ sandbox — algorithm upgrade practice
├── .gitignore                     # Node.js + C++ ignore rules
└── README.md                      # This file
```

---

## 🚀 Quick Start

```bash
# 1. Clone this repository
git clone https://github.com/<your-username>/github-foundation.git
cd github-foundation

# 2. Create a feature branch to start practising
git checkout -b feature/my-first-practice

# 3. Modify files in practice/, commit, push, and open a Pull Request
git add practice/server.js
git commit -m "practice: add my changes to server.js"
git push origin feature/my-first-practice
```

---

## 📖 Learning Resources

- [GitHub Docs](https://docs.github.com)
- [GitHub Skills](https://skills.github.com)
- [Pro Git Book (free)](https://git-scm.com/book/en/v2)
- [GitHub Foundations Exam Objectives](https://examregistration.github.com/overview)
