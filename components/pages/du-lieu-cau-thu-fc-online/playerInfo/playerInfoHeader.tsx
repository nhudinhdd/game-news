import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import { Search } from "./filter/search";
import { Button } from "@/components/buttons/Button";

type HeaderPlayerInfoProps = {
  setFilterState: () => void;
};
export function HeaderPlayerInfo(props: HeaderPlayerInfoProps) {
  const { setFilterState } = props;
  return (
    <div className=" w-full relative bg-black bg-opacity-70 py-2 pl-6 text-white">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-3 ">
          <input
            className="bg-[#1e1f20] pl-2  w-[370px] h-9"
            placeholder="Nhập tên cầu thủ"
          ></input>
          <div className="h-full ">
            <Button>
              <FontAwesomeIcon width="20" icon={faMagnifyingGlass} />
            </Button>
          </div>
          <Search />
        </div>
        <div className="flex flex-col justify-center">
          <span className="font-[INGAME] text-[25px] mx-6">0/100</span>
        </div>
      </div>
    </div>
  );
}
