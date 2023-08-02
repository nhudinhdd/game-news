import { NationRes } from "./nation";
import { PlayerTeamRes } from "./playerTeam";

export interface PlayerInfoRes {
  playerID: string;
  nationRes: NationRes;
  firstName: string;
  lastName: string;
  birthDay: string;
  playerStory: string;
  playerTeams: Array<PlayerTeamRes>;
}
