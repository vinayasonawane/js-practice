Mutable / Immutable --> mutability refers to whether a value's data can be changed after it is created

Immutable - Primitives (String, Number, Boolean, BigInt, Symbol, null, undefined) - Modifying a variable creates a brand-new value in memory.
Mutable - Objects {}, Arrays [], Functions - Modifying properties updates the exact same reference in memory.

Iterate - repeat any action
Something that you can go through one item at a time.
Common iterables:
String ✅
Array ✅
Set ✅
Map ✅

| Method         | Short meaning          | Single / Multiple | Example                                 |
| -------------- | ---------------------- | ----------------- | --------------------------------------- |
| **push()**     | Add to end             | **Multiple**      | `[1,2] → push(3,4) → [1,2,3,4]`         |
| **pop()**      | Remove from end        | **Single**        | `[1,2,3] → pop() → [1,2]`               |
| **shift()**    | Remove from start      | **Single**        | `[1,2,3] → shift() → [2,3]`             |
| **unshift()**  | Add to start           | **Multiple**      | `[2,3] → unshift(0,1) → [0,1,2,3]`      |
| **splice()**   | Add/remove/replace     | **Multiple**      | `[1,2,3,4] → splice(1,2) → [1,4]`       |
| **slice()**    | Copy a portion         | **Multiple**      | `[1,2,3,4] → slice(1,3) → [2,3]`        |
| **indexOf()**  | Find index             | **Single**        | `[10,20,30] → indexOf(20) → 1`          |
| **includes()** | Check if exists        | **Single**        | `[10,20,30] → includes(20) → true`      |
| **find()**     | Find first match       | **Single**        | `[5,12,18] → find(x=>x>10) → 12`        |
| **filter()**   | Find all matches       | **Multiple**      | `[5,12,18] → filter(x=>x>10) → [12,18]` |
| **map()**      | Transform every item   | **Multiple**      | `[1,2,3] → map(x=>x*2) → [2,4,6]`       |
| **reduce()**   | Combine into one value | **Single**        | `[1,2,3] → reduce((a,b)=>a+b) → 6`      |
