"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Clients = () => {
    const clients = ["ebeezy.png","comras.png","platuemarket.png", "kovai.png", "mirdishop.png","souqalain.png"];
    return (
        <div className=' py-16'>
            <section className='commonwidth'>
            <h1 className='text-2xl font-bold text-primary text-center mb-10'>Successful Businesses Choose Cartex</h1>
            
            <Swiper
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
       
      >
        {
            clients.map((c, i) => <SwiperSlide key={i}>
                <img src={`/clients/${c}`} className='h-10' alt="" />
            </SwiperSlide>)
        }
        
    
      </Swiper>
            </section>
        </div>
    );
}

export default Clients;