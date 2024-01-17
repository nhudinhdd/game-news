import { PlayerSeasonDetailRes } from "@/model/player/player";
import { Chip, ScrollShadow, Tab, Tabs } from "@nextui-org/react";
import PlayerClubs from "../commonInfo/subInfo/playerClubs";
import PlayerTraits from "../commonInfo/subInfo/playerTraits";
import { RelateSeason } from "../commonInfo/subInfo/related/relateSeason";
type PlayerStatistic = {
  data: PlayerSeasonDetailRes;
};
export default function PlayerDetailSubInfo(props: PlayerStatistic) {
  const { data } = props;
  return (
    <div className="pl-4 xss:max-mobile:pl-0">
      <Tabs
        aria-label="Dynamic tabs"
        variant="underlined"
        color="warning"
        className="xss:max-mobile:w-[250px] overflow-x-auto"
      >
        <Tab
          title={
            <div className="flex items-center space-x-2">
              <span>Chỉ số ẩn</span>
              <Chip
                size="sm"
                variant="faded"
                color="warning"
                className="px-[0px] h-[20px]"
              >
                {data?.playerSeasonTrait?.length}
              </Chip>
            </div>
          }
        >
          <ScrollShadow hideScrollBar className="h-[300px]">
            <PlayerTraits data={data?.playerSeasonTrait}></PlayerTraits>
          </ScrollShadow>
        </Tab>
        <Tab
          title={
            <div className="flex items-center space-x-2">
              <span>Sự nghiệp câu lạc bộ</span>
              <Chip
                size="sm"
                variant="faded"
                color="warning"
                className="px-[0px] h-[20px]"
              >
                {data.playerInfo.playerTeams.length}
              </Chip>
            </div>
          }
        >
          <PlayerClubs
            data={data.playerInfo.playerTeams}
            fullName={data.playerInfo.fullName}
          ></PlayerClubs>
        </Tab>
        <Tab
          title={
            <div className="flex items-center space-x-2">
              <span>Danh sách mùa giải</span>
              <Chip
                size="sm"
                variant="faded"
                color="warning"
                className="px-[0px] h-[20px]"
              >
                {data?.relateSeason.length}
              </Chip>
            </div>
          }
        >
          <RelateSeason data={data.relateSeason} />
        </Tab>
      </Tabs>
    </div>
  );
}
