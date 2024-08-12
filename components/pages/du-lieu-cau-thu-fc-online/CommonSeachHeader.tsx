type SelectCommonSearchHeaderBox = {
  title: string;
};

export default function CommonSearchHeader(props: SelectCommonSearchHeaderBox) {
  const { title } = props;
  return (
    <div className="bg-[#1B1B1C]  w-[73.41px]  text-center flex flex-col justify-center xss:max-mobileMiddle:w-[60px]   py-6">
      <span>{title}</span>
    </div>
  );
}
