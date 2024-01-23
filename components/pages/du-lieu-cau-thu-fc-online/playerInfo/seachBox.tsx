import usePlayerInfo from "@/lib/usePlayerInfo";
import { useState } from "react";

type SeachBoxProps = {
  setUserName?: (name: string) => void;
};

export function SeachBox(props: SeachBoxProps) {
  const { data } = usePlayerInfo();
  const [nameSearch, setNameSearch] = useState("");
  // const handleChange = (event) => {
  //   setNameSearch(event.target.value);
  // };
  return (
    <div className="inline-block">
      <input
        placeholder="Nhập tên cầu thủ"
        className="bg-transparent border-none outline-0 text-white ml-2"
        list="data"
        // onChange={handleChange}
      ></input>
      {nameSearch.trim() !== "" && (
        <div className="w-64 absolute bg-bg1C1F26 left-0 border-white border-2 rounded min-h-80 top-16 cursor-pointer text-white">
          <div className="pb-4 pt-4 flex flex-col gap-2">
            {data
              ?.filter((item) =>
                item.fullName
                  .concat(" ")
                  .concat(item.fullName)
                  .toLocaleUpperCase()
                  .includes(nameSearch.toUpperCase())
              )
              .map((item) => (
                <p
                  className=" pl-14 inline-block h-10 align-middle border-b-2 border-b-585858"
                  key={item.playerID}
                >
                  {item.fullName.charAt(0).concat(".").concat(item.fullName)}
                </p>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
