# package-sort
What this does
Implements `sort(width, height, length, mass)` to classify a package as:
- "STANDARD" when not bulky and not heavy
- "SPECIAL" when exactly one of bulky or heavy is true
- "REJECTED" when both bulky and heavy are true

Rules
- Bulky if volume >= 1_000_000 cm^3 or any dimension >= 150 cm
- Heavy if mass >= 20 kg

How to run
1) Install: `npm install`
2) Run sample: `npm start`
3) Run tests: `npm test`

Examples
- sort(100, 100, 100, 10) -> "SPECIAL" because volume is 1,000,000 (bulky), not heavy
- sort(10, 10, 10, 25) -> "SPECIAL" because heavy only
- sort(200, 10, 10, 25) -> "REJECTED" bulky and heavy
- sort(10, 10, 10, 5) -> "STANDARD"
