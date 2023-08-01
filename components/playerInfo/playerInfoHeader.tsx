import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";

type HeaderPlayerInfoProps = {
  setFilterState: () => void;
};
export function HeaderPlayerInfo(props: HeaderPlayerInfoProps) {
  const { setFilterState } = props;
  return (
    <div className="mt-16 w-full relative">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <Image
            src="/assets/f22-ratings-db-logo.png"
            width={60}
            height={60}
            alt="Danh sách cầu thủ trong FC Online"
          />
          <div className="mr-3">
            <span className="text-slate-500">Ratings Collective</span>
            <h1 className="font-riftonnorm text-white">
              FC Online | Danh sách cầu thủ
            </h1>
          </div>
        </div>
        <div className="flex flex-row gap-3 h-12">
          <Input
            type="text"
            label="Nhập tên cầu thủ"
            variant="bordered"
            className="h-12"
            size="sm"
          />
          <div className="h-full">
            <Button
              isIconOnly
              color="primary"
              aria-label="Tìm kiếm cầu thủ"
              className="h-12 w-12"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="h-1/2" />
            </Button>
          </div>
          <Button
            color="primary"
            radius="sm"
            size="lg"
            className="h-full"
            onPress={() => setFilterState()}
          >
            Nâng cao
          </Button>
        </div>
      </div>
    </div>
  );
}
