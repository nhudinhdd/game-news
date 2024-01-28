import { getColorBorderPosition } from "@/lib/common";
import clsx from "clsx";

type ContainerPosition = {
  position: string;
};

export default function ContainerPosition(props: ContainerPosition) {
  const { position } = props;
  return (
    <div
      className={clsx(
        "border-l-5 bg-[#30312f]   text-[14px] font-semibold cursor-pointer xss:max-mobileMiddle:!w-[40px]  xss:max-mobileMiddle:pr-0",
        getColorBorderPosition(position),
        "position_th "
      )}
    >
      {position}
    </div>
  );
}
