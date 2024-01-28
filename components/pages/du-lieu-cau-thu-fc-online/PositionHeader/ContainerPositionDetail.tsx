import clsx from "clsx";

type ContainerPositionDetail = {
  value: string;
  isSelected: boolean;
  updatePosition: (seasonId: string) => void;
};

export default function ContainerPositionDetail(
  props: ContainerPositionDetail
) {
  const { value, isSelected, updatePosition } = props;
  return (
    <div
      className={clsx(
        "postion_detail font-semibold  w-[125px] h-[33px] px-[15px] text-[14px] middeLaptop:max-laptop:w-[80px]",
        "mobile:max-middeLaptop:w-[60px] mobileMiddle:max-mobile:w-[50px] mobileMiddle:max-mobile:px-2 xss:max-mobile:text-[12px]",
        "xss:max-mobileMiddle:w-[45px] xss:max-mobileMiddle:px-[5px]",
        isSelected
          ? "bg-slate-100 text-[#3d3d3d]"
          : "bg-[#323131] opacity-70 text-[#8b8f99]"
      )}
      onClick={() =>
        updatePosition(
          value.split(":").length > 1 ? value.split(":")[1].trim() : value
        )
      }
    >
      {value}
    </div>
  );
}
