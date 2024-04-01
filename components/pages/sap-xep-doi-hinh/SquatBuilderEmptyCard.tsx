import { faPlus, faRefresh, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { PlayerDetailAvatar } from "../du-lieu-cau-thu-fc-online/PlayerDetail/PlayerDetailAvatar";

interface Props {
  positionName?: string;
  onAddPlayer?: () => void;
  onRemovePlayer?: () => void;
  selectedPlayer?: any;
  level?: number;
}

const SquatBuilderEmptyCard = ({
  onAddPlayer,
  positionName,
  selectedPlayer,
  onRemovePlayer,
  level,
}: Props) => {
  const returnPositionName = (postion: string) => {
    switch (postion) {
      case "lb-4":
        return "lb";
      case "rb-4":
        return "rb";
      case "lcb-4":
      case "rcb-4":
        return "cb";
      default:
        return postion;
    }
  };

  return (
    <>
      {Object.keys(selectedPlayer || {})?.length > 0 ? (
        <>
          <PlayerDetailAvatar
            upgrade={1}
            level={Number(level) || 1}
            teamColor={1}
            page="formation"
            dataElementList={selectedPlayer}
            position={returnPositionName(positionName || "")?.toUpperCase()}
          ></PlayerDetailAvatar>
          <div className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-md bg-red-800 absolute bottom-2 -left-9 invisible group-hover:visible group-hover:scale-75">
            <FontAwesomeIcon
              icon={faTrash}
              onClick={onRemovePlayer}
              width="12"
            />
          </div>
          <div
            onClick={onAddPlayer}
            className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-md bg-yellow-400 absolute bottom-2 -right-9 invisible group-hover:visible group-hover:scale-75"
          >
            <FontAwesomeIcon icon={faRefresh} width="12" />
          </div>
        </>
      ) : (
        <>
          <Image
            alt="the_trong"
            src={"/images/the_trong.png"}
            width={100}
            height={160}
            priority={false}
          />
          <div className="top-3 absolute font-bold flex justify-center w-full">
            {returnPositionName(positionName || "")?.toUpperCase()}
          </div>
          <div
            onClick={onAddPlayer}
            className="w-10 h-10 hover:bg-yellow-500 rounded-full bg-white cursor-pointer -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 absolute flex justify-center items-center"
          >
            <FontAwesomeIcon icon={faPlus} width="20" color="#333" />
          </div>
        </>
      )}
    </>
  );
};

export default SquatBuilderEmptyCard;
