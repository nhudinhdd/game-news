import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  px?: number;
  py?: number;
};

const Button: React.FC<Props> = ({ onClick, children, className, px, py }) => {
  return (
    <button
      className={clsx(
        className,
        `bg-primary rounded-md font-bold text-white flex text-center py-${
          py || 3
        } px-${px || 3} items-center`
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
