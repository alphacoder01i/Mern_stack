import React from "react";
import p21 from './p212.png'
import p22 from './p222.png'

function page2(){
    return(
        <div class="p2">
            <div class="pic1">
                <img src={p21}/>
            </div>
            <div class="pic2">
            <img src={p22} />
            </div>
        </div>
    );
}
export default page2;