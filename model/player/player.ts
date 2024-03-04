import { PlayerInfoRes } from "./playerInfo";
import { PlayerSeasonTraitRes } from "./playerSeasonTrait";
import { SeasonRes } from "./season";

export interface PlayerSeasonRes {
  playerSeasonID: string;
  seasonRes: SeasonRes;
  playerInfoRes: PlayerInfoRes;
  playerMainPosition: string;
  playerPosition: Array<string>;
  positionOvr: Map<String, string>;
  avatar: string;
  salary: number;
  height: number;
  weight: number;
  fitness: string;
  leftFoot: string;
  rightFoot: string;
  skill: string;
  pac: number;
  sho: number;
  pas: number;
  dri: number;
  def: number;
  phy: number;
  altAvatar: string;
  titleAvatar: string;
  captionAvatar: string;
  ovr: string;
  favoriteFoot: number;
  reputation: string;
}

export interface PlayerSeasonDetailRes {
  playerSeasonID: string;
  playerInfo: PlayerInfoRes;
  season: SeasonRes;
  playerSeasonTrait: Array<PlayerSeasonTraitRes>;
  relateSeason: Array<PlayerSeasonRes>;
  positionOvr: Map<String, string>;
  positionAll: Map<String, string>;
  playerPosition: string;
  playerMainPosition: string;
  playerSubPosition: string;
  avatar: string;
  altAvatar: string;
  titleAvatar: string;
  captionAvatar: string;
  reputation: string;
  workRateDef: string;
  workRateAtt: string;
  salary: number;
  height: number;
  weight: number;
  fitness: string;
  leftFoot: string;
  rightFoot: string;
  skill: string;
  speedUp: number;
  speedSprint: number;
  dribbling: number;
  ballControl: number;
  shortPassing: number;
  finishing: number;
  shotPower: number;
  heading: number;
  longShot: number;
  positioning: number;
  vision: number;
  reactions: number;
  volleys: number;
  penalties: number;
  crossing: number;
  longPassing: number;
  freeKick: number;
  curve: number;
  agility: number;
  balance: number;
  marking: number;
  tackleStand: number;
  intercep: number;
  tackleSliding: number;
  strength: number;
  stamina: number;
  aggression: number;
  jumping: number;
  composure: number;
  gkDiv: number;
  gkHanding: number;
  gkKicking: number;
  gkReactions: number;
  gkPositioning: number;
  pac: number;
  sho: number;
  pas: number;
  dri: number;
  def: number;
  phy: number;
  ovr: number;
  favoriteFoot: number;
}
