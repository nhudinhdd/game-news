import usePosition from "@/lib/usePosition";
import styles from "@/styles/filter.module.css";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useEffect, useMemo, useState } from "react";
type PostionFilterProps = {
  setPostion: (postion: string) => void;
  setPostionDetail: (postion: string) => void;
};
export function PositionFilter(props: PostionFilterProps) {
  const { setPostion, setPostionDetail } = props;
  const { dataPostion, dataPostionDetailList } = usePosition();
  const arr: Map<string, string> = new Map();
  const [selectedKeys, setSelectedKeys] = useState(new Set(["Vị trí"]));
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(""),
    [selectedKeys]
  );

  const [selectedDetailPosistionKeys, setSelectedDetailPostionKey] = useState(
    new Set(["Chi tiết vị trí"])
  );
  const selectedDetailPostionValue = useMemo(
    () => Array.from(selectedDetailPosistionKeys).join(""),
    [selectedDetailPosistionKeys]
  );

  const [isDisablePostionDetail, setDisablePostionDetail] = useState(true);
  const [dataPostionDetail, setDataPostionDetail] = useState(arr);

  /// should useMemo
  useEffect(() => {
    let dataDetail =
      dataPostionDetailList.get(Array.from(selectedKeys).join("")) ?? arr;
    setDataPostionDetail(dataDetail);
    setSelectedDetailPostionKey(new Set(["Chi tiết vị trí"]));
  }, [selectedValue]);

  useEffect(() => {
    if (dataPostionDetail.size == 0) {
      setDisablePostionDetail(true);
    } else {
      setDisablePostionDetail(false);
    }
  }, [dataPostionDetail]);

  return (
    <div className="basis-2/6 flex flex-col gap-2">
      <label>Vị trí</label>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{selectedValue}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Danh sách vị trí trong FC Online"
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={selectedKeys}
          onSelectionChange={(key) => {
            const selectedKey = Array.from(key).join("");
            setSelectedKeys(new Set([selectedKey]));
            setPostion(selectedKey);
          }}
          className={styles.itemDropDown}
        >
          {Array.from(dataPostion.entries()).map(([key, value]) => (
            <DropdownItem key={key}>{value}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" isDisabled={isDisablePostionDetail}>
            {selectedDetailPostionValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Danh sách chi tiết vị trí trong FC Online"
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={selectedDetailPosistionKeys}
          onSelectionChange={(key) => {
            const selectedKey = Array.from(key).join("");
            setSelectedDetailPostionKey(new Set([selectedKey]));
            setPostionDetail(selectedKey);
          }}
        >
          {Array.from(dataPostionDetail.entries()).map(([key, value]) => (
            <DropdownItem key={key}>{value}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
