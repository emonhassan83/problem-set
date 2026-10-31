# 🚀 Problem Set: Data Structures, Algorithms & JavaScript Problem Solving

[![Language: C++](https://img.shields.io/badge/Language-C%2B%2B17-00599C?logo=c%2B%2B&logoColor=white)](https://isocpp.org/)
[![Language: JavaScript](https://img.shields.io/badge/Language-JavaScript%20ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Topic: DSA](https://img.shields.io/badge/Focus-Data%20Structures%20%26%20Algorithms-orange)](#)
[![Status: Maintained](https://img.shields.io/badge/Status-Active%20Repository-brightgreen)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A comprehensive, organized problem-solving repository containing coursework solutions, structured Data Structures & Algorithms (DSA) preparation roadmaps, and practical JavaScript coding challenges. This collection covers implementations, algorithmic techniques, competitive programming problems, and interview preparation materials in **C++** and **JavaScript**.

---

## 📑 Table of Contents

- [📁 Repository Structure](#-repository-structure)
- [🧩 1. Algorithm Course (`course_algorithum`)](#1-algorithm-course-course_algorithum)
  - [Module & Week Breakdown](#module--week-breakdown)
  - [Key Algorithmic Concepts Covered](#key-algorithmic-concepts-covered)
- [🧱 2. Data Structure Course (`course_data_stracture`)](#2-data-structure-course-course_data_stracture)
  - [Syllabus & Topics Covered](#syllabus--topics-covered)
- [🎯 3. Structured DSA Mastery Roadmap (`DSA`)](#3-structured-dsa-mastery-roadmap-dsa)
  - [Topics & Categorized Modules](#topics--categorized-modules)
  - [Problem-Solving Patterns](#problem-solving-patterns)
- [⚡ 4. JavaScript Problem Solving (`js-problem`)](#4-javascript-problem-solving-js-problem)
  - [Categorized Problem Index (1–36)](#categorized-problem-index-136)
- [⏱️ Time & Space Complexity Cheat Sheet](#️-time--space-complexity-cheat-sheet)
- [🛠️ How to Compile & Run](#️-how-to-compile--run)
  - [Running C++ Solutions](#running-c-solutions)
  - [Running JavaScript Solutions](#running-javascript-solutions)
- [👤 Author & Contributions](#-author--contributions)

---

## 📁 Repository Structure

```text
problem-set/
├── 📁 course_algorithum/          # Advanced algorithm course solutions & assignments (C++)
│   ├── week-01. Basic_Graph_BFS_&_DFS/
│   ├── week-02. Graph Algorithum/
│   ├── week-03. Disjoint set, Cycle detection and MST/
│   ├── week-04. Recap/
│   ├── week-05. Dynamic Programming/
│   └── week-06. Bonus/
│
├── 📁 course_data_stracture/      # Data structures course solutions, implementations & assignments (C++)
│   ├── Week-01. Introduction_Data_Stracture/
│   ├── Week-02. Linked_List/
│   ├── Week-03. Doubly Linked List/
│   ├── Week-04. Stack_&_Queue/
│   └── Week-05. Binary_Tree/
│
├── 📁 DSA/                       # Structured DSA learning path, roadmaps & interview revision (C++)
│   ├── 00-DSA-Roadmap/           # Roadmap, progress tracker, and pattern guides
│   ├── 01-Basics/                # Complexity analysis, Big-O fundamentals
│   ├── 02-Arrays/                # Array techniques, 2-pointer, sliding window
│   ├── 03-Strings/               # String manipulation & hashing
│   ├── 04-Linked-List/           # Linked list variations & patterns
│   ├── 05-Stack/                 # Stack implementations & monotonic patterns
│   ├── 06-Queue/                 # Queues, circular queues, deques
│   ├── 07-Hashing/               # Hash maps, frequency tables, sets
│   ├── 08-Trees/                 # Binary trees, BST, traversals
│   ├── 09-Heap-PriorityQueue/    # Min/Max heaps, priority queues
│   ├── 10-Graphs/                # Graph traversals, shortest path, MST
│   ├── 11-Sorting/               # Comparison & non-comparison sorts
│   ├── 12-Binary-Search/         # Binary search variations & search spaces
│   ├── 13-Dynamic-Programming/   # Classical DP problems (Knapsack, LCS, LIS)
│   └── 99-Interview-Revision/    # Concise interview prep notes & checklists
│
├── 📁 js-problem/                # 36+ Core JavaScript problem-solving challenges (ES6+)
│   ├── 1. arr_filter.js ... 36. arr_small_element.js
│   └── README.md
│
└── 📄 README.md                  # Root documentation (this file)
```

---

## 🧩 1. Algorithm Course (`course_algorithum`)

This section contains complete source code, practice tasks, assignments, and concept session solutions for a rigorous Graph & Dynamic Programming algorithm curriculum.

### Module & Week Breakdown

| Week / Module | Topics & Key Problems | Highlights & Algorithms |
| :--- | :--- | :--- |
| **Week 01: Basic Graph BFS & DFS** | Adjacency Matrix, Adjacency List, Edge List, BFS Traversal, BFS with Level Tracking, Path Printing, DFS, 2D Grid BFS/DFS, Component Count | • Can Go<br>• Connected Nodes & Components<br>• Count Apartments I & II<br>• Flood Fill & Closed Island |
| **Week 02: Graph Algorithms** | Dijkstra Algorithm (Naive & Priority Queue optimized), Bellman-Ford Algorithm, Floyd-Warshall Algorithm | • Single-Source Shortest Paths (SSSP)<br>• Handling Negative Edge Weights<br>• Negative Cycle Detection<br>• All-Pairs Shortest Paths (APSP) |
| **Week 03: Disjoint Set, Cycle Detection & MST** | Disjoint Set Union (DSU) with Path Compression & Union by Rank/Size, Cycle Detection (DFS & DSU), Minimum Spanning Tree (MST) | • Kruskal's Algorithm<br>• Prim's Algorithm<br>• Undirected & Directed Cycle Detection<br>• Road network & connectivity problems |
| **Week 04: Recap & Applications** | Comprehensive problem solving using graph algorithms and shortest paths | • Commandos<br>• Roads not only in Berland<br>• Guilty Prince & Sundorban<br>• Assignment 03 (Maze, Area of Component, Building) |
| **Week 05: Dynamic Programming** | DP fundamentals (Memoization & Tabulation), Fibonacci, 0-1 Knapsack Problem and its classic variations | • 0-1 Knapsack Top-Down & Bottom-Up<br>• Subset Sum & Partition Equal Subset Sum<br>• Count of Subset Sum & Minimum Subset Sum Difference<br>• House Robber & Min Cost Climbing Stairs<br>• Final Exam: Adventure, Chocolates, Water, Make It |
| **Week 06: Bonus Topics** | Unbounded Knapsack, Longest Common Subsequence (LCS), Merge Sort Recap | • Unbounded Knapsack Bottom-Up<br>• Rod Cutting Problem<br>• Coin Change I & II<br>• LCS (Top-Down, Bottom-Up, Print LCS)<br>• Longest Common Substring & Substring Printing<br>• Divide & Conquer / Merge Sort |

### Key Algorithmic Concepts Covered
- **Graph Traversal:** Breadth-First Search (BFS), Depth-First Search (DFS), 2D Matrix Grid exploration.
- **Shortest Path Algorithms:** Dijkstra ($O((V + E) \log V)$), Bellman-Ford ($O(V \cdot E)$), Floyd-Warshall ($O(V^3)$).
- **Greedy & DSU:** Disjoint Set Union ($O(\alpha(V))$), Kruskal's MST ($O(E \log E)$).
- **Dynamic Programming (DP):** Optimal substructure, overlapping subproblems, state transitions, memoization (Top-Down), tabulation (Bottom-Up), state space compression.

---

## 🧱 2. Data Structure Course (`course_data_stracture`)

Solutions and implementations covering fundamental to advanced linear and non-linear data structures, STL containers, and algorithmic problem-solving.

### Syllabus & Topics Covered

- **Week 01: Introduction & Complexity Analysis**
  - **Complexity Analysis:** Big-O notation ($O(1)$, $O(\log N)$, $O(N)$, $O(N \log N)$, $O(N^2)$, $O(\sqrt{N})$), Space Complexity trade-offs.
  - **C++ STL Vector:** Dynamic array internals, capacity management, element access, modifiers, and iterators.
  - **Prefix Sum & Binary Search:** Cumulative sum optimization for range queries, logarithmic search algorithms.
  - **Practice & Assignment 01:** Range sum queries, duplicate detection, insert/erase optimizations.

- **Week 02: Singly Linked List**
  - Node structure and pointer manipulation.
  - Dynamic node creation, insertion at head/tail/specific position, deletion at head/position.
  - Printing linked lists (iterative & recursive), list reversal, size calculation, duplicate checks.
  - **Assignment 02:** Queries handling, duplicate removal, max/min search, reverse printing.

- **Week 03: Doubly Linked List & STL List**
  - Doubly Linked List structure (next & previous pointers), bidirectional traversal.
  - Insertion and deletion at arbitrary positions, middle element queries, palindrome verification.
  - Built-in `std::list` STL container, cycle detection (`Floyd's Tortoise and Hare`).
  - **Mid-Term Exam:** Remember Queries, Browser History navigation, Palindrome checks.

- **Week 04: Stack & Queue**
  - **Stack (LIFO):** Implementation using dynamic arrays (`std::vector`), singly linked list, and doubly linked list.
  - **Queue (FIFO):** Implementation using singly/doubly linked lists and `std::list`.
  - **STL Adapters:** `std::stack`, `std::queue`.
  - **Applications:** Balanced parentheses validation, Backspace String Compare, Min Stack, Reverse Stack/Queue via recursion, Maximum Equal Stack Sum, Circular game winner.
  - **Assignment 04:** Same or Not, Is It Valid, Special Queries, Elimination.

- **Week 05: Binary Tree**
  - Binary Tree representation, node hierarchy (root, leaves, parent, children).
  - Traversal algorithms: Pre-Order, In-Order, Post-Order, and Level-Order traversal.
  - Tree metrics: Node counting, leaf node counting, maximum height/depth computation.

---

## 🎯 3. Structured DSA Mastery Roadmap (`DSA`)

A systematic, interview-ready roadmap designed for competitive programming and technical interview mastery.

### Topics & Categorized Modules

```text
DSA/
├── 00-DSA-Roadmap/           # Roadmap guides, study schedule & pattern summaries
├── 01-Basics/                # Time/Space Complexity, asymptotic analysis, math basics
├── 02-Arrays/                # Dynamic arrays, in-place manipulation, prefix sum
├── 03-Strings/               # Character arrays, string algorithms, anagrams
├── 04-Linked-List/           # Singly/Doubly/Circular lists, slow-fast pointers
├── 05-Stack/                 # Monotonic stack, expression evaluation, parentheses
├── 06-Queue/                 # Circular queue, Deque, sliding window maximum
├── 07-Hashing/               # Hash table, frequency counting, collision resolution
├── 08-Trees/                 # Binary trees, BST, LCA, balanced trees
├── 09-Heap-PriorityQueue/    # Binary heaps, priority queue, Top-K elements
├── 10-Graphs/                # BFS/DFS, topological sort, MST, shortest path
├── 11-Sorting/               # Quick Sort, Merge Sort, Counting Sort
├── 12-Binary-Search/         # Binary search on arrays & on answer spaces
├── 13-Dynamic-Programming/   # 1D/2D DP, state machine DP, interval DP
└── 99-Interview-Revision/    # Fast reference, common interview pitfalls, formulas
```

### Problem-Solving Patterns

- **Frequency Counting:** Anagram detection, duplicate verification, mode calculation ($O(N)$ with Hash Map).
- **Two Pointers:** Opposite-direction pointers (palindromes, sorted two-sum), same-direction pointers (in-place removal, merging).
- **Sliding Window:** Fixed-size and dynamic-size windows for subarray problems, substring without repeating characters.
- **Prefix Sum:** Precomputed cumulative sums for $O(1)$ range sum queries and subarray sum problems.
- **Monotonic Stack/Queue:** Next greater/smaller element, stock span, largest rectangle in histogram.
- **Binary Search on Answer:** Optimization problems transformed into feasibility search over monotonic predicates.

---

## ⚡ 4. JavaScript Problem Solving (`js-problem`)

Contains 36 practical JavaScript problems and utility implementations focused on core JavaScript syntax, functional methods, ES6+ features, and algorithm interview questions.

### Categorized Problem Index (1–36)

#### 🔹 Array Filtering & Transformations
- [`1. arr_filter.js`](js-problem/1.%20arr_filter.js) - Array filtering techniques using higher-order functions.
- [`6. arr_reduce.js`](js-problem/6.%20arr_reduce.js) - Cumulative calculations and aggregation with `Array.prototype.reduce()`.
- [`8. unique_value.js`](js-problem/8.%20unique_value.js) - Extracting unique values from an array using `Set` and iteration.
- [`11. function_reduce.js`](js-problem/11.%20function_reduce.js) - Functional reduction logic and multi-step data pipelines.
- [`17. flat_array.js`](js-problem/17.%20flat_array.js) - Flattening nested multidimensional arrays (custom & built-in `flat`).
- [`25. remove_duplicate.js`](js-problem/25.%20remove_duplicate.js) - Removing duplicate items from collections.
- [`34. arr_odd_sum.js`](js-problem/34.%20arr_odd_sum.js) - Computing the sum of odd numbers in an array.
- [`36. arr_small_element.js`](js-problem/36.%20arr_small_element.js) - Finding the smallest element in an array.

#### 🔹 Object Operations
- [`2. obj_manipulation.js`](js-problem/2.%20obj_manipulation.js) - Object property inspection, transformation, and manipulation.
- [`4. sort_obj.js`](js-problem/4.%20sort_obj.js) - Sorting objects by keys and numeric properties.
- [`5. find_&_modify.js`](js-problem/5.%20find_%26_modify.js) - Finding objects matching conditions and updating properties in-place.

#### 🔹 Sorting & Searching
- [`10. advance_sorting.js`](js-problem/10.%20advance_sorting.js) - Multi-field custom sorting algorithms.
- [`14. sort_word_by_length.js`](js-problem/14.%20sort_word_by_length.js) - Sorting sentence words based on length.
- [`18. sort_condition.js`](js-problem/18.%20sort_condition.js) - Conditional multi-rule comparator sorting.
- [`23. sort_name_alfabatically.js`](js-problem/23.%20sort_name_alfabatically.js) - Lexicographical and alphabetical name sorting.
- [`27. search_liner.js`](js-problem/27.%20search_liner.js) - Linear search algorithm implementation.
- [`32. binary_search.js`](js-problem/32.%20binary_search.js) - Binary search on sorted numeric arrays ($O(\log N)$).

#### 🔹 String Processing & Logic
- [`12. find_copy_emoji.js`](js-problem/12.%20find_copy_emoji.js) - Unicode and emoji handling in JavaScript strings.
- [`13. rev_string_char.js`](js-problem/13.%20rev_string_char.js) - Inverting characters and reversing strings.
- [`19. replace_string.js`](js-problem/19.%20replace_string.js) - Substring and pattern replacement techniques.
- [`24. count_vawel.js`](js-problem/24.%20count_vawel.js) - Counting vowels in a given text string.
- [`26. find_word.js`](js-problem/26.%20find_word.js) - Searching words and substrings within sentences.
- [`28. find_longest_string.js`](js-problem/28.%20find_longest_string.js) - Determining the longest word/string in an array or phrase.

#### 🔹 Math, Logic & Interview Puzzles
- [`3. fun_composition.js`](js-problem/3.%20fun_composition.js) - Functional programming: function composition (`pipe` / `compose`).
- [`7. leap_year_checker.js`](js-problem/7.%20leap_year_checker.js) & [`35. find_leap_year.js`](js-problem/35.%20find_leap_year.js) - Calendar leap year logic.
- [`9. find_maxmum.js`](js-problem/9.%20find_maxmum.js) - Finding the maximum number in a series.
- [`15. remove_false_value.js`](js-problem/15.%20remove_false_value.js) - Filtering false values from an array.
- [`16. convert_any_to_boolean.js`](js-problem/16.%20convert_any_to_boolean.js) - Explicit boolean type casting and truthy/falsy evaluation.
- [`20. know_performence_task.js`](js-problem/20.%20know_performence_task.js) - Benchmarking execution time using `console.time()` / `performance.now()`.
- [`21. swap_values.js`](js-problem/21.%20swap_values.js) - Value swapping using destructuring and temporary variables.
- [`22. random_number.js`](js-problem/22.%20random_number.js) - Generating pseudo-random numbers within a range.
- [`29. print_fizbuz.js`](js-problem/29.%20print_fizbuz.js) - The classic FizzBuzz algorithmic challenge.
- [`30. find_falsy_value.js`](js-problem/30.%20find_falsy_value.js) & [`31. find_falsy_value_2.js`](js-problem/31.%20find_falsy_value_2.js) - Identifying and isolating falsy values (`false`, `0`, `""`, `null`, `undefined`, `NaN`).
- [`33. find_2nd_large_element.js`](js-problem/33.%20find_2nd_large_element.js) - Finding the second largest element in single-pass $O(N)$ time.

---

## ⏱️ Time & Space Complexity Cheat Sheet

| Data Structure / Algorithm | Access | Search | Insertion | Deletion | Space |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Array / `std::vector`** | $O(1)$ | $O(N)$ | $O(N)$ (End: $O(1)$ amortized) | $O(N)$ (End: $O(1)$) | $O(N)$ |
| **Singly Linked List** | $O(N)$ | $O(N)$ | $O(1)$ (with pointer) | $O(1)$ (with pointer) | $O(N)$ |
| **Doubly Linked List** | $O(N)$ | $O(N)$ | $O(1)$ (with pointer) | $O(1)$ (with pointer) | $O(N)$ |
| **Stack (`std::stack`)** | $O(N)$ | $O(N)$ | $O(1)$ (Push) | $O(1)$ (Pop) | $O(N)$ |
| **Queue (`std::queue`)** | $O(N)$ | $O(N)$ | $O(1)$ (Push) | $O(1)$ (Pop) | $O(N)$ |
| **Binary Search Tree (BST)** | $O(\log N)$ | $O(\log N)$ | $O(\log N)$ | $O(\log N)$ | $O(N)$ |
| **Binary Heap / Priority Queue** | $O(1)$ (Peek) | $O(N)$ | $O(\log N)$ | $O(\log N)$ (Extract) | $O(N)$ |
| **Hash Table / `std::unordered_map`** | — | $O(1)$ avg / $O(N)$ worst | $O(1)$ avg / $O(N)$ worst | $O(1)$ avg / $O(N)$ worst | $O(N)$ |
| **BFS / DFS Traversal** | — | $O(V + E)$ | — | — | $O(V)$ |
| **Dijkstra Algorithm** | — | $O((V + E) \log V)$ | — | — | $O(V)$ |
| **0-1 Knapsack DP** | — | $O(N \cdot W)$ | — | — | $O(N \cdot W)$ or $O(W)$ |

---

## 🛠️ How to Compile & Run

### Running C++ Solutions

All C++ programs are written with modern C++ standard library features (`<bits/stdc++.h>` or standard C++17 headers).

#### Using GCC / G++ (Windows, Linux, macOS):
```bash
# Navigate to the folder containing the target source code
cd "course_algorithum/week-01. Basic_Graph_BFS_&_DFS/assignment-01"

# Compile with C++17 standard and optimizations
g++ -O2 -std=c++17 Can_Go.cpp -o Can_Go

# Run the executable:
# On Windows:
.\Can_Go.exe

# On Linux/macOS:
./Can_Go
```

> **Tip:** If the problem requires file input/output redirection, create `input.txt` and `output.txt` in the folder and add:
> ```cpp
> freopen("input.txt", "r", stdin);
> freopen("output.txt", "w", stdout);
> ```

---

### Running JavaScript Solutions

Make sure [Node.js](https://nodejs.org/) (version 14+) is installed.

```bash
# Navigate to the js-problem directory
cd js-problem

# Run any solution file directly with node
node "1. arr_filter.js"
node "32. binary_search.js"
node "29. print_fizbuz.js"
```

---

## 👤 Author & Contributions

- **Author:** [Emon](https://github.com/emonhassan83)
- **Email:** emonhasan7650@gmail.com
- **Repository:** [practice-algorithum](https://github.com/emonhassan83/practice-algorithum)

### Contributing
Contributions, bug reports, optimizations, and cleaner implementations are always welcome! Feel free to fork the repository, create a descriptive feature branch, and submit a pull request.

---

<div align="center">
  <sub>Built with ❤️ for passionate problem solvers and software engineers. Happy Coding!</sub>
</div>
