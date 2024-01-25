import { useState } from "react";
import { SquatBuilderSearchByName } from "./SquatBuilderSearchByName";
import { SquatBuilderSearchByPosition } from "./SquatBuilderSearchByPosition";
import { SquatBuilderSearchBySeason } from "./SquatBuilderSearchBySeason";
import { SquatBuilderSearchResult } from "./SquatBuilderSearchResult";

const SquatBuilderSearch = () => {
  const [name, setName] = useState<string>("");
  const [data, setData] = useState<[]>([]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">FC Online | Tìm kiếm cầu thủ</h1>
      <SquatBuilderSearchByName name={name} setName={setName} />
      <SquatBuilderSearchByPosition />
      <SquatBuilderSearchBySeason />
      {data && <SquatBuilderSearchResult data={data} />}
    </div>
  );
};

export { SquatBuilderSearch };
