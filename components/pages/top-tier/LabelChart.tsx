import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

export default function LabelChart(props: any) {
  const { logoList } = props;
  return (
    <div className="flex ml-7 mt-[-20px]">
      {logoList.map((item: any, index: number) => (
        <div className="flex flex-col items-center">
          <Image width={38} height={5} src={item} key={index} alt="logo" />
          <div className="w-7 h-7 rounded-full bg-white mt-2 cursor-pointer flex justify-center items-center">
            <FontAwesomeIcon icon={faPlus} width="13" color="#333" />
          </div>
        </div>
      ))}
    </div>
  );
}
