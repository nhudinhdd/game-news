import clsx from "clsx";
import { useState } from "react";
import style from "../styles/player.module.css";
import DefaultLayout from "./default";
export default function PlayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isShowFilter, setIsShowFilter] = useState(false);
  const setFilterState = () => {
    setIsShowFilter(!isShowFilter);
  };

  return (
    <DefaultLayout>
      <div
        className={clsx(
          "relative bg-overlay/90 backdrop-opacity-disabled z-30",
          style.background
        )}
      >
        <div
          className={clsx(
            style.overlay,
            "relative items-center justify-center flex flex-col mx-3 my-8"
          )}
        >
          <div className="flex flex-col gap-3 min-h-screen xss:max-mobileMiddle:px-0 mobile:max-laptop:px-0  mobileMiddle:max-mobile:px-0 px-3 py-6">
            <div className="">{children}</div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
