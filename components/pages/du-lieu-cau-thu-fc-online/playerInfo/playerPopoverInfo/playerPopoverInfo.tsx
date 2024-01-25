import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import Image from "next/image";

type PlayerPopoverInfoProps = {
  avatar: string;
  altAvatar: string;
};
export function PlayerPopoverInfo(props: PlayerPopoverInfoProps) {
  const { avatar, altAvatar } = props;
  return (
    <Popover showArrow placement="bottom">
      <PopoverTrigger>
        <Image src={avatar} alt={altAvatar} width={45} height={10}></Image>
      </PopoverTrigger>
      <PopoverContent className="p-1">test</PopoverContent>
    </Popover>
  );
}
