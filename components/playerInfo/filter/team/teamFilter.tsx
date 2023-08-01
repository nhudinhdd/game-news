import useTournament from "@/lib/useTournament";
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import styles from "@/styles/filter.module.css";
import useTeam from "@/lib/useTeam";
import { useEffect, useMemo, useState } from "react";
import { TournamentRes } from "@/model/player/tournament";
import { TeamRes } from "@/model/player/team";

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
          className={styles.itemDropDown}
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={selectedTeamKeys}
          onSelectionChange={(key) => {
            const selectedKey = Array.from(key).join("");
            setSelectedTeamKeys(new Set([selectedKey]));
            setTeamID(selectedKey);
          }}
        >
          {[{ teamID: "", teamName: " Đội bóng" }, ...dataTeam].map((item) => (
            <DropdownItem key={item.teamID}>{item.teamName}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
