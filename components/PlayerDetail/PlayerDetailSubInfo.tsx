import { PlayerSeasonDetailRes } from "@/model/player/player";
import { PlayerSeasonTraitRes } from "@/model/player/playerSeasonTrait";
import {
  Card,
  CardBody,
  Chip,
  ScrollShadow,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/react";
import Image from "next/image";
import { RelateSeason } from "./related/relateSeason";

type PlayerStatistic = {
  data: PlayerSeasonDetailRes;
};
export default function PlayerDetailSubInfo(props: PlayerStatistic) {
  const { data } = props;
  return (
    <div className="pl-4 w-[750px]">
      <Tabs aria-label="Dynamic tabs" variant="underlined" color="warning">
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
          <ScrollShadow hideScrollBar className="w-[300px] h-[300px]">
            <Listbox variant="flat" aria-label="Danh sách chỉ số ẩn">
              {data?.playerSeasonTrait?.map((d) => (
                <ListboxItem
                  key={d.psTraitID}
                  description={d.trait.description}
                  startContent={
                    <Image
                      src={d.trait.logo}
                      width={35}
                      height={24}
                      alt={d.trait.altLogo}
                      className=""
                    ></Image>
                  }
                  variant="light"
                >
                  <span className="text-base">{d.trait.name}</span>
                </ListboxItem>
              ))}
            </Listbox>
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
          <Listbox
            variant="flat"
            aria-label={"Sự nghiệp câu lạc bổ của "
              .concat(data.playerInfo.firstName)
              .concat(" ")
              .concat(data.playerInfo.lastName)}
          >
            {data.playerInfo.playerTeams.map((i) => (
              <ListboxItem
                key={i.playerTeamID}
                startContent={
                  <Image
                    src={i.teamRes.teamLogo}
                    width={30}
                    height={45}
                    alt={i.teamRes.altLogo}
                    className="mr-1"
                  ></Image>
                }
                variant="light"
              >
                <div className="flex flex-col gap-1">
                  <span>{i.teamRes.teamName}</span>
                  <div className="">
                    <span className="text-tiny  mr-1">{i.startYear}</span>
                    <span className="justify-items-center mr-1">-</span>
                    <span className="text-tiny">{i.endYear}</span>
                  </div>
                </div>
                <span className="text-base"></span>
              </ListboxItem>
            ))}
          </Listbox>
        </Tab>
        <Tab
          title={
            <div className="flex items-center space-x-2">
              <span>Danh sách các mùa</span>
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
        {/* <Tab title="Thông tin cầu thủ">
          <Card>
            <CardBody>{data.playerInfo?.playerStory}</CardBody>
          </Card>
        </Tab> */}
      </Tabs>
    </div>
  );
}
