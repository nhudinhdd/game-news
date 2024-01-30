import { useState } from "react";
import Favorite from "../commonInfo/favorite/favorite";
import { FAVORITE, getLocalStorege, saveLocalStorage } from "@/lib/common";
import Image from "next/image";

type FavoriteIcon = {
  isFavorite: boolean;
  playerSeasonId: string;
  saveFavorite: (id: string) => void;
};

export default function FavoriteIcon(props: FavoriteIcon) {
  const { isFavorite, playerSeasonId, saveFavorite } = props;
  return (
    <div>
      {isFavorite && (
        <div
          className="bg-green px-1 py-1 rounded-[4px]"
          onClick={() => saveFavorite(playerSeasonId)}
        >
          <Image
            alt="Sân bóng"
            src="/images/star_like_hover.png"
            width={19}
            height={19}
          />
        </div>
      )}

      {!isFavorite && (
        <div
          className="bg-darkGray px-1 py-1  rounded-[4px]"
          onClick={() => saveFavorite(playerSeasonId)}
        >
          <Image
            alt="Sân bóng"
            src="/images/star_notLike_hover.png"
            width={16}
            height={16}
          />
        </div>
      )}
    </div>
  );
}
