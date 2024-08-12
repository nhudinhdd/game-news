export default function BackGroundHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row text-white  border-b-1 border-[#989696] bg-black bg-opacity-70 gap-7 xss:max-laptop:gap-0">
      {children}
    </div>
  );
}
