//console.log("hello world");

import {Compagny} from "./Compagnie.ts";
import {User} from "./User.ts";

//const user = new User();
//const compagny = new Compagny();

//console.log(user);
//console.log(compagny);
//const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//    zoom:1,
//    center: {lat:0, lng:0}
//});

import { CustomMap } from "./CustomMap.ts";
const customMap = new CustomMap("map");
const user = new User();
const compagny = new Compagny();


customMap.addMarker(user);
customMap.addMarker(compagny);

console.log(user);
console.log(compagny);
