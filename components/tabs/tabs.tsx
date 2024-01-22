import Link from "next/link";
import { ReactNode, useState } from "react";

type Tab = {
  title: string;
  dataKey: string;
  content: ReactNode;
  href?: string;
};

type Tabs = {
  id: string;
  tabIndex: number;
  ariaLabel: string;
  tabs: Tab[];
};
export function Tabs(props: Tabs) {
  const { id, tabIndex, tabs, ariaLabel } = props;
  const [currentTab, setCurrentTab] = useState(tabIndex);
  return (
    <div
      data-slot="base"
      className="w-full inline-flex mt-6 mb-3 flex-col shadow-md"
    >
      <div
        data-slot="tabList"
        className="flex p-2 h-fit gap-2 items-center flex-nowrap overflow-x-scroll scrollbar-hide bg-default-200 rounded-t-md"
        id={id}
        aria-label={ariaLabel}
        role="tablist"
        aria-orientation="horizontal"
      >
        {tabs.map((tab, index) =>
          tab.href ? (
            <Link key={index} href={tab.href}>
              <button
                key={index}
                data-slot="tab"
                tabIndex={1}
                data-key={tab.dataKey}
                id={`${id}-tab-${tab.dataKey}`}
                aria-selected={index + 1 === currentTab}
                role="tab"
                title={tab.title}
                className="z-0 w-full px-3 py-2 flex group relative justify-center items-center cursor-pointer transition-opacity tap-highlight-transparent data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-30 data-[hover-unselected=true]:opacity-disabled outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 h-8 text-small rounded-small"
                type="button"
                data-selected={index + 1 === currentTab}
                aria-controls={`${id}-tab-panel-${tab.dataKey}`}
                onClick={() => setCurrentTab(index + 1)}
              >
                {index + 1 === currentTab && (
                  <span
                    className="absolute z-0 inset-0 rounded-small bg-background dark:bg-default shadow-sm"
                    data-slot="cursor"
                    style={{
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    }}
                  ></span>
                )}
                <div
                  className="relative z-10 whitespace-nowrap transition-colors text-default-500 group-data-[selected=true]:text-default-foreground"
                  data-slot="tabContent"
                >
                  <h3 className="text-lg font-bold">{tab.title}</h3>
                </div>
              </button>
            </Link>
          ) : (
            <button
              key={index}
              data-slot="tab"
              tabIndex={1}
              data-key={tab.dataKey}
              id={`${id}-tab-${tab.dataKey}`}
              aria-selected={index + 1 === currentTab}
              role="tab"
              title={tab.title}
              className="z-0 w-full px-3 py-2 flex group relative justify-center items-center cursor-pointer transition-opacity tap-highlight-transparent data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-30 data-[hover-unselected=true]:opacity-disabled outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 h-8 text-small rounded-small"
              type="button"
              data-selected={index + 1 === currentTab}
              aria-controls={`${id}-tab-panel-${tab.dataKey}`}
              onClick={() => setCurrentTab(index + 1)}
            >
              {index + 1 === currentTab && (
                <span
                  className="absolute z-0 inset-0 rounded-small bg-background dark:bg-default shadow-sm"
                  data-slot="cursor"
                  style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
                ></span>
              )}
              <div
                className="relative z-10 whitespace-nowrap transition-colors text-default-500 group-data-[selected=true]:text-default-foreground"
                data-slot="tabContent"
              >
                <h3 className="text-lg font-bold">{tab.title}</h3>
              </div>
            </button>
          )
        )}
      </div>
      <div className="flex p-4 h-fit gap-2 items-center flex-nowrap overflow-x-scroll scrollbar-hide bg-default-200 rounded-b-md">
        {tabs[currentTab - 1].content}
      </div>
    </div>
  );
}
