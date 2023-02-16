export interface InputContainerProps {
    backGroundcolor?: string;
    shadow?: boolean
}

export interface InputFieldProps {
    bottomLine?: boolean;
}

export interface LoginData {
    email: string
    password: string
}

export interface RegisterData {
    email: string
    fname: string
    lname: string
    passw: string
}

export interface CreateUserParams {
    email: string
    firstName: string
    lastName: string
    password: string
}