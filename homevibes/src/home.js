import menu from "./menu2.png";
import p21 from "./img/page1.png";
import p11 from "./p11-removebg-preview.png";
import p12 from "./p12-removebg-preview.png";
import p13 from "./shop-removebg-preview.png";

import p14 from "./p14-removebg-preview.png";

import newArrivalImg from "./p212.png";
import bestSeller from "./p222.png";
import catImg1 from "./f1.png";
import catImg2 from "./f4.png";
import catImg3 from "./f2.png";
import catImg4 from "./f3.png";
import catImg5 from "./f5.png";

import catImg6 from "./d1.png";
import catImg7 from "./d2.png";
import catImg8 from "./d3.png";
import catImg9 from "./d4.png";

import collectionImg1 from "./p41.png";
import collectionImg2 from "./p42.png";
import collectionImg3 from "./p43.png";

import desginerImg from "./p51.png";

import reviewIcon from "./img/review_icon.png";
import review_user1 from "./img/review_user_1.png";
import review_user2 from "./img/review_user_2.png";
import review_user3 from "./img/review_user_3.png";

import contactBck from "./img/contact-bck.jpg";

import email_icon_text from "./img/email_text.png";
import social_icons from "./img/social_icons.png";

import footer_icon from "./img/footer_icon.png";

import mob_menu from "./img/menu.png";

import new_arrival from "./img/new_arrival.png";
import best_seller from "./img/best_seller.png";

export function Home() {
  return (
    <>
      <div className="nav">
        <div className="flex justify-center items-center">
          <img src={menu} alt="menu" class="menu" />
          <h2>HomeVibes</h2>
        </div>

        <div className="ml-auto">
          <div class="desk-header header-r items-center ">
            <img src={p11} />
            <img src={p12} />
            <img src={p13} />
            <img src={p14} />
            <p className="text-white">Log in/Signup</p>
          </div>

          <div className="mob-header items-center">
            <img src={mob_menu}></img>
          </div>
        </div>
      </div>

      <div className="main_container">
        <div className="page">
          <div className="slide">
            <div className="slide-img">
              <img src={p21} />
            </div>
            <div className="slide-text">
              <h1>Crafted with passion, designed for comfort</h1>

              <div className="flex gap-3 justify-start w-full">
                <a className="btn-primary" href="#cat-page">
                  View our latest collection
                </a>
                <a className="btn-primary" href="#cats">
                  Browse Categories
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="page desk_page">
          <div className="p2-container flex items-center justify-between bg-blue-950 gap-4 ">
            <div className="left-container">
              <img src={newArrivalImg}></img>
            </div>
            <div className="right-container">
              <img src={bestSeller}></img>
            </div>
          </div>
        </div>
        <div className="page mob_page">
          <div className="p2-container flex flex-col items-center justify-between gap-4 ">
            <div className="rounded-sm overflow-hidden">
              <img src={new_arrival}></img>
            </div>
            <div className="rounded-sm overflow-hidden">
              <img src={best_seller}></img>
            </div>
          </div>
        </div>

        <div className="page" id="cats">
          <div className="p3-container flex items-center justify-center p-3 flex-col ">
            <h1 className="text-white pt-6">CATEGORIES</h1>

            <div className="flex w-full justify-between p-10">
              <div className="cat-cont">
                <div className="cat-box">
                  <div className="floating-img-1 floating-img">
                    <img src={catImg1}></img>
                  </div>
                  <div className="floating-img-2 floating-img">
                    <img src={catImg2}></img>
                  </div>
                  <div className="floating-img-3 floating-img">
                    <img src={catImg3}></img>
                  </div>
                  <div className="floating-img-4 floating-img">
                    <img src={catImg4}></img>
                  </div>
                  <div className="floating-img-5 floating-img">
                    <img src={catImg5}></img>
                  </div>
                  FURNITURE
                </div>
              </div>
              <div className="cat-cont">
                <div className="cat-box">
                  <div className="floating-img-1 floating-img">
                    <img src={catImg6}></img>
                  </div>
                  <div className="floating-img-2 floating-img">
                    <img src={catImg7}></img>
                  </div>
                  <div className="floating-img-3 floating-img">
                    <img src={catImg8}></img>
                  </div>
                  <div className="floating-img-4 floating-img">
                    <img src={catImg8}></img>
                  </div>
                  <div className="floating-img-5 floating-img">
                    <img src={catImg9}></img>
                  </div>
                  DECOR
                </div>
              </div>
              <div className="cat-cont">
                <div className="cat-box">
                  <div className="floating-img-1 floating-img">
                    <img src={catImg6}></img>
                  </div>
                  <div className="floating-img-2 floating-img">
                    <img src={catImg2}></img>
                  </div>
                  <div className="floating-img-3 floating-img">
                    <img src={catImg3}></img>
                  </div>
                  <div className="floating-img-4 floating-img">
                    <img src={catImg4}></img>
                  </div>
                  <div className="floating-img-5 floating-img">
                    <img src={catImg5}></img>
                  </div>
                  LIGHTHING
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page" id="cat-page">
          <div className="p4-container flex items-center justify-center p-3 flex-col ">
            <h1 className="text-white pt-6">Exciting Collections</h1>
            <p className="text-gray-300 text-lg">Curated specially for you</p>

            <div className="flex collections justify-between py-6">
              <img src={collectionImg1}></img>
              <img src={collectionImg2}></img>
              <img src={collectionImg3}></img>
            </div>
          </div>
        </div>

        <div className="page ">
          <div className="p5-container flex w-full">
            <div className="desginer_img flex justify-center">
              <img src={desginerImg}></img>
            </div>
            <div className="designer_text flex-1 gap-3">
              <div className="flex justify-end">
                <h3 className="text-xl text-white uppercase">
                  Designers and makers
                </h3>
              </div>
              <div className="flex justify-end p-10 pr-0">
                <h3 className="text-[38px] text-white max-w-[600px] font-bold text-right ">
                  Discover the artistry and craftsmanship behind HomeVibe with
                  our skilled designers and makers{" "}
                </h3>
              </div>
              <div className="flex justify-end">
                <button className="btn-primary bg-white rounded-3xl w-[240px] py-3 ">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="page ">
          <div className="p6-container flex w-full p-20 justify-center items-center gap-10">
            <div className="review-cont flex flex-col items-center justify-center gap-3 p-16 bg-[#F3F3F3]">
              <div className="review-icon">
                <img src={reviewIcon}></img>
              </div>
              <p className="text-center ">
                I purchased a set of outdoor furniture from this company and I
                am so impressed with the durability and design. The furniture
                has held up well in all types of weather and the cushions are
                easy to clean.
              </p>

              <img className="rev_user" src={review_user1}></img>
            </div>

            <div className="review-cont flex flex-col items-center justify-center gap-3 p-16 bg-[#F9BA7F] top-[-50px]">
              <div className="review-icon">
                <img src={reviewIcon}></img>
              </div>
              <p className="text-center ">
                I recently purchased a sectional sofa from this company and I
                have been extremely pleased with it. The fabric is high quality
                and the cushions are very comfortable. The delivery process was
                smooth and hassle-free. I highly recommend HomeVibes
              </p>

              <img className="rev_user" src={review_user2}></img>
            </div>
            <div className="review-cont flex flex-col items-center justify-center gap-3 p-16 bg-[#F3F3F3]">
              <div className="review-icon">
                <img src={reviewIcon}></img>
              </div>
              <p className="text-center ">
                "I purchased a bed frame from this furniture brand and it
                exceeded my expectations. The quality is top-notch and the
                design is modern and sleek. The customer service was also
                fantastic, and the delivery was prompt. I highly recommend this
                furniture brand
              </p>

              <img className="rev_user" src={review_user3}></img>
            </div>
          </div>
        </div>

        <div className="page ">
          <div className="p7-container flex flex-col w-full p-20 pt-10 relative min-h-[800px]">
            <div className="flex w-full justify-between pb-10">
              <img src={email_icon_text} height={40}></img>
              <img src={social_icons} height={40}></img>
            </div>
            <img src={contactBck} className="contact_bck"></img>
            <div className="w-[400px] flex-col gap-3 ml-[50%]">
              <h1 className="text-white text-6xl font-light">Contact us</h1>
              <div className="mt-[40px] flex flex-col gap-8 w-full">
                <input
                  className="contact-input"
                  placeholder="Full Name"
                ></input>
                <input className="contact-input" placeholder="E-mail"></input>
                <input className="contact-input" placeholder="Message"></input>
                <button className="btn-primary bg-white rounded-3xl w-full py-3 text-3xl ">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="page ">
          <div className="p8-container flex flex-col w-full p-20 pt-10 relative ">
            <div className="flex w-full">
              <img src={footer_icon}></img>
            </div>

            <div className="footer-container flex w-full pt-20 justify-between">
              <div className="col-1 flex flex-col gap-5">
                <h2 className="text-white text-2xl">
                  Keep up to date with new collection and festive sales
                </h2>
                <input
                  className="footer-input border-0 bg-transparent px-3 py-4"
                  placeholder="Enter your email"
                ></input>
                <p className="text-lg text-gray-300">
                  We respect your privacy, we’ll not spam you ! Read our{" "}
                  <span className="text-blue-500">privacy policy </span>here.
                </p>

                <div className="desk-terms flex gap-20 text-white mt-[50px]">
                  <b>TERMS & CONDITIONS</b>
                  <b>PRIVACY POLICY</b>
                </div>
              </div>

              <div className="col-1 flex justify-between gap-20 px-[40px]">
                <div className="inner-col-1 flex flex-col">
                  <h4 className="uppercase text-[#F9BA7F]">COmpany</h4>

                  <div className="py-3 text-white flex flex-col gap-5">
                    <span>About Us</span>
                    <span>Careers</span>
                    <span>Contact us</span>
                    <span>Find a showroom</span>
                  </div>
                </div>
                <div className="inner-col-2 flex flex-col">
                  <h4 className="uppercase text-[#F9BA7F]">Products</h4>

                  <div className="py-3 text-white flex flex-col gap-5">
                    <span>Categories</span>
                    <span>New Arrivals</span>
                    <span>Best sellers</span>
                    <span>Collections</span>
                  </div>
                </div>
              </div>
              <div className=" mob-terms flex gap-20 text-white mt-[50px]">
                <b>TERMS & CONDITIONS</b>
                <b>PRIVACY POLICY</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}