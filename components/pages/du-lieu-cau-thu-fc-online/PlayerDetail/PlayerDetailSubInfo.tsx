import PlayerClubs from "@/components/commonInfo/subInfo/playerClubs";
import PlayerTraits from "@/components/commonInfo/subInfo/playerTraits";
import { RelateSeason } from "@/components/commonInfo/subInfo/related/relateSeason";
import { PlayerSeasonDetailRes } from "@/model/player/player";
import { Chip, ScrollShadow, Tab, Tabs } from "@nextui-org/react";
type PlayerStatistic = {
  data: PlayerSeasonDetailRes;
};
export default function PlayerDetailSubInfo(props: PlayerStatistic) {
  const { data } = props;
  return (
    <div className="pl-4 xss:max-mobile:pl-0 ">
      <Tabs
        aria-label="Dynamic tabs"
        variant="underlined"
        className="xss:max-mobile:w-[250px] overflow-x-auto"
      >
        <Tab
          title={
            <div className="flex items-center space-x-2">
              <span className="text-[#161616]  font-sans font-medium ">
                Chỉ số ẩn
              </span>
              <Chip
                size="sm"
                variant="bordered"
                color="default"
                className="px-[0px] h-[20px]"
              >
                {data?.playerSeasonTrait?.length}
              </Chip>
            </div>
          }
          textValue={
            "Chỉ số ẩn của " +
            data.playerInfo.fullName +
            " FC online | FIFA online 4"
          }
        >
          <PlayerTraits data={data?.playerSeasonTrait}></PlayerTraits>
        </Tab>
        <Tab
          title={
            <div className="flex items-center space-x-2">
              <span className="text-[#161616] font-[550]">
                Sự nghiệp câu lạc bộ
              </span>
              <Chip size="sm" variant="faded" className="px-[0px] h-[20px]">
                {data?.playerInfo?.playerTeams.length}
              </Chip>
            </div>
          }
          textValue={
            "Sự nghiệp câu lạc bộ của " +
            data.playerInfo.fullName +
            " FC online | FIFA online 4"
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
              <span className="text-[#161616] font-[550]">
                Danh sách mùa giải
              </span>
              <Chip size="sm" variant="faded" className="px-[0px] h-[20px]">
                {data?.relateSeason?.length}
              </Chip>
            </div>
          }
          textValue={
            "Danh sách mùa giải của " +
            data.playerInfo.fullName +
            " FC online | FIFA online 4"
          }
        >
          <RelateSeason data={data?.relateSeason} />
        </Tab>
        <Tab title="Bình luận">
          <div
            className="fb-comments"
            data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
            data-width="200"
            data-numposts="5"
          ></div>
        </Tab>
      </Tabs>
    </div>
  );
}
