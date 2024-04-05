import { Button } from "@/components/buttons/Button";
import StarSkill from "@/components/starSkill/StarSkill";
import { PlayerSeasonRes } from "@/model/player/player";
import Image from "next/image";

type Props = {
  data: PlayerSeasonRes[];
  fieldCard: any;
  setFieldCard: any;
  pos: any;
  onClose: () => void;
};

const SquatBuilderSearchResult: React.FC<Props> = ({ data, fieldCard, setFieldCard, pos, onClose }) => {
  console.log(data);
  const changePlayer = (player: any, item: any) => {
    const props = player["typePlayer"];
    const arrType = fieldCard[props];
    const eleIndex = arrType.findIndex((ele: {pos: string}) => ele["pos"] === player["pos"]);
    arrType[eleIndex]["info"] = item;
    setFieldCard({...fieldCard, [props]: arrType});
    onClose();
  }

  return (
    <div>
      {data?.map((item, index) => (
        <div key={index} className="flex">
          <Image
            alt={item?.altAvatar}
            src={item?.avatar}
            width={45}
            height={45}
          />
          {item?.playerInfoRes.fullName}
          <Image
            alt={item?.seasonRes?.altLogoSeason}
            src={item?.seasonRes?.logo}
            width={45}
            height={24}
          />
          {Object.keys(item?.positionOvr).map((pos) => (
            <div key={pos}>{pos}</div>
          ))}
          {/* <Image
            alt={item?.seasonRes?.altLogoSeason}
            src={item?.seasonRes?.bigLogo}
            width={45}
            height={24}
          /> */}
          {item.salary}
          {item.ovr}
          {item.playerMainPosition}
          <StarSkill numberSkill={Number(item?.skill)}></StarSkill>
          <Button onClick={() => changePlayer(pos, item)} className="bg-green-500">Add</Button>
        </div>
      ))}
    </div>
  );
};

export { SquatBuilderSearchResult };
