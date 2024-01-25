import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Search } from "./filter/search";
import { useState } from "react";
import { Input } from "@/components/inputs/input";
import { Button } from "@/components/buttons/Button";

type HeaderPlayerInfoProps = {
  setFilterState: () => void;
};
export function HeaderPlayerInfo(props: HeaderPlayerInfoProps) {
  const [playerName, setPlayerName] = useState<string>("");

  const handleSeachByPlayerName = () => {
    console.log(`let search by ${name}`);
  };

  const { setFilterState } = props;
  return (
    <div className="w-full relative">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <Image
            src="/assets/f22-ratings-db-logo.png"
            width={60}
            height={60}
            alt="Danh sách cầu thủ trong FC Online"
          />
          <div className="mr-3">
            <span className="text-slate-500">Ratings Collective</span>
            <h1 className="font-riftonnorm text-white">
              FC Online | Danh sách cầu thủ
            </h1>
          </div>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <Input
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Nhập tên cầu thủ..."
          />
          <Button onClick={() => handleSeachByPlayerName()}>
            <FontAwesomeIcon width="20" icon={faMagnifyingGlass} />
            <p className="ml-1">Tìm kiếm</p>
          </Button>
          <Search />
        </div>
        <div className="flex flex-col justify-center">
          <span className="font-[INGAME] text-[25px] mx-6 text-white">
            0/100
          </span>
        </div>
      </div>
    </div>
  );
}
