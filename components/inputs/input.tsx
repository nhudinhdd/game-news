import clsx from "clsx";
import { ChangeEventHandler } from "react";

type Props = {
  type?: string;
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  px?: number;
  py?: number;
  placeholder: string;
  className?: string;
};

const Input: React.FC<Props> = ({
  value,
  onChange,
  px,
  py,
  placeholder,
  type,
  className,
}) => {
  return (
    <input
      type={type || "text"}
      value={value || ""}
      onChange={onChange}
      placeholder={placeholder || "Vui lòng nhập..."}
      className={clsx(
        className,
        `px-${px || 3} py-${
          py || 3
        } mr-1 border-primary border-medium rounded-md`
      )}
    />
  );
};

export { Input };
