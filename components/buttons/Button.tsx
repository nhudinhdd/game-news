import { MouseEventHandler, ReactNode } from "react";

const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) => {
  return (
    <button
      className="bg-primary rounded-md font-bold text-white flex text-center p-2 p-3 items-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
