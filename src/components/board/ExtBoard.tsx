import type { SpaceProps, spaceType } from "../../types/board";
import ExtSpace from "./ExtSpace";
import Ladrao from "./Ladrao";

const mockArr: SpaceProps[] = [
  {
    type: "peixe",
    Item: Ladrao,
  },
  {
    type: "lhama",
  },
  {
    type: "galo",
  },
  {
    type: "lhama",
    Item: Ladrao,
  },
  {
    type: "bebe",
  },
  {
    type: "galo",
  },
  {
    type: "peixe",
  },
  {
    type: "lhama",
  },
  {
    type: "galo",
  },
  {
    type: "bebe",
  },
  {
    type: "peixe",
  },
  {
    type: "bebe",
  },
];

const ExtBoard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 708.66 708.66">
    {mockArr.map((i, idx) => (
      <ExtSpace
        type={i.type}
        Item={i.Item}
        key={idx}
        transform={`translate(354.33, 354.33) rotate(${
          idx * 30
        }) translate(-354.33, -354.33)`}
      />
    ))}
  </svg>
);
export default ExtBoard;
