import styles from "@/styles/filter.module.css";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import clsx from "clsx";
import FitnessFilter from "./fitness/fitness";
import FootSkill from "./footSkill/footSkill";
import NationFilter from "./nation/nation";
import { OvrFilter } from "./ovr/ovr";
import { PositionFilter } from "./position/position";
import { SalaryFilter } from "./salary/salary";
import SeasonFilter from "./season/seasonFilter";
import TeamFilter from "./team/teamFilter";
import TraitFilter from "./traits/traitFilter";

// import style from "../../styles/searchBox.module.scss";
type FilterProps = {
  setPostion: (postion: string) => void;
  setPostionDetail: (positionDetail: string) => void;
  setSeasonID: (seasonID: string) => void;
  setFitness: (fitness: string) => void;
  setTournamentID: (tourID: string) => void;
  tournamentID: string;
  setTeamID: (teamID: string) => void;
  setContinentID: (continentID: string) => void;
  continentID: string;
  setNationID: (nationID: string) => void;
  setTrait1: (trait1: string) => void;
  setTrait2: (trait2: string) => void;
  setTrait3: (trait3: string) => void;
};
export function Filter(props: FilterProps) {
  const {
    setPostion,
    setPostionDetail,
    setSeasonID,
    setFitness,
    setTournamentID,
    tournamentID,
    setTeamID,
    setContinentID,
    continentID,
    setNationID,
    setTrait1,
    setTrait2,
    setTrait3,
  } = props;

  return (
    <div
      className={clsx(
        "mt-2 px-1 py-2 bg-hslDark rounded-lg opacity-85",
        styles.filterTransition
      )}
    >
      <div className="flex flex-row gap-10 p-8">
        <div className="basis-1/4 flex flex-col gap-4">
          <PositionFilter
            setPostion={setPostion}
            setPostionDetail={setPostionDetail}
          />
          <div className="basis-2/6 flex flex-col gap-2">
            <SeasonFilter setSeasonID={setSeasonID} />
            <FitnessFilter setFitness={setFitness}></FitnessFilter>
          </div>
        </div>

        <div className="basis-1/4 flex flex-col  gap-4">
          <div className="basis-2/6 flex flex-col  gap-2">
            <div className="flex flex-col gap-2">
              <div>
                <label>Chiều cao</label>
              </div>
              <div className="flex flex-row gap-2">
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered">--</Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">100</DropdownItem>
                    <DropdownItem key="copy">101</DropdownItem>
                    <DropdownItem key="edit">102</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <span className="text-2xl items-center"> ~ </span>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered">--</Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">100</DropdownItem>
                    <DropdownItem key="copy">101</DropdownItem>
                    <DropdownItem key="edit">102</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div>
                <label>Cân nặng</label>
              </div>
              <div className="flex flex-row gap-2">
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered">--</Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">100</DropdownItem>
                    <DropdownItem key="copy">101</DropdownItem>
                    <DropdownItem key="edit">102</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <span className="text-2xl items-center"> ~ </span>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered">--</Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">100</DropdownItem>
                    <DropdownItem key="copy">101</DropdownItem>
                    <DropdownItem key="edit">102</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>

          <div className="basis-2/6 flex flex-col gap-2">
            <div className="flex flex-col gap-2 ">
              <div>
                <label>Năm sinh</label>
              </div>
              <div className="flex flex-row gap-2">
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered">--</Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">100</DropdownItem>
                    <DropdownItem key="copy">101</DropdownItem>
                    <DropdownItem key="edit">102</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <span className="text-2xl items-center"> ~ </span>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered">--</Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">100</DropdownItem>
                    <DropdownItem key="copy">101</DropdownItem>
                    <DropdownItem key="edit">102</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/4 flex flex-col  gap-4">
          <TeamFilter
            setTournamentID={setTournamentID}
            tourID={tournamentID}
            setTeamID={setTeamID}
          ></TeamFilter>

          <NationFilter
            setContinentID={setContinentID}
            setNationID={setNationID}
            continentID={continentID}
          ></NationFilter>
        </div>
        <div className="basis-1/4 flex flex-col  gap-4">
          <TraitFilter
            setTrait1={setTrait1}
            setTrait2={setTrait2}
            setTrait3={setTrait3}
          ></TraitFilter>
        </div>
        <div className="basis-1/4 flex flex-col  gap-4">
          <SalaryFilter></SalaryFilter>
          <OvrFilter></OvrFilter>
          <FootSkill></FootSkill>
        </div>
      </div>
      {/* <div className="flex flex-row justify-end pr-8 gap-2">
  <Button color="primary">Tìm kiếm</Button>
</div> */}
    </div>
  );
}
