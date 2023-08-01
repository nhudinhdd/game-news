import { PlayerCommonInfo } from "../playerCommonInfo/playerCommonInfo";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import React from "react";
import { PlayerSeasonRes } from "@/model/player/player";

type PlayerSeasonProps = {
  data: PlayerSeasonRes[];
};
export function PlayerSeasonList(props: PlayerSeasonProps) {
  const { data } = props;
  const [playerSeasonIDFocus, setPlayerSeasonIDFocus] = useState(
    data[0].playerSeasonID
  );
  useEffect(() => {
    if (document.getElementById(playerSeasonIDFocus)) {
      document.getElementById(playerSeasonIDFocus)!.style.visibility =
        "visible";
    }
  });

  function handleSelectRow(key: string | Set<import("react").Key>): any {
    setPlayerSeasonIDFocus(Array.from(key).join(" "));
    if (document.getElementById(playerSeasonIDFocus)) {
      document.getElementById(playerSeasonIDFocus)!.style.visibility = "hidden";
    }
    if (document.getElementById(Array.from(key).join(" "))) {
      document.getElementById(Array.from(key).join(" "))!.style.visibility =
        "visible";
    }
  }
  const handleOnMouseOver = () => {
    console.log("log");
  };
  return (
    <div className="">
      <Table
        aria-label="Bảng dữ liệu danh sách cầu thủ trong FC Online"
        selectionMode="single"
        removeWrapper
        defaultSelectedKeys={[playerSeasonIDFocus]}
        onSelectionChange={(key) => handleSelectRow(key)}
      >
        <TableHeader>
          <TableColumn className="text-sm">Thông tin cơ bản</TableColumn>
          <TableColumn className="text-sm">Lương</TableColumn>
          <TableColumn className="text-sm">Ovr</TableColumn>
          <TableColumn className="text-sm">Tốc độ</TableColumn>
          <TableColumn className="text-sm">Tăng tốc</TableColumn>
          <TableColumn className="text-sm">Sức mạnh</TableColumn>
          <TableColumn className="text-sm">Thể lực</TableColumn>
        </TableHeader>
        <TableBody items={data}>
          {(item) => (
            <TableRow
              key={item.playerSeasonID}
              className="group/item"
              onMouseEnter={() => handleOnMouseOver}
            >
              <TableCell>
                <PlayerCommonInfo
                  playerSeason={item}
                  playerSeasonIDFocus={playerSeasonIDFocus}
                ></PlayerCommonInfo>
              </TableCell>
              <TableCell>{item.salary}</TableCell>
              <TableCell>{item.ovr}</TableCell>
              <TableCell>{item.pas}</TableCell>
              <TableCell>{item.pas}</TableCell>
              <TableCell>{item.phy}</TableCell>
              <TableCell>{item.phy}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
