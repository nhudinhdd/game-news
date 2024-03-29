import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

interface Props {
  positionName?: string;
  onAddPlayer?: () => void;
}

const SquatBuilderEmptyCard = ({ onAddPlayer, positionName }: Props) => {
  return (
    <>
      <Image
        alt="the_trong"
        src={"/images/the_trong.png"}
        width={100}
        height={160}
        priority={false}
      />
      <div className="top-3 absolute font-bold flex justify-center w-full">
        {positionName?.toUpperCase()}
      </div>
      <div
        onClick={onAddPlayer}
        className="w-10 h-10 hover:bg-yellow-500 rounded-full bg-white translate-x-7 cursor-pointer -translate-y-24 flex justify-center items-center"
      >
        <FontAwesomeIcon icon={faPlus} width="20" color="#333" />
      </div>
    </>
  );
};

export default SquatBuilderEmptyCard;
