export type spaceType = "galo" | "lhama" | "bebe" | "peixe";

export interface SpaceProps {
  type: spaceType;
  Item?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const spaceColorMap = {
  galo: "#FBF071",
  lhama: "#00A551",
  bebe: "#f37b81",
  peixe: "#73D1F6",
} as const;

export const spaceItemMap = {
  galo: "🐓",
  lhama: "🦙",
  bebe: "👶",
  peixe: "🐠",
} as const;
