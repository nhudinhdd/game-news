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
        "postion_detail font-semibold",
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
