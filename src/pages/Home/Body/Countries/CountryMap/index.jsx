import { Grid, Typography } from "@mui/material";
import React from "react";
import Destinations from "../../../../../data/countries";
import CountryList from "../CountryList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CountryMap = () => {
  return (
    <Grid
      sx={{
        display: "flex",

        width: "100%",
      }}
    >
      <Swiper
        slidesPerView={4}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
        onSlideChange={() => console.log("slide change")}
      >
        {Destinations.map((item) => (
          <SwiperSlide>
            <CountryList key={item.title} name={item.title} img={item.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
};

export default CountryMap;
