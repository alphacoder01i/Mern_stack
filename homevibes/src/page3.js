import React from "react";
import d1 from './d1.png'
import d2 from './d2.png'
import d3 from './d3.png'
import d4 from './d4.png'
import d5 from './d5.png'
import f1 from './f1.png'
import f2 from './f2.png'
import f3 from './f3.png'
import f4 from './f4.png'
import f5 from './f5.png'
import l1 from './l1.png'
import l2 from './l2.png'
import l3 from './l3.png'
import l4 from './l4.png'
import l5 from './l5.png'

function page3(){
    return(
        <section className="categories-section">
      <h2 className="categories-title">CATEGORIES</h2>
      <div className="categories-grid">
        <div className="category-card furniture">
          <h3>FURNITURE</h3>
          <img src={f1} alt="Furniture 1" />
          <img src={f2} alt="Furniture 2" />
          <img src={f3} alt="Furniture 3" />
          <img src={f4} alt="Furniture 4" />
          <img src={f5} alt="Furniture 5" />
        </div>
        <div className="category-card decor">
          <h3>DÉCOR</h3>
          <img src={d1} alt="D1" />
          <img src={d2} alt="Décor 2" />
          <img src={d3} alt="Décor 3" />
          <img src={d4} alt="Décor 4" />
          <img src={d5} alt="Décor 5" />
        </div>
        <div className="category-card lighting">
          <h3>LIGHTING</h3>
          <img src={l1} alt="Lighting 1" />
          <img src={l2} alt="Lighting 2" />
          <img src={l3} alt="Lighting 3" />
          <img src={l4} alt="Lighting 4" />
          <img src={l5} alt="Lighting 5" />
        </div>
      </div>
    </section>
    );
}
export default page3;