export interface User {
    id: number,
    email: string,
    username: string,
    password: string,
    name: UserNames,
    address: UserAddress,
    phone: string,
}

export interface UserNames {
    firstname: string,
    lastname: string,
}

export interface UserAddress {
    city: string,
    street: string,
    number: number,
    zipcode: string,
    geolocation: AddressGeolocation,
}

export interface AddressGeolocation {
    lat: string,
    long: string,
}

export type LoginRequest = Pick<User, 'username' | 'password'>;

export type LoginResponse = { token: string };

export type RegisterRequest = Pick<User, 'email' | 'username' | 'password'>;

export type RegisterResponse = Pick<User, 'id'>;