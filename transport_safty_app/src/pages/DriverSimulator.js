import React,{useEffect} from "react";
import { db } from "../firebase";
import { doc,setDoc } from "firebase/firestore";

function DriverSimulator(){

useEffect(()=>{

navigator.geolocation.watchPosition(async(position)=>{

await setDoc(doc(db,"busLocation","bus1"),{

lat:position.coords.latitude,
lng:position.coords.longitude,
time:Date.now()

});

});

},[]);

return(

<div style={{padding:"40px"}}>

<h2>Driver GPS Simulator Running...</h2>

<p>Location sending to Firebase</p>

</div>

);

}

export default DriverSimulator;