import { spaceColorMap, spaceItemMap } from "../../types/board";
import type { SpaceProps } from "../../types/board";

const ExtSpace = ({
  type,
  Item,
  transform,
  ...props
}: SpaceProps & React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 708.66 708.66" transform={transform} {...props}>
      <path
        d="m423.54 92.83 21.62-80.68c-61.72-16.54-124-15.71-181.65-.52l21.62 80.69c43.95-11.5 91.39-12.1 138.42.5Z"
        style={{
          fill: spaceColorMap[type],
        }}
      />
      <text
        style={{
          fill: "#231f20",
          fontSize: "47.66px",
        }}
        transform="matrix(.977 -.07655 .06617 .99788 339.52 64.74)"
      >
        <tspan x={0} y={0}>
          {spaceItemMap[type]}
        </tspan>
      </text>
      {Item && (
        <Item transform="translate(354, 52.5) translate(-28.35, -28.35) scale(0.075)" />
      )}
    </svg>
  );
};

export default ExtSpace;
