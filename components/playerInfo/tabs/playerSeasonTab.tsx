import { Tabs, Tab } from "@nextui-org/react";

export function PlayerSeasonTab() {
  return (
    <Tabs
      aria-label="Navbar danh sách cầu thủ FC Online"
      variant="solid"
      className="pt-6 pb-3"
      color="default"
    >
      <Tab key="player-list" title="Danh sách cầu thủ"></Tab>
      <Tab key="player-list-favorite" title="Danh sách cầu thủ yêu thích"></Tab>
    </Tabs>
  );
}
