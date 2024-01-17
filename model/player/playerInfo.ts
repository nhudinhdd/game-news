import { NationRes } from "./nation";
import { PlayerTeamRes } from "./playerTeam";

export interface PlayerInfoRes {
  playerID: string;
  nationRes: NationRes;
  firstName: string;
  lastName: string;
  birthDay: string;
  playerStory: string;
  fullName: string;
  playerTeams: Array<PlayerTeamRes>;
}
