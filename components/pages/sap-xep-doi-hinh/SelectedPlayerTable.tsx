import {
  getColorBorderPosition,
  getColorPosition,
  getUpgradeClass,
} from "@/lib/common";
import { PlayerSeasonRes } from "@/model/player/player";
import clsx from "clsx";
import { flatten, get, omit, pick } from "lodash";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import playerStyle from "@/styles/player.module.css";
import { checkPosition, formatPosition } from "@/utils/sap-xep-doi-hinh";
import FavoriteFoot from "@/components/commonInfo/foot/FavoriteFoot";
import { FieldCardType, FieldCardsType } from "@/types/sap-xep-doi-hinh";
import { Divider } from "@nextui-org/react";

interface Props {
  data: FieldCardsType;
  level?: number;
}

const SelectedPlayerTable = ({ data, level }: Props) => {
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerSeasonRes>();

  useEffect(() => {
    if (
      !flatten(Object.values(data))?.find(
        (item) => item.info === selectedPlayer
      )
    ) {
      setSelectedPlayer(undefined);
    }
  }, [data]);

  const columns: any[] = [
    {
      id: "pos",
      label: "POS",
      align: "center",
      render: (value: string, data: FieldCardType) => {
        const position = data?.pos?.includes("empty")
          ? data?.info?.playerMainPosition
          : value;
        return (
          <div
            className={clsx(
              getColorBorderPosition(checkPosition(position || "")),
              "uppercase text-white font-semibold border-l-5"
            )}
          >
            {formatPosition(position || "")}
          </div>
        );
      },
    },
    {
      id: "info",
      label: "Tên",
      align: "center",
      render: (value: PlayerSeasonRes, data: any) =>
        value ? (
          <div className="flex gap-1" onClick={() => setSelectedPlayer(value)}>
            <Image
              src={value?.seasonRes?.logo}
              alt={value.seasonRes?.altLogoSeason}
              className=""
              width={20}
              height={16}
            />
            <div
              className={clsx(
                "truncate font-semibold place-self-center grow text-[14px] text-white"
              )}
            >
              {value?.playerInfoRes?.fullName}
            </div>
          </div>
        ) : (
          <></>
        ),
    },
    {
      id: "info",
      label: "Lương",
      align: "center",
      render: (value: PlayerSeasonRes, data: any) =>
        value ? (
          <b
            className={clsx(
              "text-white font-semibold text-[12px] w-[22px] h-[22px] leading-[22px] inline-block text-center",
              playerStyle?.salary_img
            )}
          >
            {value?.salary}
          </b>
        ) : (
          <></>
        ),
    },
    {
      id: "info",
      label: "Ovr",
      render: (value: PlayerSeasonRes, data: any) =>
        value ? (
          <div className={"text-white font-semibold"}>
            {get(value.positionOvr, data?.pos.toUpperCase()) + level - 1 ||
            level
              ? Number(value?.ovr) + Number(level) - 1
              : value.ovr}
          </div>
        ) : (
          <></>
        ),
    },
  ];
  return (
    <div className="flex flex-col">
      {!!selectedPlayer && (
        <div className="">
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 flex flex-col gap-2 text-white">
              <div className="flex gap-2 items-center">
                <Image
                  src={selectedPlayer?.seasonRes?.logo || ""}
                  alt={selectedPlayer?.seasonRes?.altLogoSeason || ""}
                  className=""
                  width={28}
                  height={24}
                  style={{ width: 30, height: 24 }}
                />
                <div
                  className={clsx(
                    "truncate font-semibold place-self-center grow text-lg "
                  )}
                >
                  {selectedPlayer?.playerInfoRes?.fullName}
                </div>
              </div>
              <div className="flex items-center gap-1">
                {Object.keys(selectedPlayer?.positionOvr || {})?.map(
                  (key, index) => (
                    <div
                      className="inline-block align-bottom text-xl font-semibold"
                      key={key}
                    >
                      <span
                        className={clsx(
                          getColorPosition(key),
                          "!text-sm mr-1.5"
                        )}
                      >
                        {key}
                      </span>
                      {Number(get(selectedPlayer?.positionOvr, key))}
                    </div>
                  )
                )}
              </div>
              <div className="flex gap-2">
                <span className="">
                  {selectedPlayer.playerInfoRes?.nationRes?.nationName}
                </span>
                <Image
                  src={selectedPlayer?.playerInfoRes?.nationRes?.ensign}
                  alt={selectedPlayer?.playerInfoRes?.nationRes?.nationName}
                  width={24}
                  height={12}
                />
              </div>
              <div className="flex gap-2 items-center mb-2">
                <span className="text-sm">
                  Lương{" "}
                  <b
                    className={clsx(
                      "text-white font-semibold text-[12px] w-[22px] h-[22px] leading-[22px] inline-block text-center",
                      playerStyle?.salary_img
                    )}
                  >
                    {selectedPlayer?.salary}
                  </b>
                </span>
                <span className="text-sm">{selectedPlayer?.height}cm</span>
                <span className="text-sm">{selectedPlayer?.weight}kg</span>
                <FavoriteFoot
                  favoriteFoot={selectedPlayer?.favoriteFoot || 1}
                  leftFoot={Number(selectedPlayer?.leftFoot)}
                  rightFoot={Number(selectedPlayer?.rightFoot)}
                ></FavoriteFoot>
              </div>
            </div>
            <div className="col-span-1 flex items-end relative">
              <Image
                src={selectedPlayer?.avatar || ""}
                alt={selectedPlayer?.altAvatar || ""}
                width={90}
                height={0}
              />
              <div
                className={clsx(
                  "xss:max-mobile:w-[29.5px] w-[28px] xss:max-mobile:h-[13px] absolute bottom-3 right-0 bg-gray-300",
                  `w-[26px] h-4 items-center justify-center flex ${getUpgradeClass(
                    Number(level)
                  )}`
                )}
              >
                <p className="font-[EASANS] text-[13px]">{level}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 text-white gap-1 pt-2 bg-neutral-800">
            <div className="col-span-1 flex flex-col justify-center items-center">
              <span className="text-[12px]">Tốc độ</span>
              <span className="text-lg font-semibold">
                {selectedPlayer?.pac}
              </span>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center">
              <span className="text-[12px]">Sút</span>
              <span className="text-lg font-semibold">
                {selectedPlayer?.sho}
              </span>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center">
              <span className="text-[12px]">Chuyền</span>
              <span className="text-lg font-semibold">
                {selectedPlayer?.pas}
              </span>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center">
              <span className="text-[12px]">Rê bóng</span>
              <span className="text-lg font-semibold">
                {selectedPlayer?.dri}
              </span>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center">
              <span className="text-[12px]">Phòng thủ</span>
              <span className="text-lg font-semibold">
                {selectedPlayer?.def}
              </span>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center">
              <span className="text-[12px]">Thể lực</span>
              <span className="text-lg font-semibold">
                {selectedPlayer?.phy}
              </span>
            </div>
          </div>
        </div>
      )}
      <table className="w-full">
        <thead role="rowgroup" className="">
          <tr>
            {columns?.map((column, index) => (
              <th
                key={column.name}
                className="group px-[5px] py-[7px] text-left align-middle whitespace-nowrap font-bold text-sm uppercase text-gray-300 bg-black border-b-2 border-b-yellow-500"
              >
                {column?.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {!!data ? (
            flatten(Object.values(omit(data, "substitute")))?.map(
              (data, index) =>
                !!data?.info && (
                  <tr
                    key={index}
                    className={clsx(
                      "border-b border-b-[#858585]",
                      selectedPlayer?.playerSeasonID ===
                        data?.info?.playerSeasonID && "bg-textStatic"
                    )}
                    onClick={() => setSelectedPlayer(data?.info)}
                  >
                    {columns?.map((column) => (
                      <td key={column.name} className={`py-1.5 px-1`}>
                        {column.render
                          ? column.render(get(data, column.id), data)
                          : get(data, column.id)}
                      </td>
                    ))}
                  </tr>
                )
            )
          ) : (
            <></>
          )}
          <tr>
            <td
              colSpan={4}
              className=" mt-2 py-1 font-bold text-sm uppercase text-gray-300 bg-black border-b-2 border-b-yellow-500"
            >
              Substitute
            </td>
          </tr>
          {data.substitute.map(
            (player, index) =>
              !!player?.info && (
                <tr
                  key={index}
                  className={clsx(
                    "border-b border-b-[#858585]",
                    selectedPlayer?.playerSeasonID ===
                      player?.info?.playerSeasonID && "bg-textStatic"
                  )}
                  onClick={() => setSelectedPlayer(player?.info)}
                >
                  {columns?.map((column) => (
                    <td key={column.name} className={`py-1.5 px-1`}>
                      {column.render
                        ? column.render(get(player, column.id), player)
                        : get(player, column.id)}
                    </td>
                  ))}
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedPlayerTable;
