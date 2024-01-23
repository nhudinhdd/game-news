import { Dispatch, ReactNode, SetStateAction, useState } from "react";

type Popup = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};

export function Popup(props: Popup) {
  const { children, setIsOpen } = props;
  return (
    <div
      data-slot="base"
      className="w-full flex fixed h-screen items-center justify-center overflow-hidden bg-black bg-opacity-40 top-0 left-0 z-50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="flex flex-col p-4 h-auto w-auto gap-2 items-center flex-nowrap overflow-x-scroll scrollbar-hide bg-white rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
