import { faker} from "@faker-js/faker"
import { Mappable} from "./CustomMap.ts"

export class User implements Mappable{
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
    
    markerContent():String{
        return `<h1> User Name : ${this.name}</h1>
                <p>Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, 
                 sed do eiusmod tempor incididunt
                 ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud
                 exercitation ullamco laboris nisi ut aliquip</p>
                 <h4> consectetur adipiscing elit, 
                 sed do eiusmod tempor incididunt </h4>`
                 
    }
}