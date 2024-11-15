// * Interfaz para User
export interface IUser {
  _id: string // Identificador único del usuario
  username: string // Nombre de usuario
  email: string // Correo electrónico
  password: string // Contraseña encriptada
  role: string // Rol del usuario (por ejemplo, 'external')
  createdAt: Date // Fecha de creación del usuario
  updatedAt: Date // Fecha de última actualización del usuario
  last_login?: Date // Fecha del último inicio de sesión (opcional)
  __v: number // Versión del documento en MongoDB
}

export interface IArticleUser
  extends Pick<IUser, '_id' | 'username' | 'role'> {}

// * Interfaz para crear un usuario
export interface IPostUser extends Omit<IUser, '_id' | 'last_login'> {}

// * Interfaz de usuario sin contraseña
export interface IUserWithoutPassword extends Omit<IUser, 'password'> {}
