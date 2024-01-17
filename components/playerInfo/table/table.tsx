import { PlayerSeasonRes } from "@/model/player/player";
import { PlayerCommonInfo } from "../playerCommonInfo/playerCommonInfo";
import { getColorClass } from "@/lib/common";
import { clsx } from "clsx";
import { useState } from "react";
type PlayerSeasonProps = {
  data: PlayerSeasonRes[];
};
export default function TablePlayer(props: PlayerSeasonProps) {
  const { data } = props;
  const [playerSeasonIDFocus, setPlayerSeasonIDFocus] = useState(
    " data[0].playerSeasonID"
  );
  const [isDetailStatus, setDetailStatus] = useState(true);
  const [playerIDHover, setPlayerIDHover] = useState("");
  const onMountEnter = (id: string) => {
    if (id === playerSeasonIDFocus) return;
    setPlayerIDHover(id);
  };

  function onMountLeave(id: string) {
    setPlayerIDHover("");
  }

  const updatePlayerSeasonID = (playerID: string) => {
    if (playerID === playerSeasonIDFocus) playerID = "focusHiddien";
    setPlayerSeasonIDFocus(playerID);
    setDetailStatus(!isDetailStatus);
    setPlayerIDHover("");
  };
  return (
    <div className="xss:mobile px-1">
      <table
        aria-label="Bảng dữ liệu cầu thủ FC online"
        className="min-w-full h-auto table-auto w-full laptop:max-desktop:w-[800px] desktop:w-[1000px]"
      >
        <thead role="rowgroup">
          <tr
            role="row"
            className="group outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 
          data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 cursor-default"
          >
            <th
              className="group px-3 h-10 text-left align-middle 
          bg-default-100 whitespace-nowrap text-foreground-500 font-semibold 
          first:rounded-l-lg last:rounded-r-lg text-sm"
            >
              Thông tin cơ bản
            </th>
            <th
              className="group px-3 h-10 text-center align-middle bg-default-100 whitespace-nowrap
           text-foreground-500 font-semibold xss:max-mobile:rounded-r-lg  text-sm"
            >
              Lương
            </th>
            <th
              className="group px-3 h-10 text-center align-middle bg-default-100 whitespace-nowrap
           text-foreground-500 font-semibold first:rounded-l-lg last:rounded-r-lg text-sm xss:max-mobile:hidden"
            >
              Tốc độ
            </th>
            <th
              className="group px-3 h-10 text-center align-middle bg-default-100 whitespace-nowrap
           text-foreground-500 font-semibold first:rounded-l-lg last:rounded-r-lg text-sm xss:max-mobile:hidden"
            >
              Sút
            </th>
            <th
              className="group px-3 h-10 text-center align-middle bg-default-100 whitespace-nowrap 
          text-foreground-500 font-semibold first:rounded-l-lg last:rounded-r-lg text-sm  xss:max-mobile:hidden"
            >
              Chuyền
            </th>
            <th
              className="group px-3 h-10 text-center align-middle bg-default-100 whitespace-nowrap 
          text-foreground-500 font-semibold mobile:max-laptop:rounded-r-lg text-sm  xss:max-mobile:hidden"
            >
              Rê bóng
            </th>
            <th
              className="group px-3 h-10 text-center align-middle bg-default-100 whitespace-nowrap 
          text-foreground-500 font-semibold first:rounded-l-lg last:rounded-r-lg text-sm xss:max-laptop:hidden"
            >
              Phòng thủ
            </th>

            <th
              className="group px-3 h-10 text-center align-middle bg-default-100 whitespace-nowrap 
          text-foreground-500 font-semibold first:rounded-l-lg last:rounded-r-lg text-sm xss:max-laptop:hidden"
            >
              Thể lực
            </th>
          </tr>
        </thead>
        <tbody className="before:block before:mt-[6px]">
          {data.map((item, index) => (
            <tr
              aria-selected="true"
              data-key={item.playerSeasonID}
              aria-labelledby={item.playerSeasonID}
              key={index}
              className={clsx(
                playerSeasonIDFocus == item.playerSeasonID
                  ? "bg-default/[.4]"
                  : "",
                "h-[100px] hover:bg-default/[.4]"
              )}
              onClick={() => updatePlayerSeasonID(item.playerSeasonID)}
              onMouseEnter={() => onMountEnter(item.playerSeasonID)}
              onMouseLeave={() => onMountLeave(item.playerSeasonID)}
            >
              <td className="first:rounded-l-lg last:rounded-r-lg desktop:w-[400px] ">
                <PlayerCommonInfo
                  playerSeason={item}
                  playerSeasonIDFocus={playerSeasonIDFocus}
                  playerIDHover={playerIDHover}
                ></PlayerCommonInfo>
              </td>
              <td
                data-selected="true"
                role="gridcell"
                className="xss:max-mobile:rounded-r-lg text-center"
              >
                <span className="text-[15px] font-bold">{item.salary}</span>
              </td>
              <td
                data-selected="true"
                role="gridcell"
                className="first:rounded-l-lg last:rounded-r-lg text-center xss:max-mobile:hidden"
              >
                <span
                  className={clsx(
                    getColorClass(item.pac),
                    "text-[15px] font-bold"
                  )}
                >
                  {item.pac}
                </span>
              </td>
              <td
                data-selected="true"
                role="gridcell"
                className="first:rounded-l-lg last:rounded-r-lg text-center xss:max-mobile:hidden"
              >
                <span
                  className={clsx(
                    getColorClass(item.sho),
                    "text-[15px] font-bold"
                  )}
                >
                  {item.sho}
                </span>
              </td>
              <td
                data-selected="true"
                role="gridcell"
                className="first:rounded-l-lg last:rounded-r-lg text-center  xss:max-mobile:hidden"
              >
                <span
                  className={clsx(
                    getColorClass(item.pas),
                    "text-[15px] font-bold"
                  )}
                >
                  {item.pas}
                </span>
              </td>
              <td
                data-selected="true"
                role="gridcell"
                className="mobile:max-laptop:rounded-r-lg text-center xss:max-mobile:hidden"
              >
                <span
                  className={clsx(
                    getColorClass(item.dri),
                    "text-[15px] font-bold"
                  )}
                >
                  {item.dri}
                </span>
              </td>
              <td
                data-selected="true"
                role="gridcell"
                className=" text-center xss:max-laptop:hidden"
              >
                <span
                  className={clsx(
                    getColorClass(item.def),
                    "text-[15px] font-bold"
                  )}
                >
                  {item.def}
                </span>
              </td>
              <td
                data-selected="true"
                role="gridcell"
                className=" first:rounded-l-lg last:rounded-r-lg text-center xss:max-laptop:hidden"
              >
                <span
                  className={clsx(
                    getColorClass(item.phy),
                    "text-[15px] font-bold"
                  )}
                >
                  {item.phy}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
