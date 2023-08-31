import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { useState } from "react";

type Favorite = {
  isFavorite?: boolean;
};
export default function Favorite(props: Favorite) {
  const { isFavorite } = props;
  return (
    <Button
      isIconOnly
      aria-label="Like"
      className=" right-0 rounded-[4px]  min-w-[30px] w-[30px] min-h-[30px] h-[30px]"
      color="success"
      variant="bordered"
    >
      <div className="w-4 h-4 flex justify-center">
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "#18C864", opacity: "0.7" }}
          width={17}
        />
      </div>
    </Button>
  );
}
