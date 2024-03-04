import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

type PlayerPopoverInfoProps = {
  avatar: string;
  altAvatar: string;
};
export function PlayerPopoverInfo(props: PlayerPopoverInfoProps) {
  const { avatar, altAvatar } = props;
  return (
    <Popover showArrow placement="bottom">
      <PopoverTrigger></PopoverTrigger>
      <PopoverContent className="p-1">test</PopoverContent>
    </Popover>
  );
}
