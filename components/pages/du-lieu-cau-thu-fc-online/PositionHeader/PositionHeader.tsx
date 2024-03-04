import ContainerPositionDetail from "./ContainerPositionDetail";
import ContainerPosition from "./ContainerPostion";

type PositionHeader = {
  updatePosition: (seasonId: string) => void;
  selectedID: Set<String>;
};
export default function PositionHeader(props: PositionHeader) {
  const { selectedID, updatePosition } = props;
  return (
    <div className="flex flex-row text-white border-b-1 border-[#989696]">
      <div className="  bg-[#1B1B1C] w-20 text-center flex flex-col justify-center shadow-md   shadow-[#2a2a2a] py-2 xss:max-mobileMiddle:w-14 ">
        <span>Vị trí</span>
      </div>
      <div className="flex flex-col  w-full gap-2 bg-black bg-opacity-70  py-6 pl-3 xss:max-mobileMiddle:pl-0">
        <div id="FW" className="flex flex-row ">
          <div>
            <ContainerPosition position={"FW"}></ContainerPosition>
          </div>
          <div className="flex flex-row gap-1 flex-wrap">
            <ContainerPositionDetail
              value="Tất cả : FW"
              isSelected={selectedID.has("FW")}
              updatePosition={updatePosition}
            ></ContainerPositionDetail>
            <ContainerPositionDetail
              value="ST"
              isSelected={selectedID.has("ST")}
              updatePosition={updatePosition}
            ></ContainerPositionDetail>
            <ContainerPositionDetail
              value="CF"
              isSelected={selectedID.has("CF")}
              updatePosition={updatePosition}
            ></ContainerPositionDetail>
            <ContainerPositionDetail
              value="LW"
              isSelected={selectedID.has("LW")}
              updatePosition={updatePosition}
            ></ContainerPositionDetail>
            <ContainerPositionDetail
              value="RW"
              isSelected={selectedID.has("RW")}
              updatePosition={updatePosition}
            ></ContainerPositionDetail>
          </div>
        </div>

        <div id="MF">
          <div>
            <ContainerPosition position={"MF"}></ContainerPosition>
          </div>
          <div className="flex flex-row gap-1">
            <ContainerPositionDetail
              value="Tất cả : MF"
              isSelected={selectedID.has("MF")}
              updatePosition={updatePosition}
            ></ContainerPositionDetail>
            <ContainerPositionDetail
              value="CM"
              isSelected={selectedID.has("CM")}
              updatePosition={updatePosition}
            ></ContainerPositionDetail>
            <ContainerPositionDetail
              value="CAM"
              isSelected={selectedID.has("CAM")}
              updatePosition={updatePosition}
            ></ContainerPositionDetail>
            <ContainerPositionDetail
              value="CDM"
              isSelected={selectedID.has("CDM")}
              updatePosition={updatePosition}
            ></ContainerPositionDetail>
            <ContainerPositionDetail
              value="LM"
              isSelected={selectedID.has("LM")}
              updatePosition={updatePosition}
            ></ContainerPositionDetail>
            <ContainerPositionDetail
              value="RM"
              isSelected={selectedID.has("RM")}
              updatePosition={updatePosition}
            ></ContainerPositionDetail>
          </div>
        </div>

        <div id="DF">
          <div>
            <ContainerPosition position={"DF"}></ContainerPosition>
          </div>

          <div className="flex flex-row gap-1">
            <ContainerPositionDetail
              value="Tất cả : DF"
              isSelected={selectedID.has("DF")}
              updatePosition={updatePosition}
            ></ContainerPositionDetail>
            <ContainerPositionDetail
              value="CB"
              isSelected={selectedID.has("CB")}
              updatePosition={updatePosition}
            ></ContainerPositionDetail>
            <ContainerPositionDetail
              value="LB"
              isSelected={selectedID.has("LB")}
              updatePosition={updatePosition}
            ></ContainerPositionDetail>
            <ContainerPositionDetail
              value="RB"
              isSelected={selectedID.has("RB")}
              updatePosition={updatePosition}
            ></ContainerPositionDetail>
            <ContainerPositionDetail
              value="LWB"
              isSelected={selectedID.has("LWB")}
              updatePosition={updatePosition}
            ></ContainerPositionDetail>
            <ContainerPositionDetail
              value="RWB"
              isSelected={selectedID.has("RWB")}
              updatePosition={updatePosition}
            ></ContainerPositionDetail>
          </div>
        </div>

        <div id="GK">
          <div>
            <ContainerPosition position={"GK"}></ContainerPosition>
          </div>
          <div className="flex flex-row gap-1">
            <ContainerPositionDetail
              value="Tất cả : GK"
              isSelected={selectedID.has("GK")}
              updatePosition={updatePosition}
            ></ContainerPositionDetail>
          </div>
        </div>
      </div>
    </div>
  );
}
