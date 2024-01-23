export default function SearchContent() {
  return <>SearchContent</>;
  // return (
  //   <div
  //     className={clsx(
  //       " h-7 bg-[#2e2e2f] items-center flex flex-row rounded-[3px]  ",
  //       isInline ? "w-20" : "w-[178px]",
  //       isActive == false ? "bg-[#212121]" : "cursor-pointer hover:bg-[#454545]"
  //     )}
  //     onClick={() => showDropDown()}
  //   >
  //     <span
  //       className={clsx(
  //         isActive == false ? "text-default-400" : "text-white",
  //         "w-full text-center font-extralight "
  //       )}
  //     >
  //       {title}
  //     </span>
  //     {type === "DROP_DOWN" && isActive !== false && (
  //       <Image
  //         src={DropDown}
  //         alt=""
  //         width={25}
  //         height={25}
  //         className="ml-[-24px]"
  //       />
  //     )}

  //     {type === "MENU" && isActive !== false && (
  //       <div className="pr-1">
  //         <FontAwesomeIcon
  //           icon={faBars}
  //           className="w-[14px] h-4  text-white"
  //           size="2xl"
  //         />
  //       </div>
  //     )}
  //   </div>
  // );
}
