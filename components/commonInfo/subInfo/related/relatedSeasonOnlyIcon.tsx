import { PlayerSeasonRes } from "@/model/player/player";
import { ScrollShadow } from "@nextui-org/react";
import { clsx } from "clsx";
import Image from "next/image";

type RelatedSeasonOnlyIcon = {
  data: Array<PlayerSeasonRes> | undefined;
  pageNumber?: number;
  setPlayerId: (id: string) => void;
};

export default function RelatedSeasonOnlyIcon(props: RelatedSeasonOnlyIcon) {
  const { data, pageNumber, setPlayerId } = props;
  if (!data) return null;
  return (
    <ScrollShadow orientation="horizontal" className="max-w-full mt-2 px-2">
      <div
        className={clsx(
          pageNumber === 2 ? "flex flex-row-reverse" : "flex flex-row",
          " gap-2"
        )}
      >
        {data.map(
          (d) =>
            d.seasonRes.logo && (
              <Image
                key={d.playerSeasonID}
                src={d.seasonRes.logo}
                width={25}
                height={25}
                alt={d.seasonRes.altBackgroundLogo}
                className="cursor-pointer"
                onClick={() => setPlayerId(d.playerSeasonID)}
              ></Image>
            )
        )}
      </div>
    </ScrollShadow>
  );
}
