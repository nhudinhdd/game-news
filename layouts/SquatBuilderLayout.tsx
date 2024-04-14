import clsx from "clsx";
import { useState } from "react";
import style from "../styles/player.module.css";
import DefaultLayout from "./default";
import { HeaderPlayerInfo } from "@/components/pages/du-lieu-cau-thu-fc-online/playerInfo/playerInfoHeader";
export default function SquatBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DefaultLayout>
      <div
        className={clsx(
          "relative bg-overlay/50 backdrop-opacity-disabled z-50",
          style.background
        )}
      >
        <div
          className={clsx(
            style.overlay,
            "relative items-center justify-center flex"
          )}
        >
          <div className=" flex-col gap-3 min-h-screen flex px-3 py-8">
            <div className="mt-3">{children}</div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
