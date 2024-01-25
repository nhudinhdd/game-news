import { ReactNode } from "react";

type Props = {
  onClick: () => void;
  children: ReactNode;
};

const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button
      className="bg-primary rounded-md font-bold text-white flex text-center py-2 px-3 items-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
