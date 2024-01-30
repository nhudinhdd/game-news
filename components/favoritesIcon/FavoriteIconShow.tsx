import { FAVORITE, getLocalStorege, saveLocalStorage } from "@/lib/common";
import Image from "next/image";
import { useState } from "react";

type FavoriteIcon = {
  isFavorite: boolean;
};

export default function FavoriteIconShow(props: FavoriteIcon) {
  const { isFavorite } = props;
  return (
    <div>
      {isFavorite && (
        <Image alt="Sân bóng" src="/images/star.png" width={17} height={17} />
      )}
    </div>
  );
}
