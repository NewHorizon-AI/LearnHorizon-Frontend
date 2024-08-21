export interface IUser {
  _id: string
  username: string
  email: string
  password: string
}

// *Interfaz de usuario sin identificador
export interface IUserWithoutId extends Omit<IUser, '_id'> {}

// * Interfaz de usuario sin contraseña
export interface IUserWithoutPassword extends Omit<IUser, 'password'> {}
