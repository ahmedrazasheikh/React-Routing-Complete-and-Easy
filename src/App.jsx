import "./App.css"
import React from 'react';
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import moment from "moment/moment";
import { getFirestore, collection, addDoc, getDocs, query, where, onSnapshot  } from "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD0YLt5ADq9557bj6NeGgp8Mhir4ORwL6s",
    authDomain: "newsdf-f95ba.firebaseapp.com",
    databaseURL: "https://newsdf-f95ba-default-rtdb.firebaseio.com",
    projectId: "newsdf-f95ba",
    storageBucket: "newsdf-f95ba.appspot.com",
    messagingSenderId: "631326539188",
    appId: "1:631326539188:web:b4b517649601cfc8ab06e1",
    measurementId: "G-HMTMYPQB9L"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);





function App() {


    let [input, setInput] = useState("")
    let [array, setArray] = useState([]);


    useEffect(() => {
        let showData = async () => {

            const querySnapshot = await getDocs(collection(db, "Ahmed"));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} =>`, doc.data());


                setArray((prev) => {
                    let newArray = [...prev, doc.data()]
                    return newArray;
                })


            });

        }
        // showData()
        let unsubscribe = null
let realTimeData = () =>{
    const q = query(collection(db, "Ahmed"),);
     unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
          cities.unshift(doc.data());
          cities.sort()
      });
      setArray(cities)
      console.log("The Current Value: ", cities);
    });
}

realTimeData()



return(()=>{
    unsubscribe()
})

    }, [])






    async function dataGet(e) {
        console.log(e)
        e.preventDefault()
        const d = new Date();

        try {
            const docRef = await addDoc(collection(db, "Ahmed"), {
                data: input,
                date: moment(d).format('MMMM Do YYYY, h:mm:ss a')
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }


        e.target.value = ""

    }

    return (

        <div>

            <form onSubmit={dataGet} >

                <input type="text" onChange={(e) => (setInput(e.target.value))} />
                <button type="submit" >Click Here</button>
            </form>







            {array.map((value, i) => (

                <div className="yy" key={i}    >
                    <h1>{value.data}</h1>
                    <h1>{value.date}</h1>
                </div>
            ))}

        </div>


    )
}






export default App;