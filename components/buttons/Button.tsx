import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  onClick?: () => void;
  children: ReactNode;
  h?: number;
};

const Button: React.FC<Props> = ({ onClick, children, h }) => {
  return (
    <button
      className={clsx(
        "bg-primary rounded-md font-[600] text-white flex text-center py-2 px-3 items-center h-full",
        h ? "h-[" + h + "]" : ""
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
