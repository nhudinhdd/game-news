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
import { useState } from "react";
import { FieldCardsType } from "@/types/sap-xep-doi-hinh";
import { checkFieldCards } from "@/utils/sap-xep-doi-hinh";
import styles from "@/styles/squatBuilder.module.css";
import { Popup } from "@/components/popup/popup";
import { SquatBuilderSearch } from "./SquatBuilderSearch";

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
      <div className="flex justify-between w-full items-center flex-col gap-3">
        <div className="flex justify-between w-full items-center">
          <h1 className="text-2xl font-bold">FC Online | Sắp xếp đội hình</h1>
          <div className="cursor-pointer flex gap-2 items-center bg-black text-white font-bold shadow-sm px-3 py-2 rounded-md">
            <FontAwesomeIcon icon={faCircleXmark} width="12" />
            <p className="text-sm ">Đặt lại</p>
          </div>
        </div>
        <div className="flex w-full px-2 py-2 gap-3 bg-white shadow-sm text-center justify-between flex-nowrap z-30">
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
                <p className="text-3xl font-bold">0</p>
                <p className="text-3xl font-bold">/</p>
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
                  className="flex  px-2 py-2 gap-3 flex-col bg-white shadow-sm text-center bg-"
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
              className="animate-[light-up_1s_infinite_linear]"
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              width="14"
              className="animate-[light-up_1s_infinite_linear]"
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              width="14"
              className="animate-[light-up_1s_infinite_linear]"
            />
          </div>
          <div className="flex">
            <div className="flex px-2 py-2 gap-3 flex-col bg-white shadow-sm text-center bg-">
              <h4>Điểm vị trí</h4>
              <p className="text-2xl font-bold">0</p>
              <span className="w-full h-1 bg-yellow-500"></span>
            </div>
          </div>
        </div>
        <div className="mt-16 flex p-2 w-full bg-white shadow-sm items-center text-center justify-center flex-nowrap relative z-20">
          <div className="flex w-full h-full field-main absolute top-0 left-0 flex-col z-10">
            <div className="w-full h-1/3 text-center items-center justify-center flex field-area relative att">
              {fieldCards?.attacks.map((att, index) => (
                <div
                  key={index}
                  onClick={() => setIsPopupOpen(true)}
                  className={`p-3 bg-primary text-white field-card absolute pos-${att.pos}`}
                ></div>
              ))}
            </div>
            <div className="w-full h-1/3 text-center items-center justify-center flex field-area relative mid">
              {fieldCards?.middles.map((mid, index) => (
                <div
                  key={index}
                  className={`p-3 bg-primary text-white field-card absolute pos-${mid.pos}`}
                ></div>
              ))}
            </div>
            <div className="w-full h-1/3 text-center items-center justify-center flex field-area relative def">
              {fieldCards?.defends.map((def, index) => (
                <div
                  key={index}
                  className={`p-3 bg-primary text-white field-card absolute pos-${def.pos}`}
                ></div>
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
      {isPopupOpen ? (
        <Popup setIsOpen={setIsPopupOpen}>
          <SquatBuilderSearch />
        </Popup>
      ) : null}
    </>
  );
};

export { SquatBuilderView };
