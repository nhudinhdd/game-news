import { SeasonRes } from "@/model/player/season";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import clsx from "clsx";
import Image from "next/image";
import React, { useReducer } from "react";
import { useEffect, useState } from "react";
import { Divider } from "@nextui-org/react";

type ModalSearch = {
  isOpen: boolean;
  onOpenChange: () => void;
  values: any[];
  selectedID: Set<string>;
  selectedList: (values: Set<string>) => void;
};

export function ModalSearch(props: ModalSearch) {
  const { isOpen, onOpenChange, values, selectedList, selectedID } = props;
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const updateSeasons = (seasonId: string) => {
    if (selectedID.has(seasonId)) {
      selectedID.delete(seasonId);
    } else {
      selectedID.add(seasonId);
    }
    selectedList(selectedID);

    forceUpdate();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        size="xs"
        className="w-[700px]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1   text-center">
                Mùa
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-row gap-2">
                  <Input
                    placeholder="Vui lòng nhập từ khóa tìm kiếm"
                    className="grow"
                  ></Input>
                  <Button className="w-7 shrink grow-0">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="h-[25px]"
                    />
                  </Button>
                </div>
                <div className="flex flex-row flex-wrap h-[200px] overflow-y-auto">
                  {values.map((v, index) => (
                    <div
                      key={v.seasonID}
                      onClick={() => updateSeasons(v.seasonID)}
                      className={clsx(
                        "flex flex-row gap-3 py-3 basis-1/3 pl-5 cursor-pointer ",
                        index % 2 == 0 ? "bg-[#242424]" : "",
                        selectedID.has(v.seasonID)
                          ? "bg-[#f4f4f8] text-black font-semibold   border-r border-b"
                          : "hover:bg-[#3f3f45] "
                      )}
                    >
                      <div className="flex flex-col justify-center">
                        <Image
                          src={v.logo}
                          alt={v.altBackgroundLogo}
                          width={30}
                          height={25}
                          className="h-[25px]"
                        ></Image>
                      </div>

                      <span className="text-[17px] flex flex-col justify-center">
                        {v.fullName}
                      </span>
                    </div>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter className="flex flex-row justify-between">
                <Button radius="full" className="w-[120px] h-7">
                  Tạo lại
                </Button>
                <Button
                  onPress={onClose}
                  className="w-[120px] h-7 bg-[#09F468] text-black font-semibold"
                >
                  Xác nhận
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
function updateState(arg0: {}): any {
  throw new Error("Function not implemented.");
}
