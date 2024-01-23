import { useState } from "react";

type SelectProps = {
  label: React.ReactNode;
  option: React.ReactNode;
};

const Select: React.FC<SelectProps> = ({ label, option }) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <div className="relative" onClick={() => setIsShow(!isShow)}>
      <div>{label}</div>
      {isShow && (
        <div
          className="absolute top-full left-0 p-3 cursor-pointer flex items-center bg-opacity-90 bg-black rounded-md"
          onClick={(e) => e.stopPropagation()}
        >
          {option}
        </div>
      )}
    </div>
  );
};

export { Select };
