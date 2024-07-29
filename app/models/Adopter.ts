import Dog from "./Dog";

export default class Adopter {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    dogs: Dog[]

    constructor(id: number, name: string, email: string, password: string, phone: string, address: string, city: string, state: string, zip: string, country: string, dogs: Dog[]) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
        this.dogs = dogs;
    }
}