import React from 'react'
import Carousel from 'better-react-carousel'
import '../../Styles/Gallery.css' // Adjust the path as necessary

const Gallery = () => {
  return (
    <div className="galleryCard">
        <Carousel cols={3} rows={1} gap={10} loop autoPlay={2000} autoPlaySpeed={2000} showDots>
      <Carousel.Item>
        <img width="100%" src="https://solarnaturally.com.au/wp-content/uploads/2018/01/how-do-solar-panels-work.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://d2x9k2q92xgm9r.cloudfront.net/wp-content/uploads/2024/01/10144614/spark-batts.webp" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://www.goldmedalindia.com/blog/wp-content/uploads/2022/11/House-Wire.jpg" />
      </Carousel.Item>
           <Carousel.Item>
        <img width="100%" src="https://www.sunrunesolar.com/uploads/Hybrid-home-solar-inverters-1.jpg" />
      </Carousel.Item>
           <Carousel.Item>
        <img width="100%" src="https://5.imimg.com/data5/SELLER/Default/2022/4/KH/PX/BR/1726832/solar-pv-data-monitoring-system-solar-scada-.jpg" />
      </Carousel.Item>
           <Carousel.Item>
        <img width="100%" src="https://eu-images.contentstack.com/v3/assets/blt8eb3cdfc1fce5194/blt15da882495d79cdf/664b362a8bf0eee4cdf7f7da/NJ1-Solar-470.jpg" />
      </Carousel.Item>
           <Carousel.Item>
        <img width="100%" src="https://standardstores.pk/cdn/shop/files/renogy-solar-power-accessories-rng-cnct-mc4x5-1f_600_600x600.jpg?v=1707834511" />
      </Carousel.Item>
           <Carousel.Item>
        <img width="100%" src="https://jvd-parts.com/media/b4/45/bb/1632308706/VD011031R%20-%20SB50%20Rood.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>

    </div>
  )
}

export default Gallery