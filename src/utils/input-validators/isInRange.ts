/**
 * Verifica si un valor está dentro del rango de 1 a 179.
 * @param value - El valor a verificar
 * @returns `true` si el valor está en el rango, `false` si no lo está
 */
export const isInRange = (
  value: number,
  min: number = 1,
  max: number = 179
): boolean => {
  const numValue = Number(value)
  return numValue >= min && numValue <= max
}
