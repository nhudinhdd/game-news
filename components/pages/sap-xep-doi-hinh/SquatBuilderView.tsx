import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCircleXmark,
  faLayerGroup,
  faList,
  faPlus,
  faRefresh,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FOMATATIONS, LEVELS, TOTALS } from "@/const/sap-xep-doi-hinh";
import { Select } from "@/components/selects/selects";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FieldCardsType } from "@/types/sap-xep-doi-hinh";
import { checkFieldCards } from "@/utils/sap-xep-doi-hinh";
import SquatSearchModal from "./SquatSearchModal";
import { PlayerDetailAvatar } from "../du-lieu-cau-thu-fc-online/PlayerDetail/PlayerDetailAvatar";

const SquatBuilderView = () => {
  const [fieldCards, setFieldCards] = useState<FieldCardsType>({
    attacks: [
      { pos: "lw", info: {} },
      { pos: "st", info: {} },
      { pos: "rw", info: {} },
    ],
    middles: [
      { pos: "cam", info: {} },
      { pos: "lm", info: {} },
      { pos: "rm", info: {} },
      { pos: "cdm", info: {} },
    ],
    defends: [
      { pos: "lcb", info: {} },
      { pos: "cb", info: {} },
      { pos: "rcb", info: {} },
      { pos: "gk", info: {} },
    ],
  });
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const [formationSelected, setFormationSelected] = useState<string>("3-1-2-1-3")

  const [level, setLevel] = useState(1);

  const [selectedPlayer, setSelectedPlayer] = useState<any>({
    typePlayer: "",
    pos: "",
  });

  const [selectedPlayerList, setSelectedPlayerList] = useState<any[]>([])

  const [statistic, setStatistic] = useState({
    pac: 0,
    sho: 0,
    pas: 0,
    dri: 0,
    def: 0,
    phy: 0
  });

  const [copyStatistic, setCopyStatistic] = useState({
    pac: 0,
    sho: 0,
    pas: 0,
    dri: 0,
    def: 0,
    phy: 0
  })

  const [overate, setOverate] = useState<number>(0);

  const [playerNumbers, setPlayerNumbers] = useState(0);

  const [salary, setSalary] = useState(0);

  const totalArr = ["pac", "sho", "pas", "dri","def", "phy"];

  // useEffect(() => {
  //   const formationData: any = localStorage.getItem("formationData");
  //   if(formationData){
  //     setFieldCards(formationData);
  //   }
  // }, [fieldCards])

  useEffect(() => {
    var newOvr = 0;
    var newSta = {
      pac: 0,
      sho: 0,
      pas: 0,
      dri: 0,
      def: 0,
      phy: 0
    };
    var players = 0;
    var salaryTotal = 0;
    var playerList: any[] = [];
    Object.keys(fieldCards).forEach((props: string) => {
      const array: any = fieldCards[props];
      array.forEach((player: any) => {
        const playerInfo = player["info"];
        if(Object.keys(playerInfo).length > 0 && player["pos"] !== "gk") {
          newSta = {
            pac: newSta["pac"] + playerInfo["pac"],
            sho: newSta["sho"] + playerInfo["sho"],
            pas: newSta["pas"] + playerInfo["pas"],
            dri: newSta["dri"] + playerInfo["dri"],
            def: newSta["def"] + playerInfo["def"],
            phy: newSta["phy"] + playerInfo["phy"]
          }
          newOvr = newOvr + playerInfo["ovr"];
          salaryTotal = salaryTotal + playerInfo["salary"];
          playerList.push(playerInfo);
          if(player["pos"] !== "gk") {
            players = players + 1;
          }
        }
      })
    });
    setOverate(newOvr);
    setPlayerNumbers(players);
    setSalary(salaryTotal);
    const statis = {
      pac: players > 0 ? Math.floor(newSta["pac"] / players) : 0,
      sho: players > 0 ? Math.floor(newSta["sho"] / players) : 0,
      pas: players > 0 ? Math.floor(newSta["pas"] / players) : 0,
      dri: players > 0 ? Math.floor(newSta["dri"] / players) : 0,
      def: players > 0 ? Math.floor(newSta["def"] / players) : 0,
      phy: players > 0 ? Math.floor(newSta["phy"] / players) : 0
    }
    setStatistic(statis);
    setCopyStatistic(statis);
    setSelectedPlayerList(playerList);
  }, [fieldCards]);

  const handleDeletePlayer = (position: string, type: string, fieldCards: any) => {
    const playerArr = fieldCards[type];
    const eleIndex = playerArr.findIndex((item: any) => item.pos === position);
    playerArr[eleIndex]["info"] = {};
    setFieldCards({...fieldCards, [type]: playerArr})
  }

  const handleReset = (formation: string) => {
    let arrayOfObjects = [];
    for (let i = 0; i < 11; i++) {
      arrayOfObjects.push(Object.assign({}, {info: {}}));
    }
    const newFieldCards = checkFieldCards(formation, arrayOfObjects);
    setFieldCards(newFieldCards);
  }

  return (
    <>
      <div className="flex justify-between w-full items-center flex-col gap-3 mt-3">
        <div className="flex justify-between w-full items-center">
          <h1 className="text-2xl font-bold text-white">
            FC Online | Sắp xếp đội hình
          </h1>
          <div onClick={() => handleReset(formationSelected)} className="cursor-pointer flex gap-2 items-center bg-danger text-white font-bold shadow-sm px-3 py-2 rounded-md">
            <FontAwesomeIcon icon={faCircleXmark} width="12" />
            <p className="text-sm ">Đặt lại</p>
          </div>
        </div>
        <div className="flex w-full px-2 py-2 gap-3 bg-[#3b3b3e] text-[#a3a39f] shadow-sm text-center justify-between flex-nowrap z-30">
          <div className="flex gap-2">
            <Select
              label={
                <div className="cursor-pointer flex gap-2 items-center bg-primary text-white font-bold shadow-sm px-3 py-2 rounded-md">
                  <FontAwesomeIcon icon={faList} width="12" />
                  <p className="text-sm">Chọn đội hình</p>
                </div>
              }
              option={
                <div className="flex gap-2 w-max">
                  {FOMATATIONS.map((fomatation, index) => (
                    <div className="flex gap-2 flex-col max-w-200" key={index}>
                      <h3 className="text-2xl font-bold text-left text-white">
                        {fomatation.title}
                      </h3>
                      <div className="flex gap-2 flex-wrap" key={index}>
                        {fomatation.list.map((item, index) => (
                          <p
                            key={index}
                            className="text-xs p-1 border border-white hover:bg-primary text-white hover:border-primary"
                            onClick={() => {
                              const newArrPos = [
                                ...fieldCards["attacks"].map((item) => item),
                                ...fieldCards["middles"].map((item) => item),
                                ...fieldCards["defends"].map((item) => item),
                              ];
                              setFieldCards(checkFieldCards(item, newArrPos));
                              setFormationSelected(item);
                            }}
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              }
            />
            <Select
              label={
                <div className="cursor-pointer flex gap-2 items-center bg-primary text-white font-bold shadow-sm px-3 py-2 rounded-md">
                  <FontAwesomeIcon icon={faLayerGroup} width="12" />
                  <p className="text-sm">Chọn Level</p>
                </div>
              }
              option={
                <div className="flex gap-2 w-max max-w-200">
                  {LEVELS.map((item, index) => (
                    <p
                      key={index}
                      onClick={() => {
                        const newLevel = level;
                        setLevel(index + 1);
                        setStatistic({
                          pac: copyStatistic["pac"] + index,
                          sho: copyStatistic["sho"] + index,
                          pas: copyStatistic["pas"] + index,
                          dri: copyStatistic["dri"] + index,
                          def: copyStatistic["def"] + index,
                          phy: copyStatistic["phy"] + index
                        })
                      }}
                      className={`text-xs p-1 border border-white hover:bg-primary text-white hover:border-primary ${index + 1 === level && "border-primary bg-primary"}`}
                    >
                      {item.title}
                    </p>
                  ))}
                </div>
              }
            />
          </div>
          <div className="flex flex-col gap-1 flex-nowrap items-end">
            <div className="flex gap-3 flex-nowrap items-end">
              <div className="flex">
                <h4 className="text-lg font-bold leading-0">Lương: </h4>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-3xl font-bold text-white">{salary}</p>
                <p className="text-3xl font-bold text-white">/</p>
                <p className="text-3xl font-bold text-red-700">250</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full items-center gap-3">
          <div className="flex">
            {TOTALS.map((total, index) => (
              <>
                <div
                  key={index}
                  className="flex  px-2 py-2 gap-3 flex-col bg-[#3b3b3e] text-white shadow-sm text-center bg-"
                >
                  <h4>{total.title}</h4>
                  <p className="text-2xl font-bold">{statistic[totalArr[index]]}</p>
                  <span className="w-full h-1 bg-primary"></span>
                </div>
                {index !== TOTALS.length - 1 && <span className="w-3"></span>}
              </>
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
          <div className="flex">
            <div className="flex px-2 py-2 gap-3 flex-col bg-[#3b3b3e] text-white shadow-sm text-center bg-">
              <h4>Điểm vị trí</h4>
              <p className="text-2xl font-bold">{overate}</p>
              <span className="w-full h-1 bg-yellow-500"></span>
            </div>
          </div>
        </div>
        <div className="mt-16 flex p-2 w-full bg-[#3b3b3e] text-[#a3a39f] shadow-sm items-center text-center justify-center flex-nowrap relative z-20">
          <div className="flex w-full h-full field-main absolute top-0 left-0 flex-col z-10">
            <div className="w-full h-1/3 text-center items-center justify-center flex field-area relative att">
              {fieldCards?.attacks.map((att, index) => (
                <div
                  key={index}
                  className={`text-white field-card absolute pos-${att.pos} transition-size hover:scale-150 hover:z-20 group`}
                >
                  {Object.keys(att.info).length > 0 ? (
                    <>
                      <PlayerDetailAvatar
                        upgrade={1}
                        level={level}
                        teamColor={1}
                        page="formation"
                        dataElementList={att.info}
                      ></PlayerDetailAvatar>
                      <div className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-md bg-red-800 absolute bottom-2 -left-9 invisible group-hover:visible group-hover:scale-75">
                        <FontAwesomeIcon icon={faTrash} onClick={() => handleDeletePlayer(att.pos, "attacks", fieldCards)} width="12" />
                      </div>
                      <div
                        onClick={() => {
                          setIsPopupOpen(true);
                          setSelectedPlayer({
                            typePlayer: "attacks",
                            pos: att.pos,
                          });
                        }}
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
                        {att.pos.toUpperCase()}
                      </div>
                      <div
                        onClick={() => {
                          setIsPopupOpen(true);
                          setSelectedPlayer({
                            typePlayer: "attacks",
                            pos: att.pos,
                          });
                        }}
                        className="w-10 h-10 hover:bg-yellow-500 rounded-full bg-white translate-x-7 cursor-pointer -translate-y-24 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faPlus}
                          width="20"
                          color="#333"
                        />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
            <div className="w-full h-1/3 text-center items-center justify-center flex field-area relative mid">
              {fieldCards?.middles.map((mid, index) => (
                <div
                  key={index}
                  className={`text-white field-card absolute pos-${mid.pos} transition-size hover:scale-150 hover:z-20 group`}
                >
                  {Object.keys(mid.info).length > 0 ? (
                    <>
                      <PlayerDetailAvatar
                        upgrade={1}
                        level={1}
                        teamColor={1}
                        page="formation"
                        dataElementList={mid.info}
                      ></PlayerDetailAvatar>
                      <div className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-md bg-red-800 absolute bottom-2 -left-9 invisible group-hover:visible group-hover:scale-75">
                        <FontAwesomeIcon icon={faTrash} onClick={() => handleDeletePlayer(mid.pos, "middles", fieldCards)} width="12" />
                      </div>
                      <div
                        onClick={() => {
                          setIsPopupOpen(true);
                          setSelectedPlayer({
                            typePlayer: "middles",
                            pos: mid.pos,
                          });
                        }}
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
                        {mid.pos.toUpperCase()}
                      </div>
                      <div
                        onClick={() => {
                          setIsPopupOpen(true);
                          setSelectedPlayer({
                            typePlayer: "middles",
                            pos: mid.pos,
                          });
                        }}
                        className="w-10 h-10 hover:bg-yellow-500 rounded-full bg-white translate-x-7 cursor-pointer -translate-y-24 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faPlus}
                          width="20"
                          color="#333"
                        />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
            <div className="w-full h-1/3 text-center items-center justify-center flex field-area relative def">
              {fieldCards?.defends.map((def, index) => (
                <div
                  key={index}
                  className={`text-white field-card absolute pos-${def.pos} transition-size hover:scale-150 hover:z-20 group`}
                >
                  {Object.keys(def.info).length > 0 ? (
                    <>
                      <PlayerDetailAvatar
                        upgrade={1}
                        level={1}
                        teamColor={1}
                        page="formation"
                        dataElementList={def.info}
                      ></PlayerDetailAvatar>
                      <div className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-md bg-red-800 absolute bottom-2 -left-9 invisible group-hover:visible group-hover:scale-75">
                        <FontAwesomeIcon icon={faTrash} onClick={() => handleDeletePlayer(def.pos, "defends", fieldCards)} width="12" />
                      </div>
                      <div
                        onClick={() => {
                          setIsPopupOpen(true);
                          setSelectedPlayer({
                            typePlayer: "defends",
                            pos: def.pos,
                          });
                        }}
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
                        {def.pos.toUpperCase()}
                      </div>
                      <div
                        onClick={() => {
                          setIsPopupOpen(true);
                          setSelectedPlayer({
                            typePlayer: "defends",
                            pos: def.pos,
                          });
                        }}
                        className="w-10 h-10 rounded-full hover:bg-yellow-500 bg-white translate-x-7 cursor-pointer -translate-y-24 flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faPlus}
                          width="20"
                          color="#333"
                        />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full h-full relative field-bg">
            <Image
              alt="Sân bóng"
              src="/images/sanbong.png"
              width={800}
              height={1244}
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
          setLevel={(setLevel)}
          selectedPlayerList={selectedPlayerList}
        />
      )}
      {/* {isPopupOpen ? (
        <Popup setIsOpen={setIsPopupOpen}>
          <SquatBuilderSearch />
        </Popup>
      ) : null} */}
    </>
  );
};

export { SquatBuilderView };
