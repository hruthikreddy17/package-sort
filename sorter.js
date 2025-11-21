/**
 * Classify a package by dimensions (cm) and mass (kg).
 * @param {number} width  - width in cm
 * @param {number} height - height in cm
 * @param {number} length - length in cm
 * @param {number} mass   - mass in kg
 * @returns {"STANDARD"|"SPECIAL"|"REJECTED"}
 */
export function sort(width, height, length, mass) {
  // Guard against invalid inputs and NaN
  // Convert to Number and validate non-negative finite values
  const w = Number(width);
  const h = Number(height);
  const l = Number(length);
  const m = Number(mass);

  // Throwing makes issues obvious during tests and CI
  if (![w, h, l, m].every(x => Number.isFinite(x) && x >= 0)) {
    throw new Error("All inputs must be non-negative finite numbers");
  }

  // Compute volume in cubic centimeters
  const volume = w * h * l;

  // Bulky if volume >= 1,000,000 cm^3 OR any dimension >= 150 cm
  const isBulky = volume >= 1_000_000 || w >= 150 || h >= 150 || l >= 150;

  // Heavy if mass >= 20 kg
  const isHeavy = m >= 20;

  // If both bulky and heavy, reject
  if (isBulky && isHeavy) return "REJECTED";

  // If exactly one is true, special
  if (isBulky || isHeavy) return "SPECIAL";

  // Otherwise standard
  return "STANDARD";
}
