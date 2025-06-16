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
        d="M284.25 92.86 L262.13 12.02 A354.3,354.3 0 0 1 446.53 12.02 L424.41 92.86 A270.75,270.75 0 0 0 284.25 92.86 Z"
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
