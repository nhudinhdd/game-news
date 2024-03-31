import SelectBox from "../contryHeader/SelectBox";

export default function AttribuiteSearch() {
  return (
    <div className="flex flex-row text-white  border-b-1 border-[#989696] bg-black bg-opacity-70 gap-10 xss:max-laptop:gap-0">
      <div className="flex flex-row gap-3">
        <div className="bg-[#1B1B1C]  w-[80px] text-center flex flex-col justify-center xss:max-mobileMiddle:w-[67px]   py-6">
          <span>Chỉ số ẩn</span>
        </div>
        <div className="w-[150px] flex flex-col justify-center">
          <SelectBox></SelectBox>
        </div>
      </div>

      <div className="flex flex-row gap-3">
        <div className="bg-[#1B1B1C]  w-[80px] text-center flex flex-col justify-center xss:max-mobileMiddle:w-[67px]   py-6">
          <span>Chân trái</span>
        </div>
        <div className="w-[100px] flex flex-col justify-center">
          <SelectBox></SelectBox>
        </div>
      </div>

      <div className="flex flex-row gap-3">
        <div className="bg-[#1B1B1C]  w-[80px] text-center flex flex-col justify-center xss:max-mobileMiddle:w-[67px]   py-6">
          <span>Chân phải</span>
        </div>
        <div className="w-[100px] flex flex-col justify-center">
          <SelectBox></SelectBox>
        </div>
      </div>

      <div className="flex flex-row gap-3">
        <div className="bg-[#1B1B1C]  w-[80px] text-center flex flex-col justify-center xss:max-mobileMiddle:w-[67px]   py-6">
          <span>Thể hình</span>
        </div>
        <div className="w-[100px] flex flex-col justify-center">
          <SelectBox></SelectBox>
        </div>
      </div>
    </div>
  );
}
