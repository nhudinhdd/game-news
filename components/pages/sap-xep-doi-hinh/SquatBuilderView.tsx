import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
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
import { axiosClient } from "@/api-client/axiosClient";
import { MetaDataResponse } from "@/model/common";
import { COACH_URL } from "@/interfaces";
import { ICoach } from "@/model/player/coach";

const MAX_SALARY = 255;

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
    substitute: [
      { pos: "empty-1", info: undefined },
      { pos: "empty-2", info: undefined },
      { pos: "empty-3", info: undefined },
      { pos: "empty-4", info: undefined },
      { pos: "empty-5", info: undefined },
      { pos: "empty", info: undefined },
    ],
  });
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const [formationSelected, setFormationSelected] =
    useState<string>("3-1-2-1-3");

  const [level, setLevel] = useState(1);

  const [upgrade, setUpgrade] = useState(1);
  const [teamColor, setTeamColor] = useState(1);
  const [selectedPlayer, setSelectedPlayer] = useState<any>({
    typePlayer: "",
    pos: "",
  });

  const [selectedPlayerList, setSelectedPlayerList] = useState<any[]>([]);
  const [selectDisplayPlayer, setSelectDisplayPlayer] =
    useState<PlayerSeasonRes>();

  const [salary, setSalary] = useState(0);
  const [coachInfo, setCoachInfo] = useState<ICoach>();

  useEffect(() => {
    var salaryTotal = 0;
    var playerList: any[] = [];
    Object.keys(fieldCards).forEach((item: string) => {
      if (item !== "substitute") {
        const array: any = get(fieldCards, item);
        array.forEach((player: any) => {
          const playerInfo = player["info"];
          if (Object.keys(playerInfo || {})?.length > 0) {
            salaryTotal = salaryTotal + playerInfo["salary"];
            playerList.push(playerInfo);
          }
        });
      }
    });
    setSalary(salaryTotal);
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

  const getCoachInfo = async () => {
    const res = await axiosClient.get<MetaDataResponse<any>>(COACH_URL);
    setCoachInfo(res.data.data[0]);
  };

  useEffect(() => {
    getCoachInfo();
  }, []);

  return (
    <>
      <h1 className="text-white  text-[30px] font-black leading-[120%] my-5 font-[system-ui]">
        Xây dựng đội hình FC online
      </h1>
      <div className="flex justify-between w-full items-center flex-col gap-3 min-w-[1350px] xss:max-desktopExtra:min-w-[1230px] ">
        <div className="flex w-full">
          <div className="w-[840px] max-w-[900px] bg-gradient-to-b bg-black/70 pl-8 pr-8">
            <div className="flex justify-end gap-2 items-end pt-4 mb-2 mr-3">
              <div className="flex flex-col items-end">
                <span className="text-base font-semibold text-white">
                  Tổng lương
                </span>
                <span className="text-xl font-semibold text-white">
                  <span className="text-white">{salary}</span>/{MAX_SALARY}
                </span>
              </div>
            </div>
            <div className=" flex p-2 w-full text-[#a3a39f] shadow-sm items-center text-center justify-center flex-nowrap relative z-20">
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
            <div className="w-full flex gap-8 justify-center my-2">
              {/* {fieldCards?.substitute.map((sub, index) => (
                <div
                  key={index}
                  className={clsx(
                    `text-white relative field-card hover:scale-125 hover:z-20 group`,
                    styleSquatBuilder.animated_empty_card
                  )}
                >
                  <SquatBuilderEmptyCard
                    positionName={sub.pos}
                    onAddPlayer={() => {
                      setIsPopupOpen(true);
                      setSelectedPlayer({
                        typePlayer: "substitute",
                        pos: sub.pos,
                      });
                    }}
                    onRemovePlayer={() =>
                      handleDeletePlayer(sub.pos, "substitute", fieldCards)
                    }
                    level={level}
                    selectedPlayer={sub?.info}
                  />
                </div>
              ))} */}
            </div>
            <div className="flex w-full justify-between gap-2 px-3 pb-4 ">
              <div className="flex items-center gap-2">
                <Image
                  src={coachInfo?.coachAvatarImage || ""}
                  alt="hlv"
                  width={80}
                  height={80}
                />
                <div className="flex flex-col justify-around text-white gap-2">
                  <span className="text-textStatic font-semibold">HLV</span>
                  <span className="text-lg font-semibold">
                    {coachInfo?.coachName || coachInfo?.coachNameKr}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Dropdown
                  classNames={{ content: "bg-black bg-opacity-90 rounded" }}
                >
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="bg-[#3b3b3e] text-white font-bold shadow-sm px-3 rounded-sm border-none"
                      endContent={<FontAwesomeIcon icon={faList} width="12" />}
                    >
                      {formationSelected || "Chọn đội hình"}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Dropdown menu"
                    classNames={{ list: "flex flex-row gap-2" }}
                  >
                    {FOMATATIONS.map((fomatation, index) => (
                      <DropdownSection
                        title={fomatation.title}
                        key={fomatation.title}
                        className=""
                        classNames={{
                          group: "grid grid-cols-3 gap-2",
                          heading: "text-2xl text-white font-bold",
                        }}
                        aria-label="Dropdown content"
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
                {/* <Dropdown
                  classNames={{ content: "bg-black bg-opacity-90 rounded" }}
                  placement="top"
                >
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="bg-[#3b3b3e] text-white font-bold shadow-sm px-3 rounded-sm border-none"
                      endContent={
                        <FontAwesomeIcon icon={faLayerGroup} width="12" />
                      }
                    >
                      {"Level " + level || "Chọn Level"}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Dropdown menu"
                    classNames={{ list: "flex flex-row gap-2" }}
                  >
                    {LEVELS.map((item, index) => (
                      <DropdownItem
                        onClick={() => setLevel(item?.value)}
                        className={`col-span-1 text-xs p-1 border border-white !hover:bg-primary text-white hover:border-primary rounded-sm ${
                          item.value === level && "bg-primary border-primary"
                        }`}
                        key={item.value}
                      >
                        {item.title}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown> */}
              </div>
            </div>
          </div>
          <div className="flex-1 bg-black/50">
            <SelectedPlayerTable
              setUpgrade={setUpgrade}
              setLevel={setLevel}
              setTeamColor={setTeamColor}
              upgrade={upgrade}
              level={level}
              teamColor={teamColor}
              data={fieldCards}
              selectDisplayPlayer={selectDisplayPlayer}
              setSelectDisplayPlayer={setSelectDisplayPlayer}
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
          setDisplayPlayer={setSelectDisplayPlayer}
        />
      )}
    </>
  );
};

export { SquatBuilderView };
