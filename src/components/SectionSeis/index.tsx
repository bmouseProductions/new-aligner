import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../index.css";

import { Pagination } from "swiper/modules";

export const SectionSeis = () => {
  return (
    <>
      <div className="py-10 text-black">
        <div className="m-auto bg-white text-center bg-opacity-30 backdrop-blur-md md:rounded-3xl  transition-all duration-300 p-6 text-black  md:w-[80%] lg:w-[50%]">
          <h3 className="text-xl lg:text-2xl">Veja a opinião de</h3>
          <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold">
            Nossos Credenciados e seus Pacientes
          </h1>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-[100%] md:w-[80%] py-10 lg:w-[60%] "
        >
          <SwiperSlide className="m-auto">
            <iframe
              className="rounded-3xl shadow-2xl m-auto"
              width="276"
              height="500"
              src="https://www.youtube.com/embed/sJlabUUzBoo"
              title="Depoimento Talita Vidal"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </SwiperSlide>
          <SwiperSlide className="m-auto">
            <iframe
              className="rounded-3xl shadow-2xl m-auto"
              width="276"
              height="500"
              src="https://www.youtube.com/embed/CxqBunNfxL0"
              title="Depoimento Dra. Carolina Ramiro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </SwiperSlide>
          <SwiperSlide className="m-auto">
            <iframe
              className="rounded-3xl shadow-2xl  m-auto"
              width="276"
              height="500"
              src="https://www.youtube.com/embed/azEXTT2LglA"
              title="Depoimento Dr. Theo Hackbart"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </SwiperSlide>
          <SwiperSlide className="m-auto">
            <iframe
              className="rounded-3xl shadow-2xl  m-auto"
              width="276"
              height="500"
              src="https://www.youtube.com/embed/CRU98Hhi1Kg"
              title="Depoimento Dr. Giovanne Moro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </SwiperSlide>
          <SwiperSlide className="m-auto">
            <iframe
              className="rounded-3xl shadow-2xl  m-auto"
              width="276"
              height="500"
              src="https://www.youtube.com/embed/sJlabUUzBoo"
              title="Depoimento Talita Vidal"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
