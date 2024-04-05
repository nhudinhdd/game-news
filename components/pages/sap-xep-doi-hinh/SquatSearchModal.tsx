import { axiosClient } from "@/api-client/axiosClient";
import { PLAYER_SEASON_URL } from "@/interfaces";
import { MetaDataList } from "@/model/common";
import { PlayerSeasonRes } from "@/model/player/player";
import { Modal, ModalBody, ModalContent, Spinner } from "@nextui-org/react";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useReducer,
  useState,
} from "react";
import { HeaderPlayerInfo } from "../du-lieu-cau-thu-fc-online/playerInfo/playerInfoHeader";
import queryString from "query-string";
import TablePlayer from "../du-lieu-cau-thu-fc-online/playerInfo/table/table";
import { checkPosition } from "@/utils/sap-xep-doi-hinh";

interface Props {
  open: boolean;
  onClose: () => void;
  playerPos: any;
  fieldCard: any;
  setFieldCard: any;
  setLevel?: any;
  selectedPlayerList?: any;
  setDisplayPlayer?: Dispatch<SetStateAction<PlayerSeasonRes | undefined>>;
}

const SquatSearchModal = ({
  onClose,
  open,
  playerPos,
  fieldCard,
  setFieldCard,
  setLevel,
  selectedPlayerList,
  setDisplayPlayer,
}: Props) => {
  const [name, setName] = useState<string>("");
  const [data, setData] = useState<any[]>([]);
  const [positions, setPositions] = useState(new Set<String>());
  const [seasons, setSeasons] = useState(new Set<String>());
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [favoriteList, saveFavoriteList] = useState<Array<string>>([]);
  const [loadingTable, setLoadingTable] = useState(false);

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const setFilterState = () => {
    setIsShowFilter(!isShowFilter);
  };

  const updateSeasons = (seasonId: string) => {
    if (seasons.has(seasonId)) {
      seasons.delete(seasonId);
    } else {
      seasons.add(seasonId);
    }
    setSeasons(seasons);
    forceUpdate();
  };

  const updatePostion = (position: string) => {
    if (position === "FW" && !positions.has("FW")) {
      positions.add("ST");
      positions.add("CF");
      positions.add("LW");
      positions.add("RW");
      positions.add("FW");
    } else if (position === "FW" && positions.has("FW")) {
      positions.delete("ST");
      positions.delete("CF");
      positions.delete("LW");
      positions.delete("RW");
      positions.delete("FW");
    } else if (position === "MF" && !positions.has("MF")) {
      positions.add("CAM");
      positions.add("CM");
      positions.add("MF");
      positions.add("CDM");
      positions.add("RM");
      positions.add("LM");
    } else if (position === "MF" && positions.has("MF")) {
      positions.delete("CAM");
      positions.delete("CM");
      positions.delete("CDM");
      positions.delete("RM");
      positions.delete("LM");
      positions.delete("MF");
    } else if (position === "DF" && !positions.has("DF")) {
      positions.add("CB");
      positions.add("RB");
      positions.add("LB");
      positions.add("RWB");
      positions.add("LWB");
      positions.add("DF");
    } else if (position === "DF" && positions.has("DF")) {
      positions.delete("CB");
      positions.delete("RB");
      positions.delete("LB");
      positions.delete("RWB");
      positions.delete("LWB");
      positions.delete("DF");
    } else if (positions.has(position)) {
      positions.delete(position);
    } else if (position === "EMPTY" || positions.has("EMPTY")) {
      positions.delete("EMPTY");
    } else {
      positions.add(position);
    }
    setPositions(positions);
    setSeasons(seasons);
    forceUpdate();
  };

  const handleCallAPISearchPlayer = async (params: any) => {
    setLoadingTable(true);
    try {
      const query = queryString.stringify(params);
      const res = await axiosClient.get<MetaDataList<PlayerSeasonRes>>(
        PLAYER_SEASON_URL + "?" + query
      );
      setLoadingTable(false);
      return res;
    } catch (error) {
      setLoadingTable(false);
      console.log(error);
    }
  };

  const searchPlayer = async (playerName: string) => {
    let season = Array.from(seasons).join(",");
    let position = Array.from(positions).join(",");

    const params = {
      "season-id": season,
      position: position,
      "player-name": playerName,
    };
    const res = await handleCallAPISearchPlayer(params);
    setData(res?.data.data || []);
  };
  let index = 0;

  useEffect(() => {
    const getPlayerPos = async () => {
      const params = {
        position: checkPosition(playerPos?.pos),
      };
      const res = await handleCallAPISearchPlayer(params);
      setData(res?.data.data || []);
    };
    if (playerPos.typePlayer !== "substitute") {
      getPlayerPos();
    }
    if (index === 0) {
      updatePostion(playerPos?.pos && checkPosition(playerPos?.pos));
    }
    index++;
  }, []);
  return (
    <Modal
      onClose={onClose}
      isOpen={open}
      size="sm"
      placement="center"
      className="w-[65rem]"
      scrollBehavior={"inside"}
    >
      <ModalContent className="relative bg-black/70 border border-white">
        {(onClose) => (
          <>
            {loadingTable && (
              <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-black/40 z-30 rounded-xl">
                <Spinner size="lg" />
              </div>
            )}
            <ModalBody>
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-white">
                  FC Online | Tìm kiếm cầu thủ
                </h1>
                <HeaderPlayerInfo
                  setFilterState={setFilterState}
                  selectedID={seasons}
                  updateSeasons={updateSeasons}
                  searchPlayer={searchPlayer}
                  playerName={name}
                  setPlayerName={setName}
                  updatePosition={updatePostion}
                  selectedPostion={positions}
                  playerPos={playerPos.pos}
                  page="formation"
                />
                {data && (
                  <div className="laptop:basis-1/2 -mt-4">
                    <TablePlayer
                      data={data}
                      favoriteList={favoriteList}
                      page="formation"
                      onClose={onClose}
                      fieldCard={fieldCard}
                      setFieldCard={setFieldCard}
                      pos={playerPos}
                      setLevel={setLevel}
                      selectedPlayerList={selectedPlayerList}
                      setDisplayPlayer={setDisplayPlayer}
                    ></TablePlayer>
                  </div>
                )}
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default SquatSearchModal;
