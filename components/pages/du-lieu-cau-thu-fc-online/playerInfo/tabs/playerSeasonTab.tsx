import Link from "next/link";
import { useState } from "react";

type PlayerSeasonTab = {
  tabNumber: number;
};
export function PlayerSeasonTab(props: PlayerSeasonTab) {
  const { tabNumber } = props;
  const [tab, setTab] = useState(tabNumber);
  return (
    <div data-slot="base" className="inline-flex pt-6 pb-3">
      <div
        data-slot="tabList"
        className="flex p-1 h-fit gap-2 items-center flex-nowrap overflow-x-scroll scrollbar-hide"
        id="react-aria7602836567-:r4n:"
        aria-label="Danh sách cầu thủ FC Online"
        role="tablist"
        aria-orientation="horizontal"
      >
        <Link href="/du-lieu-cau-thu-fc-online">
          <button
            data-slot="tab"
            tabIndex={1}
            data-key="player-list"
            id="react-aria7602836567-:r4n:-tab-player-list"
            aria-selected="true"
            role="tab"
            title="Danh sách cầu thủ"
            className="z-0 w-full  py-1 flex group relative justify-center items-center cursor-pointer transition-opacity tap-highlight-transparent
            data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-30 data-[hover-unselected=true]:opacity-disabled outline-none data-[focus-visible=true]:z-10 
            data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 h-8 text-small pl-10"
            type="button"
            data-selected="true"
            aria-controls="react-aria7602836567-:r4n:-tabpanel-player-list"
            onClick={() => setTab(1)}
          >
            {1 == tab && (
              <span
                className="absolute z-0 inset-0 bg-background dark:bg-default shadow-small"
                data-slot="cursor"
                style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
              ></span>
            )}
            <div
              className="relative z-10 whitespace-nowrap transition-colors text-default-500 group-data-[selected=true]:text-default-foreground "
              data-slot="tabContent"
            >
              Danh sách cầu thủ
            </div>
          </button>
        </Link>

        <Link href="/du-lieu-cau-thu-fc-online/danh-sach-cau-thu-yeu-thich">
          <button
            data-slot="tab"
            tabIndex={2}
            data-key="player-list-favorite"
            id="react-aria7602836567-:r4n:-tab-player-list-favorite"
            aria-selected="false"
            role="tab"
            title="Danh sách cầu thủ yêu thích"
            className="z-0 w-full
            py-1 flex group relative justify-center items-center cursor-pointer transition-opacity 
            tap-highlight-transparent data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-30 
            data-[hover-unselected=true]:opacity-disabled outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 
            data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 h-8 text-small px-6"
            type="button"
            onClick={() => setTab(2)}
          >
            {2 == tab && (
              <span
                className="absolute z-0 inset-0 bg-background dark:bg-default shadow-small"
                data-slot="cursor"
                style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
              ></span>
            )}
            <div
              className="relative z-10 whitespace-nowrap transition-colors  group-data-[selected=true]:text-default-foreground"
              data-slot="tabContent"
            >
              Danh sách cầu thủ yêu thích
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
