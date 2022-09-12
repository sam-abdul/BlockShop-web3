import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import brand1 from "../public/asset/brand1.png";
import brand2 from "../public/asset/brand2.png";
import brand3 from "../public/asset/brand3.png";
import brand4 from "../public/asset/brand4.png";
import brand5 from "../public/asset/brand5.png";
import brand6 from "../public/asset/brand6.png";
import brand7 from "../public/asset/brand7.png";
import brand8 from "../public/asset/brand8.png";
import brand9 from "../public/asset/brand9.png";
import brand10 from "../public/asset/brand10.png";
import brand11 from "../public/asset/brand11.png";
import styles from "../styles/com.module.css";

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",

      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };
    return (
      <div>
        <div className={styles.h2Body}>
          <div className={styles.fifty_title}>Most bought Brand </div>
        </div>
        <div className={styles.Brand}>
          <Slider {...settings}>
            <div>
              <Image src={brand1} height={150} width={200} />
            </div>
            <div>
              <Image src={brand2} height={150} width={200} />
            </div>
            <div>
              <Image src={brand3} height={150} width={200} />
            </div>
            <div>
              <Image src={brand4} height={150} width={200} />
            </div>
            <div>
              <Image src={brand5} height={150} width={200} />
            </div>
            <div>
              <Image src={brand6} height={150} width={200} />
            </div>
            <div>
              <Image src={brand7} height={150} width={200} />
            </div>
            <div>
              <Image src={brand8} height={150} width={200} />
            </div>
            <div>
              <Image src={brand9} height={150} width={200} />
            </div>
            <div>
              <Image src={brand10} height={150} width={200} />
            </div>
            <div>
              <Image src={brand11} height={150} width={200} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
