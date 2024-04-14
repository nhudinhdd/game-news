import { Tabs } from "@/components/tabs/tabs";
import { SquatBuilderView } from "@/components/pages/sap-xep-doi-hinh/SquatBuilderView";
import DefaultLayout from "@/layouts/default";
import SquatBuilderLayout from "@/layouts/SquatBuilderLayout";

const SQUAT_BUILDER_TABS = [
  {
    title: "Đội hình",
    dataKey: "squat-builder",
    content: <SquatBuilderView />,
  },
];

export default function SquatBuilderIndex() {
  return (
    <div>
      <SquatBuilderLayout>
        <SquatBuilderView></SquatBuilderView>
      </SquatBuilderLayout>
    </div>
  );
}
