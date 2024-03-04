import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

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
  currentTabForce?: number;
  setCurrentTabForce?: (tab: number) => void;
};
export function Tabs(props: Tabs) {
  const { id, tabIndex, tabs, ariaLabel, currentTabForce, setCurrentTabForce } =
    props;

  const [currentTab, setCurrentTab] = useState(
    currentTabForce ? currentTabForce : tabIndex
  );
  useEffect(() => {
    if (currentTabForce == 1) {
      setCurrentTab(1);
    }
  }, [currentTabForce]);

  return (
    <div data-slot="base" className="w-full inline-flex flex-col shadow-md ">
      <div
        data-slot="tabList"
        className="flex h-fit gap-2 items-center scrollbar-hide bg-[#151516] pt-3"
        id={id}
        aria-label={ariaLabel}
        role="tablist"
        aria-orientation="horizontal"
      >
        {tabs.map((tab, index) => (
          <Link key={index} href="#">
            <button
              key={index}
              data-slot="tab"
              tabIndex={1}
              data-key={tab.dataKey}
              id={`${id}-tab-${tab.dataKey}`}
              aria-selected={index + 1 === currentTab}
              role="tab"
              title={tab.title}
              className="z-0 w-full px-6  flex group relative  "
              type="button"
              data-selected={index + 1 === currentTab}
              aria-controls={`${id}-tab-panel-${tab.dataKey}`}
              onClick={() => (
                setCurrentTab(index + 1),
                setCurrentTabForce ? setCurrentTabForce(0) : null
              )}
            >
              {index + 1 === currentTab && (
                <span
                  className="absolute z-0 inset-0 border-b-2 "
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
                <h3 className="text-lg font-medium text-[#c3c2c2] my-1 xss:max-mobileMiddle:text-[13px]">
                  {tab.title}
                </h3>
              </div>
            </button>
          </Link>
        ))}
      </div>
      <div className="flex h-fit gap-2 items-center flex-nowrap  scrollbar-hide">
        {tabs[currentTab - 1].content}
      </div>
    </div>
  );
}
