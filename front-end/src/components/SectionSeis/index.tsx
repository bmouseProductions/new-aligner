import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css";
import { Pagination } from "swiper/modules";

export const SectionSeis = () => {
  return (
    <>
      <div className=" text-black">
        <div className="m-auto  text-center  p-10 text-black  w-full ">
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
          modules={[Pagination]}
          className="mySwiper hidden lg:block md:w-[80%] py-10 lg:w-[90%] "
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
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper py-10 lg:hidden"
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
