import React from "react";
import "./Home.css";
import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <Carousel
          className="carousel"
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          dynamicHeight={true}
          infiniteLoop={true}
          interval={5000}
          autoPlay={true}
          transitionTime={2500}
          showArrows={false}
          swipeable={true}
          emulateTouch={true}
        >
          <div>
            <img
              className="home_container_banner"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/Changestore/2X_SMP_D_Cricket._CB670313030_.jpg"
              alt="amazon banner"
            />
          </div>
          <div>
            <img
              className="home_container_banner"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-2x._CB658860139_.jpg"
              alt="amazon banner"
            />
          </div>
          <div>
            <img
              className="home_container_banner"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/M42/29thApr_GW/D22355038_IN_WLME_SamsungGalaxy_M42_New_Launch_DesktopTallHero_3000x1200._CB670770441_.jpg"
              alt="amazon banner"
            />
          </div>
          <div>
            <img
              className="home_container_banner"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/March-21/Network_Hero_banners/HeroPC_3000x1200_5._CB657960986_.jpg"
              alt="amazon banner"
            />
          </div>
          <div>
            <img
              className="home_container_banner"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Beauty/GW/April/21-Makeup-kits--accessories-3000x1200._CB656404607_.jpg"
              alt="amazon banner"
            />
          </div>
          <div>
            <img
              className="home_container_banner"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Mumbai_saga/3000x1200_Hero-Tall_JPN._CB670362846_.jpg"
              alt="amazon banner"
            />
          </div>
          <div>
            <img
              className="home_container_banner"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/kitchen/Kitchen_Under999-3000x1200._CB655159544_.jpg"
              alt="amazon banner"
            />
          </div>
          <div>
            <img
              className="home_container_banner"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/under_1499_updated/v1/tall_hero_3000x1200._CB655764075_.jpg"
              alt="amazon banner"
            />
          </div>
        </Carousel>

        <div className="home_container_row">
          <Product
            product_id="12344"
            product_title="New Apple iPhone 12 Pro (256GB) - Graphite"
            product_price={129900}
            product_image="https://images-na.ssl-images-amazon.com/images/I/71YlH-4MUQL._SL1500_.jpg"
            product_rating={5}
          />
          <Product
            product_id="123"
            product_title="Samsung Galaxy Tab S6 Lite (10.4 inch, RAM 4 GB, ROM 64 GB, Wi-Fi-only), Oxford Grey"
            product_price={26999}
            product_image="https://images-na.ssl-images-amazon.com/images/I/712YC1bGhJL._SL1500_.jpg"
            product_rating={4}
          />
          <Product
            product_id="1234567"
            product_title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            product_price={18900}
            product_image="https://images-na.ssl-images-amazon.com/images/I/71EoGntO5bL._SL1500_.jpg"
            product_rating={4}
          />
        </div>
        <div className="home_container_row">
          <Product
            product_id="12"
            product_title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            product_price={153900}
            product_image="https://images-na.ssl-images-amazon.com/images/I/8199O-5w1xL._SL1500_.jpg"
            product_rating={5}
          />
        </div>
        <div className="home_container_row">
          <Product
            product_id="123678"
            product_title="OnePlus 138.8 cm (55 inches) Q1 Series 4K Certified Android QLED TV 55Q1IN-1 (Black) (Without Stand)"
            product_price={62899}
            product_image="https://images-na.ssl-images-amazon.com/images/I/71EO3uGdJbL._SL1500_.jpg"
            product_rating={4}
          />
          <Product
            product_id="098"
            product_title="Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black) | With Data Saver"
            product_price={13499}
            product_image="https://images-na.ssl-images-amazon.com/images/I/71sBGR6LZhL._SL1500_.jpg"
            product_rating={4}
          />
        </div>
        <div className="home_container_row">
          <Product
            product_id="7843"
            product_title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
            product_price={2249}
            product_image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
            product_rating={4}
          />
          <Product
            product_id="23456765"
            product_title="HONOR Band 5(MidnightNavy)- AMOLED Touchscreen, SpO2"
            product_price={2099}
            product_image="https://images-na.ssl-images-amazon.com/images/I/81PvKZ1jnjL._SL1500_.jpg"
            product_rating={4}
          />
          <Product
            product_id="4567876"
            product_title="Python: For Beginners: A Course To Learn Python in 1 Week"
            product_price={1984}
            product_image="https://m.media-amazon.com/images/I/41hWLzgKJgL.jpg"
            product_rating={4}
          />
          <Product
            product_id="34543234567"
            product_title="Razer Mamba Wireless:  Ergonomic Gaming Mouse"
            product_price={12009}
            product_image="https://images-na.ssl-images-amazon.com/images/I/71I6p3xRAZL._SL1500_.jpg"
            product_rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
