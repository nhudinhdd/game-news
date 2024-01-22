import Image from "next/image";

const Loading = () => {
  return (
    <div className="p-4 w-full flex justify-center items-center">
      <Image
        alt="Đang tải dữ liệu, vui lòng đợi trong giây lát"
        src="/assets/loading.gif"
        width="200"
        height="50"
      />
      <h1 className="text-center font-bold leading-none text-xl">
        Đang tải dữ liệu, vui lòng đợi trong giây lát
      </h1>
    </div>
  );
};

export { Loading };
