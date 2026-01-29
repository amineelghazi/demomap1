import { faker} from "@faker-js/faker"
import { Mappable} from "./CustomMap.ts"

export class Compagny implements Mappable {
    name:String;
    catchphrase:string;
    location: {
        lat:number,
        lon:number
    };

    constructor(){
        this.name = faker.company.name();
        this.catchphrase = faker.company.catchPhrase()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lon: parseFloat(faker.address.longitude())
        };
    }
    markerContent():String{
        return `<h2> Compagnie Name : ${this.name}</h2>
                <p>Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, 
                 sed do eiusmod tempor incididunt
                 ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud
                 exercitation ullamco laboris nisi ut aliquip</p>
                 <br>
                 <h5> consectetur adipiscing elit, 
                 sed do eiusmod tempor incididunt </h5>`
                 
    }
}