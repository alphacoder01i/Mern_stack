import React from "react";
import p41 from './p41.png'
import p42 from './p42.png'
import p43 from './p43.png'
function page4(){
    return(
        <div class="p4" id="p4">
            <div class="page4head">
            <p class="h2">Exciting collections</p>
            <p class="h3">curated specially for you</p></div>
            <div class="collection">
                <span>
            <img src={p41} /></span>
            <span>
            <img src={p42} class="p42"/></span>
            <span>
            <img src={p43} /></span>
            </div>
        </div>
        
    );
}
export default page4;