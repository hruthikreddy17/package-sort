// Simple CLI runner with sample calls

import { sort } from "./sorter.js";

// Example inputs for quick manual verification
const samples = [
  { width: 100, height: 100, length: 100, mass: 10 }, // bulky only
  { width: 10, height: 10, length: 10, mass: 25 },    // heavy only
  { width: 200, height: 10, length: 10, mass: 25 },   // bulky and heavy
  { width: 10, height: 10, length: 10, mass: 5 }      // neither
];

// Print results
for (const s of samples) {
  const result = sort(s.width, s.height, s.length, s.mass);
  console.log(
    `sort(${s.width}, ${s.height}, ${s.length}, ${s.mass}) -> ${result}`
  );
}
