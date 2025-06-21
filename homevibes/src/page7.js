import React from "react";
import p71 from "./p71-removebg-preview.png";
import fb from "./fb.png";
import ig from "./ig.png";
import x from "./x.png";

function page7() {
  return (
    <div class="p7">
      <div class="header">
        <div class="header-l">
          <img src={p71} />
        </div>
        <div class="header-r">
          <img src={fb} />
          <img src={ig} />
          <img src={x} />
        </div>
      </div>
      <div>
        <div class="contact">
          <h1>Contact us</h1>
          <input placeholder="Full Name" />
          <input placeholder="E-mail" />
          <input placeholder="Message" />
          <button>Contact us</button>
        </div>
      </div>
    </div>
  );
}
export default page7;
