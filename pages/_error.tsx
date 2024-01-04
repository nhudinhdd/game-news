import Image from "next/image";

export default function Custom404() {
  return (
    <div className="p-4 min-h-screen flex justify-center items-center">
      <Image
        alt="Dữ liệu chưa tồn tại hoặc có lỗi xảy ra! Vui lòng thử lại"
        src="/assets/loading.gif"
        width="200"
        height="50"
      />
      <h1 className="  text-center font-bold leading-none text-xl">
        Dữ liệu chưa tồn tại hoặc có lỗi xảy ra! Vui lòng thử lại
      </h1>
    </div>
  );
}
