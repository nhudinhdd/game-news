import { axiosClient } from "@/api-client/axiosClient";
import FavoriteIcon from "@/components/favoritesIcon/FavoriteIcon";
import FavoriteIconShow from "@/components/favoritesIcon/FavoriteIconShow";
import { PLAYER_SEASON_FVORITE_URL } from "@/interfaces";
import { getLocalStorege, FAVORITE, saveLocalStorage } from "@/lib/common";
import { MetaDataList } from "@/model/player/common";
import { PlayerSeasonRes } from "@/model/player/player";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { useEffect, useReducer, useState } from "react";

type Favorite = {
  playerSeasonID: string;
};
export default function Favorite(props: Favorite) {
  const { playerSeasonID } = props;

  const [favoriteList, saveFavoriteList] = useState<Array<string>>([]);

  useEffect(() => {
    let retString = localStorage.getItem(FAVORITE) || "[]";
    saveFavoriteList(JSON.parse(retString));
  }, []);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const saveFavorite = (value: string) => {
    var index = favoriteList.indexOf(value);
    if (index !== -1) {
      favoriteList.splice(index, 1);
    } else {
      favoriteList.push(value);
    }
    saveLocalStorage(FAVORITE, favoriteList);
    saveFavoriteList(favoriteList);
    forceUpdate();
  };

  return (
    <div>
      <FavoriteIcon
        playerSeasonId={playerSeasonID}
        isFavorite={favoriteList && favoriteList.includes(playerSeasonID)}
        saveFavorite={saveFavorite}
      />
    </div>
  );
}
