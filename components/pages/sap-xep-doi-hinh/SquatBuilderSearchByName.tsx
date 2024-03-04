import { Button } from "@/components/buttons/Button";
import { Input } from "@/components/inputs/input";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};

const SquatBuilderSearchByName: React.FC<Props> = ({ name, setName }) => {
  const handleSeach = () => {};

  return (
    <div className="flex">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nhập tên cầu thủ..."
      />
      <Button onClick={() => handleSeach()}>
        <FontAwesomeIcon width="20" icon={faMagnifyingGlass} />
        <p className="ml-1">Tìm kiếm</p>
      </Button>
    </div>
  );
};

export { SquatBuilderSearchByName };
