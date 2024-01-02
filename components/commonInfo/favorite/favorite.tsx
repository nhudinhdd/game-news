import { getLocalStorege, FAVORITE, saveLocalStorage } from "@/lib/common";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

type Favorite = {
  playerSeasonID: string;
};
export default function Favorite(props: Favorite) {
  const { playerSeasonID } = props;

  const [favoriteList, saveFavoriteList] = useState<Array<string>>([]);
  const [isFavorite, setFavorite] = useState(
    favoriteList.includes(playerSeasonID)
  );
  const saveFavorite = (value: string) => {
    setFavorite(!isFavorite);

    var index = favoriteList.indexOf(value);
    if (index !== -1) {
      favoriteList.splice(index, 1);
    } else {
      favoriteList.push(value);
    }
    saveLocalStorage(FAVORITE, favoriteList);
    saveFavoriteList(favoriteList);
  };

  return (
    <div>
      <Button
        isIconOnly
        aria-label="Like"
        className=" right-0 rounded-[4px]  min-w-[30px] w-[30px] min-h-[30px] h-[30px]"
        color={isFavorite ? "success" : "default"}
        variant={isFavorite ? "bordered" : "solid"}
        onClick={() => saveFavorite(playerSeasonID)}
      >
        <div className="w-4 h-4 flex justify-center">
          <FontAwesomeIcon
            icon={faStar}
            style={{
              color: isFavorite ? "#18C864" : "#a0a0a2",
              opacity: "0.7",
            }}
            width={17}
          />
        </div>
      </Button>
    </div>
  );
}
