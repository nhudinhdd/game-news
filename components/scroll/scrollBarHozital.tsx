import { data } from "autoprefixer";
import clsx from "clsx";

type ScrollBar = {
  children: React.ReactNode;
  withDiv: string;
};

export default function ScrollBarHozit(props: ScrollBar) {
  const { children, withDiv } = props;
  return (
    <div
      className={clsx(
        "w-[" + withDiv + "], overflow-x-hidden hover:overflow-x-auto"
      )}
    >
      {children}
    </div>
  );
}
