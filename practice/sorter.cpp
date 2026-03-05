// =============================================================================
// practice/sorter.cpp — C++ Algorithm Practice Sandbox
// =============================================================================
//
// PURPOSE
// -------
// This file gives you a concrete, runnable algorithm to upgrade as a Git
// branching exercise. You will:
//   1. Run the baseline O(n²) Bubble Sort implementation.
//   2. Branch off and replace it with an O(n log n) algorithm.
//   3. Open a Pull Request and observe the CI pipeline validate your change.
//
// EXERCISE — Upgrade from O(n²) to O(n log n)
// ---------------------------------------------
// Step 1 — Compile and run the baseline:
//      g++ -std=c++17 -o sorter practice/sorter.cpp && ./sorter
//
// Step 2 — Create a feature branch:
//      git checkout -b feature/upgrade-sort-algorithm
//
// Step 3 — Replace bubbleSort() below with std::sort() or Merge Sort.
//   Hint: std::sort uses an introsort (hybrid quicksort/heapsort) and runs
//   in O(n log n) average and worst case. Include <algorithm> and replace
//   the call in main().
//
// Step 4 — Update the comment block near the function to reflect the new
//   complexity, then commit:
//      git add practice/sorter.cpp
//      git commit -m "perf: replace O(n²) bubble sort with O(n log n) std::sort"
//
// Step 5 — Push and open a Pull Request. The CI workflow in
//   .github/workflows/ci-test.yml will run automatically.
//
// Step 6 — After the PR is merged, pull the updated main branch:
//      git checkout main && git pull origin main
//
// =============================================================================

#include <algorithm>  // std::swap, std::sort
#include <chrono>     // timing
#include <iostream>
#include <vector>

// ---------------------------------------------------------------------------
// Utility: print a vector
// ---------------------------------------------------------------------------
void printVector(const std::vector<int>& v, const std::string& label) {
    std::cout << label << ": [ ";
    for (int x : v) std::cout << x << " ";
    std::cout << "]\n";
}

// ---------------------------------------------------------------------------
// Baseline implementation — O(n²) Bubble Sort
//
// Time complexity:  O(n²) — two nested loops, each up to n iterations.
// Space complexity: O(1)  — sorts in-place, no auxiliary memory.
//
// WHY THIS IS THE BASELINE
//   Bubble Sort is easy to read but catastrophically slow for large inputs.
//   For n = 10,000 items it performs ~50,000,000 comparisons; std::sort
//   needs only ~130,000. Your task in the exercise above is to replace this.
// ---------------------------------------------------------------------------
void bubbleSort(std::vector<int>& arr) {
    int n = static_cast<int>(arr.size());
    for (int i = 0; i < n - 1; ++i) {
        bool swapped = false;
        for (int j = 0; j < n - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        // Early-exit optimisation: if no swap happened the array is sorted.
        if (!swapped) break;
    }
}

// ---------------------------------------------------------------------------
// ✏️  REPLACE bubbleSort() WITH YOUR O(n log n) IMPLEMENTATION HERE
//     during the exercise, then update the call in main() below.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------
int main() {
    // Sample dataset — feel free to extend for benchmarking
    std::vector<int> data = {64, 34, 25, 12, 22, 11, 90, 47, 3, 78};

    std::cout << "=== Sorter Practice Sandbox ===\n";
    printVector(data, "Before sort");

    // --- Time the sort ---
    auto start = std::chrono::high_resolution_clock::now();

    bubbleSort(data);   // ← Change this call after upgrading the algorithm

    auto end = std::chrono::high_resolution_clock::now();
    double ms = std::chrono::duration<double, std::milli>(end - start).count();

    printVector(data, "After sort ");
    std::cout << "Time elapsed: " << ms << " ms\n";

    // Basic correctness assertion
    if (!std::is_sorted(data.begin(), data.end())) {
        std::cerr << "ERROR: array is not sorted!\n";
        return 1;
    }
    std::cout << "Correctness check: PASSED\n";
    return 0;
}
