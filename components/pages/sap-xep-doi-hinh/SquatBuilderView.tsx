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
import { useState } from "react";
import { FieldCardsType } from "@/types/sap-xep-doi-hinh";
import { checkFieldCards } from "@/utils/sap-xep-doi-hinh";
import styles from "@/styles/squatBuilder.module.css";
import { Popup } from "@/components/popup/popup";
import { SquatBuilderSearch } from "./SquatBuilderSearch";
import SquatSearchModal from "./SquatSearchModal";
import { Button } from "@nextui-org/react";

const SquatBuilderView = () => {
  const [fieldCards, setFieldCards] = useState<FieldCardsType>({
    attacks: [
      { pos: "rw", info: {} },
      { pos: "st", info: {} },
      { pos: "lw", info: {} },
    ],
    middles: [
      { pos: "cdm", info: {} },
      { pos: "rm", info: {} },
      { pos: "lm", info: {} },
      { pos: "cam", info: {} },
    ],
    defends: [
      { pos: "gk", info: {} },
      { pos: "rcb", info: {} },
      { pos: "cb", info: {} },
      { pos: "lcb", info: {} },
    ],
  });
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-between w-full items-center flex-col gap-3 mt-3">
        <div className="flex justify-between w-full items-center">
          <h1 className="text-2xl font-bold text-white">
            FC Online | Sắp xếp đội hình
          </h1>
          <div className="cursor-pointer flex gap-2 items-center bg-danger text-white font-bold shadow-sm px-3 py-2 rounded-md">
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
                            onClick={() => setFieldCards(checkFieldCards(item))}
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
                  {LEVELS.map((level, index) => (
                    <p
                      key={index}
                      className="text-xs p-1 border border-white hover:bg-primary text-white hover:border-primary"
                    >
                      {level.title}
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
                <p className="text-3xl font-bold text-white">0</p>
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
                  <p className="text-2xl font-bold">{total.detail}</p>
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
              <p className="text-2xl font-bold">0</p>
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
                  onClick={() => setIsPopupOpen(true)}
                  className={`text-white field-card absolute pos-${att.pos} transition-size hover:scale-150 hover:z-20 group`}
                >
                  <Image
                    alt="the_trong"
                    src={"/images/the_trong.png"}
                    width={100}
                    height={160}
                    priority={false}
                  />
                  {att.info && (
                    <>
                      <div className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-md bg-red-800 absolute bottom-2 -left-9 invisible group-hover:visible group-hover:scale-75">
                        <FontAwesomeIcon icon={faTrash} width="12" />
                      </div>
                      <div
                        onClick={() => setIsPopupOpen(true)}
                        className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-md bg-yellow-400 absolute bottom-2 -right-9 invisible group-hover:visible group-hover:scale-75"
                      >
                        <FontAwesomeIcon icon={faRefresh} width="12" />
                      </div>
                    </>
                  )}
                  <div className="top-3 absolute font-bold flex justify-center w-full">
                    {att.pos.toUpperCase()}
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white">
                    <FontAwesomeIcon icon={faPlus} width="12" color="#333" />
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-1/3 text-center items-center justify-center flex field-area relative mid">
              {fieldCards?.middles.map((mid, index) => (
                <div
                  key={index}
                  className={`text-white field-card absolute pos-${mid.pos} transition-size hover:scale-150 hover:z-20 group`}
                >
                  <Image
                    alt="the_trong"
                    src={"/images/the_trong.png"}
                    width={100}
                    height={160}
                    priority={false}
                  />
                  {mid.info && (
                    <>
                      <div className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-md bg-red-800 absolute bottom-2 -left-9 invisible group-hover:visible group-hover:scale-75">
                        <FontAwesomeIcon icon={faTrash} width="12" />
                      </div>
                      <div
                        onClick={() => setIsPopupOpen(true)}
                        className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-md bg-yellow-400 absolute bottom-2 -right-9 invisible group-hover:visible group-hover:scale-75"
                      >
                        <FontAwesomeIcon icon={faRefresh} width="12" />
                      </div>
                    </>
                  )}
                  <div className="top-3 absolute font-bold flex justify-center w-full">
                    {mid.pos.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-1/3 text-center items-center justify-center flex field-area relative def">
              {fieldCards?.defends.map((def, index) => (
                <div
                  key={index}
                  className={`text-white field-card absolute pos-${def.pos} transition-size hover:scale-150 hover:z-20 group`}
                >
                  <Image
                    alt="the_trong"
                    src={"/images/the_trong.png"}
                    width={100}
                    height={160}
                    priority={false}
                  />
                  {def.info && (
                    <>
                      <div className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-md bg-red-800 absolute bottom-2 -left-9 invisible group-hover:visible group-hover:scale-75">
                        <FontAwesomeIcon icon={faTrash} width="12" />
                      </div>
                      <div
                        onClick={() => setIsPopupOpen(true)}
                        className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-md bg-yellow-400 absolute bottom-2 -right-9 invisible group-hover:visible group-hover:scale-75"
                      >
                        <FontAwesomeIcon icon={faRefresh} width="12" />
                      </div>
                    </>
                  )}
                  <div className="top-3 absolute font-bold flex justify-center w-full">
                    {def.pos.toUpperCase()}
                  </div>
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
