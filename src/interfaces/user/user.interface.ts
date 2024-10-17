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

// * Interfaz para crear un usuario
export interface IPostUser extends Omit<IUser, '_id' | 'last_login'> {}

// * Interface para UserProfile
export interface IUserProfile {
  name: string // Nombre del usuario
  biography?: string // ? Biografía del usuario
  image?: string // ? Foto de perfil del usuario
  gender: string // Género del usuario
  birthdate: Date // Fecha de nacimiento del usuario
  idiom: string // Idioma preferido del usuario
}

// * Interface para UserContact
export interface IUserContact {
  address?: string // ? Dirección del usuario
  phone: string // Teléfono del usuario
}

// * Interface para UserData
export interface IUserData {
  user_id: string // ID del usuario (referencia a User)
  articles_count: number // Número de artículos escritos por el usuario
  comments_count: number // Número de comentarios hechos por el usuario
}

// *Interfaz de usuario sin identificador
export interface IUserWithoutId extends Omit<IUser, '_id'> {}

// * Interfaz de usuario sin contraseña
export interface IUserWithoutPassword extends Omit<IUser, 'password'> {}

export interface IUserProfileData extends IUserWithoutPassword {}

export interface ICompositeUser
  extends IUser,
    Partial<IUserProfile>,
    Partial<IUserContact>,
    Partial<IUserData> {}
