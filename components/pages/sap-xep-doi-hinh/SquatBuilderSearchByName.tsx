import { Button } from "@/components/buttons/Button";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};

const SquatBuilderSearchByName: React.FC<Props> = ({ name, setName }) => {
  const handleSeach = () => {
    console.log(`let search by ${name}`);
  };

  return (
    <div className="flex">
      <input
        type="text"
        id="searchByName"
        name="playerName"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Player Name..."
        className="p-2 p-3 mr-1 border-primary border-medium rounded-md"
        autoComplete="off"
      />
      <Button onClick={() => handleSeach()}>
        <FontAwesomeIcon width="20" icon={faMagnifyingGlass} />
        <p className="ml-1">Search</p>
      </Button>
    </div>
  );
};

export { SquatBuilderSearchByName };
