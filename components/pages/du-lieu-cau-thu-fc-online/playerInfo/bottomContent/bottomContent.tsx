import { Pagination } from "@nextui-org/react";

export function BottomConent() {
  return (
    <div className="pt-4 flex justify-between items-center">
      <Pagination
        showControls
        classNames={{
          cursor: "bg-foreground text-background",
        }}
        color="default"
        page={1}
        total={10}
        variant="light"
      />
    </div>
  );
}
