import { TableBody, TableRow, TableCell } from "@nextui-org/react";
import { PlayerCommonInfo } from "../playerCommonInfo/playerCommonInfo";
import { PlayerSeasonRes } from "@/model/player/player";

type PlayerSeasonRowProps = {
  item: PlayerSeasonRes;
  focusID: string;
};

export function PlayerSeasonRow(props: PlayerSeasonRowProps) {
  const { item, focusID } = props;
  return (
    <TableRow key={item.playerSeasonID}>
      <TableCell className="">
        <PlayerCommonInfo
          playerSeason={item}
          playerSeasonIDFocus={focusID}
        ></PlayerCommonInfo>
      </TableCell>
      <TableCell>{item.salary}</TableCell>
      <TableCell>{item.ovr}</TableCell>
      <TableCell>{item.pas}</TableCell>
      <TableCell>{item.pas}</TableCell>
      <TableCell>{item.phy}</TableCell>
      <TableCell>{item.phy}</TableCell>
    </TableRow>
  );
}
