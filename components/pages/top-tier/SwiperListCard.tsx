import { IPlayerTopTier, PlayerSeasonDetailRes } from "@/model/player/player";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import styleTopTier from "@/styles/topTier.module.css";
import stylePlayer from "@/styles/player.module.css";
import clsx from "clsx";
import { PlayerCard } from "./components/PlayerCard";

interface Props {
  listData: IPlayerTopTier[];
  backgroundItemCard?: string;
}

const SwiperListCard = ({ listData, backgroundItemCard }: Props) => {
  return (
    <Swiper
      slidesPerView={9}
      grabCursor
      scrollbar={{
        draggable: true,
        dragSize: 90,
        dragClass: clsx(styleTopTier.slide_top_tier),
        horizontalClass: clsx(styleTopTier.slide_top_tier_horizontal),
      }}
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 6,
        },
        1300: {
          slidesPerView: 9,
        },
      }}
      modules={[Scrollbar]}
      className="!py-14 w-full"
    >
      {listData?.map((player: IPlayerTopTier, index: number) => (
        <SwiperSlide key={index} className={clsx(stylePlayer.playerCard)}>
          <PlayerCard
            key={player?.playerSeasonId || index}
            data={player}
            // backgroundLogo={selectedSeason?.backgroundLogo}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperListCard;
