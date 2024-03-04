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
        <Image
          alt="Sân bóng"
          src="/images/star.png"
          width={17}
          height={17}
          className="xss:max-mobileMiddle:w-[14px] xss:max-mobileMiddle:h-[14px]"
        />
      )}
    </div>
  );
}
