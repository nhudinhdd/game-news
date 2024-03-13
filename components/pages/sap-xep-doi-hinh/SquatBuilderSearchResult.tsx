import StarSkill from "@/components/starSkill/StarSkill";
import { PlayerSeasonRes } from "@/model/player/player";
import Image from "next/image";

type Props = {
  data: PlayerSeasonRes[];
};

const SquatBuilderSearchResult: React.FC<Props> = ({ data }) => {
  console.log(data);

  return (
    <div>
      {data?.map((item, index) => (
        <div key={index} className="flex">
          <Image
            alt={item?.altAvatar}
            src={item.avatar}
            width={45}
            height={45}
          />
          {item?.playerInfoRes.fullName}
          <Image
            alt={item.seasonRes.altLogoSeason}
            src={item.seasonRes.logo}
            width={45}
            height={24}
          />
          {Object.keys(item?.positionOvr).map((pos) => (
            <div key={pos}>{pos}</div>
          ))}
          <Image
            alt={item.seasonRes.altLogoSeason}
            src={item.seasonRes.bigLogo}
            width={45}
            height={24}
          />
          {item.salary}
          {item.ovr}
          {item.playerMainPosition}
          <StarSkill numberSkill={Number(item?.skill)}></StarSkill>
        </div>
      ))}
    </div>
  );
};

export { SquatBuilderSearchResult };
