import PlayerLayout from "@/layouts/PlayerLayout";
import { PlayerSeasonDetailRes, PlayerSeasonRes } from "@/model/player/player";
import { useEffect, useReducer, useState } from "react";
import { axiosClient } from "../api-client/axiosClient";
import { PLAYER_SEASON_URL } from "../interfaces";
import { MetaDataList } from "../model/common";

import { Button } from "@/components/buttons/Button";
import PlayerDetailHeader from "@/components/pages/du-lieu-cau-thu-fc-online/PlayerDetail/PlayerDetailHeader/playerDetailHeader";
import PlayerStatisticHeader from "@/components/pages/du-lieu-cau-thu-fc-online/PlayerDetail/PlayerSeatisticHeader";
import TablePlayer from "@/components/pages/du-lieu-cau-thu-fc-online/playerInfo/table/table";
import { FAVORITE, saveLocalStorage } from "@/lib/common";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "@nextui-org/react";
import { GetServerSideProps } from "next";
import Link from "next/link";
type PlayerSeasonIndexProps = {
  data: MetaDataList<PlayerSeasonRes>;
};

export default function IndexPage(props: PlayerSeasonIndexProps) {
  const [favoriteList, saveFavoriteList] = useState<Array<string>>([]);
  const { data } = props;
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [upgrade, setUpgrade] = useState(1);
  const [level, setLevel] = useState(1);
  const [teamColor, setTeamColor] = useState(1);
  useEffect(() => {
    let retString = localStorage.getItem(FAVORITE) || "[]";
    saveFavoriteList(JSON.parse(retString));
  }, []);
  const [currentPlayerFocus, setCurrentPlayerFocus] = useState(data.data[0]);
  // const [playerSeasonIDFocus, setPlayerSeasonIDFocus] = useState(
  //   !data.data || !data.data.length ? "" : data.data[0].playerSeasonID
  // );

  const setDataPlayerForcus = (playerSeasonId: string) => {
    let res = data.data.find((e) => e.playerSeasonID === playerSeasonId);
    if (res) {
      setCurrentPlayerFocus(res);
    }
  };
  console.log(data);
  console.log(currentPlayerFocus);

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

  if (!data) return null;
  return (
    <PlayerLayout>
      <div className="shadow-md   xss:max-mobileMiddle:px-0 px-20 laptop:max-desktopExtra:px-5 mobile:max-laptop:px-2 mobileMiddle:max-mobile:px-0 h-full relative ">
        <h1 className="text-white  text-[30px] font-black leading-[120%] mb-5">
          FC ONLINE PLAYER
        </h1>
        <div className=" bg-black bg-opacity-70">
          <div className="laptop:flex laptop:flex-row laptop:gap-3   ">
            <div className="laptop:basis-1/2">
              <TablePlayer
                data={data.data}
                favoriteList={favoriteList}
                saveFavorite={saveFavorite}
                limit={10}
                setDataPlayerForcus={setDataPlayerForcus}
                className="desktopExtra:!w-[500px] laptop:max-desktopExtra:!w-[450px]"
              ></TablePlayer>
            </div>
            <Link href={"/du-lieu-cau-thu-fc-online"} className="laptop:hidden">
              <div className="flex justify-center  mt-8 ">
                <Button className="!bg-green !text-black !rounded-full w-[180px] flex justify-center">
                  <div className="flex flex-row gap-3 text-center leading-5">
                    <p> FCO PLAYER</p>
                    <FontAwesomeIcon icon={faArrowRight} width="16" />
                  </div>
                </Button>
              </div>
            </Link>
            <div className=" h-full w-full px-2 pt-10 flex flex-col xss:max-laptop:hidden laptop:max-desktopExtra:">
              <PlayerDetailHeader
                dataElementList={currentPlayerFocus}
                setUpgrade={setUpgrade}
                setLevel={setLevel}
                setTeamColor={setTeamColor}
                upgrade={upgrade}
                level={level}
                teamColor={teamColor}
                classNames="flex flex-row gap-8 xss:max-mobile:gap-[10px]"
                classNamesInfo="!text-white"
              ></PlayerDetailHeader>

              {/* <Divider className="my-4 bg-[#b0b0b0] mt-5 mb-7" /> */}

              <PlayerStatisticHeader
                dataElementList={currentPlayerFocus}
                upgrade={upgrade}
                level={level}
                teamColor={teamColor}
                className="!text-white mt-4 laptop:max-desktopExtra:hidden"
              />
              <Divider className="my-4 bg-[#b0b0b0] mt-10 mb-7" />

              <Link href={"/du-lieu-cau-thu-fc-online"}>
                <div className="flex justify-center ">
                  <Button className="!bg-green !text-black !rounded-full w-[180px] flex justify-center">
                    <div className="flex flex-row gap-3 text-center leading-5">
                      <p> FCO PLAYER</p>
                      <FontAwesomeIcon icon={faArrowRight} width="16" />
                    </div>
                  </Button>
                </div>
              </Link>
            </div>
          </div>

          <Divider className="my-4 bg-[#b0b0b0] mt-10 mb-7" />

          <Link href={"/top-tier"}>
            <div className="flex justify-center ">
              <Button className="!bg-green !text-black !rounded-full w-[120px] flex justify-center">
                <div className="flex flex-row gap-3 text-center leading-5">
                  <p> Top tier</p>
                  <FontAwesomeIcon icon={faArrowRight} width="16" />
                </div>
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </PlayerLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const query = ctx.query;
  const season = query.mua;
  const position = query.viTri;
  const name = query.tenCauThu;
  const params = {
    "season-id": season,
    position: position,
    "player-name": name,
  };

  const data = await axiosClient
    .get<MetaDataList<PlayerSeasonRes>>(PLAYER_SEASON_URL, { params })
    .then((res: any) => res.data);
  return {
    props: { data },
  };
};
