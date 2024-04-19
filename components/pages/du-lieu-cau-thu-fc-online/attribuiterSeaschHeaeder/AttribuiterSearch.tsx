import { Select, SelectItem, Avatar } from "@nextui-org/react";
import SelectBox from "../contryHeader/SelectBox";
import useTrait from "@/lib/useTrait";

export default function AttribuiteSearch() {
  const { data = [] } = useTrait();
  return (
    <div className="flex flex-row text-white  border-b-1 border-[#989696] bg-black bg-opacity-70 gap-10 xss:max-laptop:gap-0">
      <div className="flex flex-row gap-3">
        <div className="bg-[#1B1B1C]  w-[80px] text-center flex flex-col justify-center xss:max-mobileMiddle:w-[67px]   py-6">
          <span>Chỉ số ẩn</span>
        </div>
        <div className="w-[170px] flex flex-col justify-center">
          {/* <Select
            radius="sm"
            className="max-w-xs dark rounded-sm"
            labelPlacement="outside"
            //   selectorIcon={<SelectorIcon />}
            scrollShadowProps={{
              isEnabled: false,
            }}
          >
            {data.map((e) => (
              <SelectItem
                key={e.name}
                startContent={
                  <Avatar alt="Argentina" className="w-6 h-6" src={e.logo} />
                }
              >
                {e.name}
              </SelectItem>
            ))}
          </Select> */}

          <Select
            items={data}
            radius="sm"
            className="w-[190px] dark rounded-sm"
            labelPlacement="outside"
            //   selectorIcon={<SelectorIcon />}
            scrollShadowProps={{
              isEnabled: false,
            }}
            renderValue={(items) => {
              return items.map((item) => (
                <div key={item.key} className="flex items-center gap-2">
                  <Avatar
                    alt={item.data?.name}
                    className=""
                    size="sm"
                    src={item.data?.logo}
                  />
                  <div className="flex flex-col w-[100px]">
                    <span className="truncate">{item.data?.name}</span>
                    {/* <span className="text-default-500 text-tiny">
                      ({item.data?.name})
                    </span> */}
                  </div>
                </div>
              ));
            }}
          >
            {(e) => (
              <SelectItem key={e.name} textValue={e.name}>
                <div className="flex gap-2 items-center">
                  <Avatar
                    alt={e.name}
                    className="w-6 h-6"
                    size="sm"
                    src={e.logo}
                  />
                  <div className="w-[10px] ">
                    <span className="text-small truncate">{e.name}</span>
                  </div>
                </div>
              </SelectItem>
            )}
          </Select>
        </div>
      </div>

      <div className="flex flex-row gap-3">
        <div className="bg-[#1B1B1C]  w-[80px] text-center flex flex-col justify-center xss:max-mobileMiddle:w-[67px]   py-6">
          <span>Chân trái</span>
        </div>
        <div className="w-[100px] flex flex-col justify-center">
          <Select
            radius="sm"
            className="max-w-xs dark rounded-sm"
            labelPlacement="outside"
            //   selectorIcon={<SelectorIcon />}
            scrollShadowProps={{
              isEnabled: false,
            }}
          >
            <SelectItem key={1}>1</SelectItem>
            <SelectItem key={2}>2</SelectItem>
            <SelectItem key={3}>3</SelectItem>
            <SelectItem key={4}>3</SelectItem>
            <SelectItem key={5}>5</SelectItem>
          </Select>
        </div>
      </div>

      <div className="flex flex-row gap-3">
        <div className="bg-[#1B1B1C]  w-[80px] text-center flex flex-col justify-center xss:max-mobileMiddle:w-[67px]   py-6">
          <span>Chân phải</span>
        </div>
        <div className="w-[100px] flex flex-col justify-center">
          <Select
            radius="sm"
            className="max-w-xs dark"
            labelPlacement="outside"
            //   selectorIcon={<SelectorIcon />}
            scrollShadowProps={{
              isEnabled: false,
            }}
          >
            <SelectItem key={1}>1</SelectItem>
            <SelectItem key={2}>2</SelectItem>
            <SelectItem key={3}>3</SelectItem>
            <SelectItem key={4}>3</SelectItem>
            <SelectItem key={5}>5</SelectItem>
          </Select>
        </div>
      </div>

      <div className="flex flex-row gap-3">
        <div className="bg-[#1B1B1C]  w-[80px] text-center flex flex-col justify-center xss:max-mobileMiddle:w-[67px]   py-6">
          <span>Thể hình</span>
        </div>
        <div className="w-[140px] flex flex-col justify-center">
          <Select
            radius="sm"
            className="max-w-xs dark rounded-sm"
            labelPlacement="outside"
            //   selectorIcon={<SelectorIcon />}
            scrollShadowProps={{
              isEnabled: false,
            }}
          >
            <SelectItem key={"Nhỏ"}>Nhỏ</SelectItem>
            <SelectItem key={"Nhỏ(special)"}>Nhỏ(special)</SelectItem>
            <SelectItem key={"TB"}>TB</SelectItem>
            <SelectItem key={"TB(special)"}>TB(special)</SelectItem>
            <SelectItem key={"To"}>To</SelectItem>
            <SelectItem key={"To(special)"}>To(special)</SelectItem>
          </Select>
        </div>
      </div>
    </div>
  );
}
