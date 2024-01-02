import clsx from "clsx";
import Image from "next/image";

type FavoriteFoot = {
  favoriteFoot: number;
  leftFoot: number;
  rightFoot: number;
};

export default function FavoriteFoot(props: FavoriteFoot) {
  const { favoriteFoot, leftFoot, rightFoot } = props;

  return (
    <div className="flex flex-row gap-1">
      <div className="relative flex justify-center">
        <span className="z-10 absolute inline-block place-self-center  text-white">
          {leftFoot}
        </span>
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABbAQMAAAA2mCUGAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA9JREFUeNpjYBgFo2CAAAACfQAB7PAeSwAAAABJRU5ErkJggg=="
          alt="Picture of the author"
          width={16}
          height={15}
          className="bg-[url('/assets/4364840.png')] bg-cover"
          style={{
            backgroundPosition: clsx(
              favoriteFoot == 2 ? "0 33.333333%" : "ssss"
            ),
          }}
        />
      </div>
      <div className="relative flex justify-center ">
        <span className="z-10 absolute inline-block place-self-center text-white">
          {rightFoot}
        </span>

        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABbAQMAAAA2mCUGAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA9JREFUeNpjYBgFo2CAAAACfQAB7PAeSwAAAABJRU5ErkJggg=="
          alt="Picture of the author"
          width={16}
          height={14}
          className="bg-[url('/assets/4364840.png')] bg-cover"
          style={{
            backgroundPosition: clsx(
              favoriteFoot == 1 ? "0 100%" : "0 66.666667%"
            ),
          }}
        />
      </div>
    </div>
  );
}
