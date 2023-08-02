import useTeam from "@/lib/useTeam";
import useTournament from "@/lib/useTournament";
import { TeamRes } from "@/model/player/team";
import { TournamentRes } from "@/model/player/tournament";
import styles from "@/styles/filter.module.css";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import { useMemo, useState } from "react";

type TourFilterProps = {
  setTournamentID: (tourID: string) => void;
  tourID: string;
  setTeamID: (teamID: string) => void;
};
export default function TeamFilter(props: TourFilterProps) {
  const { setTournamentID, tourID, setTeamID } = props;
  const arr: TournamentRes[] = [];
  const arrTeamDefault: TeamRes[] = [];
  const { dataTour = arr } = useTournament();
  const { dataTeam = arrTeamDefault } = useTeam({
    tourID: tourID,
  });

  const [selectedTourKeys, setSelectedTourKeys] = useState(new Set([""]));
  const selectedValue = useMemo(() => {
    const key = Array.from(selectedTourKeys).join("");
    const value =
      dataTour.find((i) => i.tourID === key)?.tourName || "Giải đấu";
    return value;
  }, [selectedTourKeys]);

  const [selectedTeamKeys, setSelectedTeamKeys] = useState(new Set([""]));
  const selectedTeamValue = useMemo(() => {
    const key = Array.from(selectedTeamKeys).join("");
    const value =
      dataTeam.find((i) => i.teamID === key)?.teamName || "Đội bóng";
    return value;
  }, [selectedTeamKeys]);

  return (
    <div className="basis-2/6 flex flex-col gap-2">
      <label>Giải / đội</label>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{selectedValue}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Danh sách giải đấu FC Online"
          className={styles.itemDropDown}
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={selectedTourKeys}
          onSelectionChange={(key) => {
            const selectedKey = Array.from(key).join("");
            setSelectedTourKeys(new Set([selectedKey]));
            setTournamentID(selectedKey);
          }}
        >
          {[{ tourID: "", tourName: " Giải đấu" }, ...dataTour].map((item) => (
            <DropdownItem key={item.tourID}>{item.tourName}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{selectedTeamValue}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Danh sách đội bóng trong FC Online"
          className="max-w-200 h-32 overflow-x-auto"
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={selectedTeamKeys}
          onSelectionChange={(key) => {
            const selectedKey = Array.from(key).join("");
            setSelectedTeamKeys(new Set([selectedKey]));
            setTeamID(selectedKey);
          }}
        >
          {[
            { teamID: "", teamName: " Đội bóng", teamLogo: "", altLogo: "" },
            ...dataTeam,
          ].map((item) => (
            <DropdownItem
              key={item.teamID}
              startContent={
                item.teamID !== "" && (
                  <Image
                    src={item.teamLogo}
                    alt={item.altLogo}
                    width={18}
                    height={14}
                  ></Image>
                )
              }
            >
              {item.teamName}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
