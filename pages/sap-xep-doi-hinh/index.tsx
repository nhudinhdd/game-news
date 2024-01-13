import SquatBuilderLayout from "@/layouts/SquatBuilderLayout";
import { Tabs } from "@/components/tabs/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCircleXmark,
  faDollarSign,
  faLayerGroup,
  faList,
  faStairs,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

type TotalInfoType = {
  title: string;
  detail: number;
};

const TOTAL_INFO_CONST: TotalInfoType[] = [
  {
    title: "Tốc độ",
    detail: 0,
  },
  {
    title: "Sút",
    detail: 0,
  },
  {
    title: "Chuyền",
    detail: 0,
  },
  {
    title: "Rê bóng",
    detail: 0,
  },
  {
    title: "Phòng thủ",
    detail: 0,
  },
  {
    title: "Thể lực",
    detail: 0,
  },
];

const SQUAT_BUILDER_TABS = [
  {
    title: "Đội hình",
    dataKey: "squat-builder",
    content: (
      <div className="flex justify-between w-full items-center flex-col gap-3">
        <div className="flex justify-between w-full items-center">
          <h1 className="text-2xl font-bold">FC Online | Sắp xếp đội hình</h1>
          <div className="cursor-pointer flex gap-2 items-center bg-opacity-25 bg-black px-3 py-2 rounded-md">
            <FontAwesomeIcon icon={faCircleXmark} width="12" />
            <p className="text-sm">Đặt lại</p>
          </div>
        </div>
        <div className="flex justify-between w-full items-center gap-3">
          <div className="flex">
            {TOTAL_INFO_CONST.map((total, index) => (
              <>
                <div
                  key={index}
                  className="flex  px-2 py-2 gap-3 flex-col bg-opacity-25 bg-black text-center bg-"
                >
                  <h4>{total.title}</h4>
                  <p className="text-2xl font-bold">{total.detail}</p>
                  <span className="w-full h-1 bg-primary"></span>
                </div>
                {index !== TOTAL_INFO_CONST.length - 1 && (
                  <span className="w-px"></span>
                )}
              </>
            ))}
          </div>
          <div className="flex">
            <FontAwesomeIcon
              icon={faAngleRight}
              width="14"
              className="animate-[light-up_1s_infinite_linear]"
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              width="14"
              className="animate-[light-up_1s_infinite_linear]"
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              width="14"
              className="animate-[light-up_1s_infinite_linear]"
            />
          </div>
          <div className="flex">
            <div className="flex  px-2 py-2 gap-3 flex-col bg-opacity-25 bg-black text-center bg-">
              <h4>Điểm vị trí</h4>
              <p className="text-2xl font-bold">0</p>
              <span className="w-full h-1 bg-yellow-500"></span>
            </div>
          </div>
        </div>
        <div className="flex w-full px-2 py-2 gap-3 bg-opacity-25 bg-black text-center justify-between flex-nowrap">
          <div className="flex gap-2">
            <div className="cursor-pointer flex gap-2 items-center bg-opacity-25 bg-black px-3 py-2 rounded-md">
              <FontAwesomeIcon icon={faList} width="12" />
              <p className="text-sm">Chọn đội hình</p>
            </div>
            <div className="cursor-pointer flex gap-2 items-center bg-opacity-25 bg-black px-3 py-2 rounded-md">
              <FontAwesomeIcon icon={faLayerGroup} width="12" />
              <p className="text-sm">Chọn Level</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 flex-nowrap items-end">
            <div className="flex gap-3 flex-nowrap items-end">
              <div className="flex">
                <h4 className="text-lg font-bold leading-0">Lương: </h4>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-3xl font-bold">0</p>
                <p className="text-3xl font-bold">/</p>
                <p className="text-3xl font-bold text-red-700">250</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Team color",
    dataKey: "team-color",
    content: <>Team color</>,
  },
];

export default function SquatBuilderIndex() {
  return (
    <SquatBuilderLayout>
      <Tabs
        id="react-aria7602836567-:r4n:"
        tabIndex={1}
        tabs={SQUAT_BUILDER_TABS}
        ariaLabel="Navbar sắp xếp đội hình"
      />
    </SquatBuilderLayout>
  );
}

// export async function getStaticProps() {
//   const data = await axiosClient
//     .get<MetaDataList<SquatBuilderRes>>(PLAYER_SEASON_URL)
//     .then((res: any) => res.data);
//   return { props: { data } };
// }
