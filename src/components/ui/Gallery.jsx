import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../Styles/Gallery.css"; // Assuming you have a CSS file for styling

export default function SolarCarousel() {
  const [images, setImages] = useState([]);

  // Simulate dynamic data loading
  useEffect(() => {
    const fetchImages = async () => {
      // Normally you'd fetch from an API. Here we use static URLs.
      const imageList = [
        "https://www.energy-storage.news/wp-content/uploads/2021/08/Array_of_different_battery_cell_types_-_PI_Berlin.jpg",
        "https://www.reuters.com/resizer/v2/HAPSADJSXVNOFKWHDG5KG5T5OU.jpg?auth=d5ba343d17bc666df00b3401e8be242c3552fcdadc3f04869c1446d085222a7c&height=1920&width=1920&quality=80&smart=true",
        "https://quartzcomponents.com/cdn/shop/products/4s-10A-Bms.jpg?v=1654687664",
        "https://www.pamojatoursandtravel.com/wp-content/uploads/2024/09/Nairobi-City-County-15-2.jpg",
        "https://jaydeeautocables.com.au/cdn/shop/products/SB30_0836d295-bc44-44d3-bdfc-ec5268226787.jpg?v=1733890933https://www.shutterstock.com/image-photo/close-solar-panels-on-roof-600nw-2232063223.jpg",
        "https://www.smsengs.com/wp-content/uploads/2025/03/Solar-Panel-MC4-Connector-ip68-Copper-Pin-Waterproof-1500V-Male-Female-3.webp",
        "https://i5.walmartimages.com/asr/ca4716f4-8341-4783-9518-ef460f66e931.1b214c92906f8d64f2ca4a38072b7a83.jpeg",
      ];
      setImages(imageList);
    };

    fetchImages();
  }, []);

  return (
    <div className="carousel-wrapper">
      <Swiper
        slidesPerView={3}
        spaceBetween={16}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            // For all phones (width 0px and up)
            slidesPerView: 1,
          },
          768: {
            // Tablets and up
            slidesPerView: 2,
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="solar-swiper"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`slide-${idx}`} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
