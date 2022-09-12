import React, { Component } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import header1 from '../public/asset/header.png'
import header2 from '../public/asset/header2.png'
import styles from '../styles/com.module.css'


export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      
    };
    return (
      <div className={styles.carousel}>
        <Slider {...settings}>
          <div>
            <Image src={header1} />
          </div>
          <div>
            <Image src={header2} />
          </div>
        </Slider>
      </div>
    );
  }
}
