import React ,{useRef}from "react";
import menu from './menu2.png'
import Page4 from "./page4";
import p11 from './p11-removebg-preview.png'
import p12 from './p12-removebg-preview.png'
import p13 from './shop-removebg-preview.png'

import p14 from './p14-removebg-preview.png'
    

function page1(){
    return(
        <div class="p1">
            <div class="header">
            <div class="header-l">
                <img src={menu} alt="menu" class="menu"/>
                <h2>HomeVibes</h2>
                </div>
            <div class="header-r">
                <img src={p11}/>
                <img src={p12}/>
                <img src={p13}/>
                <img src={p14}/>
                <p>Log in/Signup</p>
            </div></div>
            <h1>Crafted with passion, designed for comfort</h1>
            <a class="btn1">View our latest collections</a>
            <a class="btn2">Browse categories</a>
        </div>
        
    );
}
export default page1;