import React from 'react'
import  "./style.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function Slider() {
    return (
        <div>

            <Swiper className='slider'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                // spaceBetween={50}
                slidesPerView={1}
                navigation
                loop = {true}
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide  className='slide1'> 
                <div className='content'>
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quisquam hic recusandae.
                </h1>
                </div>
                </SwiperSlide>
                <SwiperSlide className='slide2'>jhduf</SwiperSlide>
                <SwiperSlide className='slide3'>Slide 3</SwiperSlide>
                ...
            </Swiper>
        </div>
    )
}

export default Slider