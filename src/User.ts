import { faker} from "@faker-js/faker"

export class User {
    name:String;
    location: {
        lat:number,
        lon:number
    }

    constructor(){
        this.name = faker.name.fullName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lon: parseFloat(faker.address.longitude())
        };
    }
}