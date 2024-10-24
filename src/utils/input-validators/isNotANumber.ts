/**
 * Verifica si un valor es un número.
 * @param value - El valor a verificar
 * @returns `true` si el valor no es un número, `false` si es un número válido
 */
export const isNotANumber = (value: any): boolean => {
  return isNaN(Number(value))
}
