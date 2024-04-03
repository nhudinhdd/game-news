import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCircleXmark,
  faLayerGroup,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FOMATATIONS, LEVELS, TOTALS } from "@/const/sap-xep-doi-hinh";
import { Select } from "@/components/selects/selects";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FieldCardType, FieldCardsType } from "@/types/sap-xep-doi-hinh";
import { checkFieldCards } from "@/utils/sap-xep-doi-hinh";
import SquatSearchModal from "./SquatSearchModal";
import { PlayerDetailAvatar } from "../du-lieu-cau-thu-fc-online/PlayerDetail/PlayerDetailAvatar";
import SquatBuilderEmptyCard from "./SquatBuilderEmptyCard";
import clsx from "clsx";
import styleSquatBuilder from "@/styles/squatBuilder.module.css";
import { flatten, get } from "lodash";
import SelectedPlayerTable from "./SelectedPlayerTable";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { PlayerSeasonRes } from "@/model/player/player";

const SquatBuilderView = () => {
  const [fieldCards, setFieldCards] = useState<FieldCardsType>({
    attacks: [
      { pos: "lw", info: undefined },
      { pos: "st", info: undefined },
      { pos: "rw", info: undefined },
    ],
    middles: [
      { pos: "cam", info: undefined },
      { pos: "lm", info: undefined },
      { pos: "rm", info: undefined },
      { pos: "cdm", info: undefined },
    ],
    defends: [
      { pos: "lcb", info: undefined },
      { pos: "cb", info: undefined },
      { pos: "rcb", info: undefined },
      { pos: "gk", info: undefined },
    ],
  });
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const [formationSelected, setFormationSelected] =
    useState<string>("3-1-2-1-3");

  const [level, setLevel] = useState(1);

  const [selectedPlayer, setSelectedPlayer] = useState<any>({
    typePlayer: "",
    pos: "",
  });

  const [selectedPlayerList, setSelectedPlayerList] = useState<any[]>([]);

  const [statistic, setStatistic] = useState({
    pac: 0,
    sho: 0,
    pas: 0,
    dri: 0,
    def: 0,
    phy: 0,
  });

  const [overate, setOverate] = useState<number>(0);

  const [salary, setSalary] = useState(0);

  useEffect(() => {
    var newOvr = 0;
    var newSta = {
      pac: 0,
      sho: 0,
      pas: 0,
      dri: 0,
      def: 0,
      phy: 0,
    };
    var players = 0;
    var salaryTotal = 0;
    var playerList: any[] = [];
    Object.keys(fieldCards).forEach((item: string) => {
      const array: any = get(fieldCards, item);
      array.forEach((player: any) => {
        const playerInfo = player["info"];
        if (Object.keys(playerInfo || {})?.length > 0) {
          if (player["pos"] !== "gk") {
            newSta = {
              pac: newSta["pac"] + playerInfo["pac"],
              sho: newSta["sho"] + playerInfo["sho"],
              pas: newSta["pas"] + playerInfo["pas"],
              dri: newSta["dri"] + playerInfo["dri"],
              def: newSta["def"] + playerInfo["def"],
              phy: newSta["phy"] + playerInfo["phy"],
            };
          }
          newOvr = newOvr + playerInfo["ovr"];
          salaryTotal = salaryTotal + playerInfo["salary"];
          playerList.push(playerInfo);
          if (player["pos"] !== "gk") {
            players = players + 1;
          }
        }
      });
    });
    setOverate(newOvr);
    setSalary(salaryTotal);
    const statis = {
      pac: players > 0 ? Math.floor(newSta["pac"] / players) : 0,
      sho: players > 0 ? Math.floor(newSta["sho"] / players) : 0,
      pas: players > 0 ? Math.floor(newSta["pas"] / players) : 0,
      dri: players > 0 ? Math.floor(newSta["dri"] / players) : 0,
      def: players > 0 ? Math.floor(newSta["def"] / players) : 0,
      phy: players > 0 ? Math.floor(newSta["phy"] / players) : 0,
    };
    setStatistic(statis);
    setSelectedPlayerList(playerList);
  }, [fieldCards]);

  const handleDeletePlayer = (
    position: string,
    type: string,
    fieldCards: any
  ) => {
    const playerArr = fieldCards[type];
    const eleIndex = playerArr.findIndex((item: any) => item.pos === position);
    playerArr[eleIndex]["info"] = undefined;
    setFieldCards({ ...fieldCards, [type]: playerArr });
  };

  const handleReset = (formation: string) => {
    let arrayOfObjects = [];
    for (let i = 0; i < 11; i++) {
      arrayOfObjects.push(Object.assign({}, { info: undefined }));
    }
    const newFieldCards = checkFieldCards(formation, arrayOfObjects);
    setFieldCards(newFieldCards);
  };

  return (
    <>
      <div className="flex justify-between w-full items-center flex-col gap-3 mt-3">
        <div className="flex justify-between w-full items-center">
          <h1 className="text-2xl font-bold text-white">
            FC Online | Sắp xếp đội hình
          </h1>
          <div
            onClick={() => handleReset(formationSelected)}
            className="cursor-pointer flex gap-2 items-center bg-danger text-white font-bold shadow-sm px-3 py-2 rounded-md"
          >
            <FontAwesomeIcon icon={faCircleXmark} width="12" />
            <p className="text-sm ">Đặt lại</p>
          </div>
        </div>
        <div className="flex justify-between w-full items-center gap-3">
          <div className="grid grid-cols-6 gap-2">
            {TOTALS.map((total, index) => (
              <div key={index} className="col-span-1">
                <div
                  key={index}
                  className="flex px-2 py-2 gap-3 flex-col bg-[#3b3b3e] text-white shadow-sm text-center bg-"
                >
                  <h4>{total.title}</h4>
                  <p className="text-2xl font-bold">
                    {get(statistic, total.properties)}
                  </p>
                  <span className="w-full h-1 bg-primary"></span>
                </div>
                {index !== TOTALS.length - 1 && <span className="w-3"></span>}
              </div>
            ))}
          </div>
          <div className="flex">
            <FontAwesomeIcon
              icon={faAngleRight}
              width="14"
              className="animate-[light-up_1s_infinite_linear] text-white"
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              width="14"
              className="animate-[light-up_1s_infinite_linear] text-white"
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              width="14"
              className="animate-[light-up_1s_infinite_linear] text-white"
            />
          </div>
          <div className="flex gap-2">
            <div className="flex px-2 py-2 gap-3 flex-col bg-[#3b3b3e] text-white shadow-sm text-center bg-">
              <h4>Điểm vị trí</h4>
              <p className="text-2xl font-bold">{overate}</p>
              <span className="w-full h-1 bg-yellow-500"></span>
            </div>
            <div className="flex px-2 py-2 gap-3 flex-col bg-[#3b3b3e] text-white shadow-sm text-center bg-">
              <h4>Lương</h4>
              <div className="flex items-center gap-1">
                <p className="text-2xl font-bold text-white">{salary}</p>
                <p className="text-2xl font-bold text-white">/</p>
                <p className="text-2xl font-bold text-red-700">250</p>
              </div>
              <span className="w-full h-1 bg-yellow-500"></span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 bg-[#3b3b3e] p-2">
          <div className="col-span-5">
            <div className="mt-16 flex p-2 w-full bg-[#3b3b3e] text-[#a3a39f] shadow-sm items-center text-center justify-center flex-nowrap relative z-20">
              <div className="flex w-full h-full field-main absolute top-0 left-0 flex-col z-10">
                <div className="w-full h-1/3 text-center items-center justify-center flex field-area relative att">
                  {fieldCards?.attacks.map((att, index) => (
                    <div
                      key={index}
                      className={clsx(
                        `text-white field-card absolute pos-${att.pos} hover:scale-125 hover:z-20 group`,
                        styleSquatBuilder.animated_empty_card
                      )}
                    >
                      <SquatBuilderEmptyCard
                        positionName={att.pos}
                        onAddPlayer={() => {
                          setIsPopupOpen(true);
                          setSelectedPlayer({
                            typePlayer: "attacks",
                            pos: att.pos,
                          });
                        }}
                        onRemovePlayer={() =>
                          handleDeletePlayer(att.pos, "attacks", fieldCards)
                        }
                        level={level}
                        selectedPlayer={att?.info}
                      />
                    </div>
                  ))}
                </div>
                <div className="w-full h-1/3 text-center items-center justify-center flex field-area relative mid">
                  {fieldCards?.middles.map((mid, index) => (
                    <div
                      key={index}
                      className={clsx(
                        `text-white field-card absolute pos-${mid.pos} hover:scale-125 hover:z-20 group`,
                        styleSquatBuilder.animated_empty_card,
                        formationSelected === "4-1-3-2" && mid.pos === "cm"
                          ? `pos-cm-4132`
                          : ``
                      )}
                    >
                      <SquatBuilderEmptyCard
                        positionName={mid.pos}
                        onAddPlayer={() => {
                          setIsPopupOpen(true);
                          setSelectedPlayer({
                            typePlayer: "middles",
                            pos: mid.pos,
                          });
                        }}
                        onRemovePlayer={() =>
                          handleDeletePlayer(mid.pos, "middles", fieldCards)
                        }
                        level={level}
                        selectedPlayer={mid?.info}
                      />
                    </div>
                  ))}
                </div>
                <div className="w-full h-1/3 text-center items-center justify-center flex field-area relative def">
                  {fieldCards?.defends.map((def, index) => (
                    <div
                      key={index}
                      className={clsx(
                        `text-white field-card absolute pos-${def.pos} hover:scale-125 hover:z-20 group`,
                        styleSquatBuilder.animated_empty_card
                      )}
                    >
                      <SquatBuilderEmptyCard
                        positionName={def.pos}
                        onAddPlayer={() => {
                          setIsPopupOpen(true);
                          setSelectedPlayer({
                            typePlayer: "defends",
                            pos: def.pos,
                          });
                        }}
                        onRemovePlayer={() =>
                          handleDeletePlayer(def.pos, "defends", fieldCards)
                        }
                        level={level}
                        selectedPlayer={def?.info}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex w-full h-full relative field-bg">
                <Image
                  alt="Sân bóng"
                  src="/images/sanbong.png"
                  width={880}
                  height={1244}
                />
              </div>
            </div>
            <div className="flex w-full justify-between gap-2 bg-[#3b3b3e]">
              <div className="flex items-center gap-2">
                <Image
                  src={
                    "https://s1.fifaaddict.com/fo4/players/doovzqbo.png?20210828"
                  }
                  alt="hlv"
                  width={80}
                  height={80}
                />
                <div className="flex flex-col justify-around text-white gap-2">
                  <span className="text-textStatic font-semibold">HLV</span>
                  <span className="text-lg font-semibold">Pep Guardiola</span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Dropdown
                  classNames={{ content: "bg-black bg-opacity-90 rounded" }}
                >
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="bg-primary text-white font-bold shadow-sm px-3 py-2 rounded-md border-none"
                      startContent={
                        <FontAwesomeIcon icon={faList} width="12" />
                      }
                    >
                      {formationSelected || "Chọn đội hình"}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu classNames={{ list: "flex flex-row gap-2" }}>
                    {FOMATATIONS.map((fomatation, index) => (
                      <DropdownSection
                        title={fomatation.title}
                        key={fomatation.title}
                        className=""
                        classNames={{
                          group: "grid grid-cols-3 gap-2",
                          heading: "text-2xl text-white font-bold",
                        }}
                      >
                        {fomatation.list.map((item, index) => (
                          <DropdownItem
                            onClick={() => {
                              const newArrPos = flatten(
                                Object.values(fieldCards)
                              );
                              setFieldCards(checkFieldCards(item, newArrPos));
                              setFormationSelected(item);
                            }}
                            className={`col-span-1 text-xs p-1 border border-white !text-white hover:border-primary hover:!bg-primary rounded-sm ${
                              formationSelected === item &&
                              "bg-primary border-primary"
                            }`}
                            classNames={{
                              base: "hover:bg-primary",
                              wrapper: "hover:bg-primary",
                            }}
                            key={item}
                          >
                            {item}
                          </DropdownItem>
                        ))}
                      </DropdownSection>
                    ))}
                  </DropdownMenu>
                </Dropdown>
                <Dropdown
                  classNames={{ content: "bg-black bg-opacity-90 rounded" }}
                  placement="top"
                >
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="bg-primary text-white font-bold shadow-sm px-3 py-2 rounded-md border-none"
                      startContent={
                        <FontAwesomeIcon icon={faLayerGroup} width="12" />
                      }
                    >
                      {"Level " + level || "Chọn Level"}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu classNames={{ list: "flex flex-row gap-2" }}>
                    {LEVELS.map((item, index) => (
                      <DropdownItem
                        onClick={() => {
                          setStatistic({
                            pac: statistic["pac"] + (item.value - level),
                            sho: statistic["sho"] + (item.value - level),
                            pas: statistic["pas"] + (item.value - level),
                            dri: statistic["dri"] + (item.value - level),
                            def: statistic["def"] + (item.value - level),
                            phy: statistic["phy"] + (item.value - level),
                          });
                          setLevel(item?.value);
                        }}
                        className={`col-span-1 text-xs p-1 border border-white !hover:bg-primary text-white hover:border-primary rounded-sm ${
                          item.value === level && "bg-primary border-primary"
                        }`}
                        key={item.value}
                      >
                        {item.title}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <SelectedPlayerTable
              data={flatten(Object.values(fieldCards)) || []}
              level={level}
            />
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <SquatSearchModal
          open={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          playerPos={selectedPlayer}
          fieldCard={fieldCards}
          setFieldCard={setFieldCards}
          setLevel={setLevel}
          selectedPlayerList={selectedPlayerList}
        />
      )}
    </>
  );
};

export { SquatBuilderView };
