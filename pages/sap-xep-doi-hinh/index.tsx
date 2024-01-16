import SquatBuilderLayout from "@/layouts/SquatBuilderLayout";
import { Tabs } from "@/components/tabs/tabs";
import { SquatBuilderView } from "@/components/pages/sap-xep-doi-hinh/SquatBuilderView";

const SQUAT_BUILDER_TABS = [
  {
    title: "Đội hình",
    dataKey: "squat-builder",
    content: <SquatBuilderView />,
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
