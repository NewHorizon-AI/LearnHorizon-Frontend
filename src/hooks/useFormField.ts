import { useState } from 'react'
import { type StateHandler } from '@/interfaces/formData/INewPublication'

/**
 * Hook personalizado para gestionar el estado de un campo de formulario.
 *
 * @template T - Tipo del valor del campo.
 * @param {T} initialValue - Valor inicial del campo.
 * @returns {StateHandler<T>} - Objeto que contiene el valor del campo y una función para actualizarlo.
 */
export default function useFormField<T>(initialValue: T): StateHandler<T> {
  // Estado que almacena el valor del campo
  const [value, setValue] = useState<T>(initialValue)

  /**
   * Función para actualizar el valor del campo.
   *
   * @param {T} newValue - Nuevo valor para el campo.
   * @returns {void}
   */
  const updateValue = (newValue: T): void => {
    setValue(newValue)
  }

  // Retorna un objeto con el valor actual del campo y la función para actualizarlo
  return { value, setValue: updateValue }
}
