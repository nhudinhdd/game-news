import {
  getColorBorderPosition,
  getColorClass,
  getColorPosition,
  getUpgradeClass,
} from "@/lib/common";
import { PlayerSeasonRes } from "@/model/player/player";
import clsx from "clsx";
import { flatten, get, omit, pick } from "lodash";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import playerStyle from "@/styles/player.module.css";
import { checkPosition, formatPosition } from "@/utils/sap-xep-doi-hinh";
import FavoriteFoot from "@/components/commonInfo/foot/FavoriteFoot";
import { FieldCardType, FieldCardsType } from "@/types/sap-xep-doi-hinh";
import { Divider } from "@nextui-org/react";

interface Props {
  data: FieldCardsType;
  level?: number;
  selectDisplayPlayer: PlayerSeasonRes | undefined;
  setSelectDisplayPlayer: Dispatch<SetStateAction<any>>;
}

const SelectedPlayerTable = ({
  data,
  level,
  selectDisplayPlayer,
  setSelectDisplayPlayer,
}: Props) => {
  useEffect(() => {
    if (
      !flatten(Object.values(data))?.find(
        (item) => item.info === selectDisplayPlayer
      )
    ) {
      setSelectDisplayPlayer(undefined);
    }
  }, [data]);

  const columns: any[] = [
    {
      id: "pos",
      label: "Vị trí",
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
          <div
            className="flex gap-1"
            onClick={() => setSelectDisplayPlayer(value)}
          >
            <Image
              src={value?.seasonRes?.logo}
              alt={value.seasonRes?.altLogoSeason}
              className=""
              width={20}
              height={16}
            />
            <div
              className={clsx(
                "truncate max-w-[180px] font-semibold place-self-center grow text-[14px] text-white"
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
    {
      id: "info",
      label: "Thẻ",
      render: (value: PlayerSeasonRes, data: any) => (
        <div
          className={clsx(
            "xss:max-mobile:w-[29.5px] w-[28px] xss:max-mobile:h-[13px] bg-gray-300",
            `w-[26px] h-4 items-center justify-center flex ${getUpgradeClass(
              Number(level)
            )}`
          )}
        >
          <p className="font-[EASANS] text-[13px]">{level}</p>
        </div>
      ),
    },
  ];
  return (
    <div className="flex flex-col">
      {!!selectDisplayPlayer && (
        <div className="text-white bg-darkGray2 pt-4">
          <div className="flex gap-2 items-center mb-2 pl-3">
            <Image
              src={selectDisplayPlayer?.seasonRes?.logo || ""}
              alt={selectDisplayPlayer?.seasonRes?.altLogoSeason || ""}
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
              {selectDisplayPlayer?.playerInfoRes?.fullName}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 pl-3">
            <div className="col-span-2 flex flex-col gap-2">
              <div className="flex items-center gap-1">
                {Object.keys(selectDisplayPlayer?.positionOvr || {})?.map(
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
                      {Number(get(selectDisplayPlayer?.positionOvr, key))}
                    </div>
                  )
                )}
              </div>
              <div className="flex gap-2">
                <span className="">
                  {selectDisplayPlayer.playerInfoRes?.nationRes?.nationName}
                </span>
                <Image
                  src={selectDisplayPlayer?.playerInfoRes?.nationRes?.ensign}
                  alt={
                    selectDisplayPlayer?.playerInfoRes?.nationRes?.nationName
                  }
                  width={24}
                  height={12}
                />
              </div>
              <div className="flex gap-1.5 items-center mb-2">
                <span className="text-sm">
                  Lương{" "}
                  <b
                    className={clsx(
                      "text-white font-semibold text-[12px] w-[22px] h-[22px] leading-[22px] inline-block text-center",
                      playerStyle?.salary_img
                    )}
                  >
                    {selectDisplayPlayer?.salary}
                  </b>
                </span>
                <span className="text-sm">{selectDisplayPlayer?.height}cm</span>
                <span className="text-sm">{selectDisplayPlayer?.weight}kg</span>
                <span className="text-sm">{selectDisplayPlayer?.fitness}</span>
                <FavoriteFoot
                  favoriteFoot={selectDisplayPlayer?.favoriteFoot || 1}
                  leftFoot={Number(selectDisplayPlayer?.leftFoot)}
                  rightFoot={Number(selectDisplayPlayer?.rightFoot)}
                ></FavoriteFoot>
              </div>
            </div>
            <div className="col-span-1 flex items-end relative">
              <Image
                src={selectDisplayPlayer?.avatar || ""}
                alt={selectDisplayPlayer?.altAvatar || ""}
                width={100}
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
              <span className="text-[11px] text-center">Tốc độ</span>
              <span
                className={clsx(
                  "text-lg font-bold",
                  getColorClass(selectDisplayPlayer?.pac)
                )}
              >
                {selectDisplayPlayer?.pac}
              </span>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center">
              <span className="text-[11px] text-center">Sút</span>
              <span
                className={clsx(
                  "text-lg font-bold",
                  getColorClass(selectDisplayPlayer?.sho)
                )}
              >
                {selectDisplayPlayer?.sho}
              </span>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center">
              <span className="text-[11px] text-center">Chuyền</span>
              <span
                className={clsx(
                  "text-lg font-bold",
                  getColorClass(selectDisplayPlayer?.pas)
                )}
              >
                {selectDisplayPlayer?.pas}
              </span>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center">
              <span className="text-[11px] text-center">Rê bóng</span>
              <span
                className={clsx(
                  "text-lg font-bold",
                  getColorClass(selectDisplayPlayer?.dri)
                )}
              >
                {selectDisplayPlayer?.dri}
              </span>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center">
              <span className="text-[11px] text-center">Phòng thủ</span>
              <span
                className={clsx(
                  "text-lg font-bold",
                  getColorClass(selectDisplayPlayer?.def)
                )}
              >
                {selectDisplayPlayer?.def}
              </span>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center">
              <span className="text-[11px] text-center">Thể lực</span>
              <span
                className={clsx(
                  "text-lg font-bold",
                  getColorClass(selectDisplayPlayer?.phy)
                )}
              >
                {selectDisplayPlayer?.phy}
              </span>
            </div>
          </div>
        </div>
      )}
      <table className="w-full">
        <thead role="rowgroup" className="">
          <tr className="pl-3 bg-[#3b3b3e] text-[#a3a39f]">
            {columns?.map((column, index) => (
              <th
                key={column.name}
                className="group pl-2 py-1.5 text-left align-middle whitespace-nowrap font-semibold text-sm"
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
                      selectDisplayPlayer?.playerSeasonID ===
                        data?.info?.playerSeasonID
                        ? "bg-slate-400"
                        : index % 2 === 0
                        ? "bg-darkGray/80"
                        : "bg-darkGray2/80"
                    )}
                    onClick={() => setSelectDisplayPlayer(data?.info)}
                  >
                    {columns?.map((column) => (
                      <td key={column.name} className={`py-1.5 pl-2`}>
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
              colSpan={5}
              className="py-1.5 pl-2 font-semibold text-sm text-gray-300 border-b border-b-[#858585]"
            >
              Thay thế
            </td>
          </tr>
          {data.substitute.map(
            (player, index) =>
              !!player?.info && (
                <tr
                  key={index}
                  className={clsx(
                    "border-b border-b-[#858585]",
                    index % 2 === 0 ? "bg-darkGray/70" : "bg-darkGray2/70",
                    selectDisplayPlayer?.playerSeasonID ===
                      player?.info?.playerSeasonID && "bg-textStatic"
                  )}
                  onClick={() => setSelectDisplayPlayer(player?.info)}
                >
                  {columns?.map((column) => (
                    <td key={column.name} className={`py-1.5 pl-2`}>
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
