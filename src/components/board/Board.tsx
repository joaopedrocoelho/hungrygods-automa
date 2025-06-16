import { useState } from "react";
import ExtBoard from "./ExtBoard.tsx";

const Board = (props: React.SVGProps<SVGSVGElement>) => {
  const [rotate, setRotate] = useState(0);
  return (
    <svg viewBox="0 0 794.78 794.78" {...props}>
      <defs>
        <clipPath id="board_svg__clippath">
          <path
            d="M229.85 757.24 295 736.56l46.12 53.71h-.03a397.847 397.847 0 0 1-36.93-7.05l-9.1-46.65-34.62 33.41a393.32 393.32 0 0 1-30.6-12.74Z"
            className="board_svg__st0"
          />
        </clipPath>
        <clipPath id="board_svg__clippath-1">
          <path
            d="m1.85 431.2 50.3 46.28-23.72 66.71-.02-.03c-4.67-11.74-8.74-23.6-12.22-35.55l35.97-31.07-46.19-13.46a390.835 390.835 0 0 1-4.14-32.89Z"
            className="board_svg__st0"
          />
        </clipPath>
        <clipPath id="board_svg__clippath-2">
          <path
            d="M170.01 72.21 155.46 139 85.9 152.22l.02-.03a393.22 393.22 0 0 1 24.52-28.5l44.98 15.36-11.71-46.66c8.51-7.12 17.28-13.85 26.29-20.18Z"
            className="board_svg__st0"
          />
        </clipPath>
        <clipPath id="board_svg__clippath-3">
          <path
            d="m564.93 37.54-65.15 20.68-46.12-53.71h.03c12.51 1.78 24.82 4.14 36.93 7.05l9.1 46.65 34.62-33.41a393.32 393.32 0 0 1 30.6 12.74Z"
            className="board_svg__st0"
          />
        </clipPath>
        <clipPath id="board_svg__clippath-4">
          <path
            d="m792.92 363.57-50.3-46.28 23.72-66.71.02.03c4.67 11.74 8.74 23.6 12.22 35.55l-35.97 31.07 46.19 13.46c1.85 10.94 3.23 21.91 4.14 32.89Z"
            className="board_svg__st0"
          />
        </clipPath>
        <clipPath id="board_svg__clippath-5">
          <path
            d="m624.77 722.57 14.55-66.79 69.56-13.22-.02.03a393.22 393.22 0 0 1-24.52 28.5l-44.98-15.36 11.71 46.66a393.392 393.392 0 0 1-26.29 20.18Z"
            className="board_svg__st0"
          />
        </clipPath>
        <style>
          {
            '.board_svg__st0,.board_svg__st1,.board_svg__st2{fill:none}.board_svg__st3{fill:#fbf071}.board_svg__st1,.board_svg__st2{stroke:#231f20}.board_svg__st5{font-size:53.36px}.board_svg__st5,.board_svg__st6{font-family:MyriadPro-Regular,"Myriad Pro"}.board_svg__st1{stroke-width:.5px}.board_svg__st6{font-size:48px}.board_svg__st24{fill:#f37b81}.board_svg__st25{fill:#73d1f6}.board_svg__st2{stroke-width:7.2px}.board_svg__st26{fill:#00a551}'
          }
        </style>
      </defs>
      <g id="board_svg__vilas">
        <path
          d="M684.55 671.3c67.96-71.23 109.69-167.7 109.69-273.92 0-22.81-1.93-45.17-5.63-66.92l-45.99-13.18 35.77-31.27C743.09 165.03 651.73 67.96 534.33 24.79L499.71 58.2l-9.1-46.65C460.71 4.35 429.5.53 397.39.53c-96.49 0-184.93 34.44-253.72 91.69l11.73 46.76-45.17-15.52C42.27 194.7.54 291.17.54 397.39c0 22.81 1.93 45.17 5.63 66.92l45.99 13.18-35.77 31.27c35.3 120.98 126.66 218.05 244.06 261.22l34.62-33.41 9.1 46.65c29.9 7.2 61.11 11.02 93.22 11.02 96.49 0 184.93-34.44 253.72-91.69l-11.73-46.76 45.17 15.52Z"
          style={{
            stroke: "#231f20",
            fill: "#fff",
            strokeMiterlimit: 1.13,
            strokeWidth: "1.08px",
          }}
        />
        <g
          style={{
            clipPath: "url(#board_svg__clippath)",
          }}
        >
          <path
            d="M310.67 701.87h87.84v72h-87.84z"
            className="board_svg__st0"
          />
          <path
            d="M354.59 773.87v-72M325.31 773.87v-72M383.87 773.87v-72"
            className="board_svg__st1"
          />
          <path
            d="M360.43 773.87v-72M331.15 773.87v-72M389.71 773.87v-72M319.47 773.87v-72M348.75 773.87v-72M378.03 773.87v-72"
            className="board_svg__st2"
          />
          <path
            d="M310.67 773.87h87.84v72h-87.84z"
            className="board_svg__st0"
          />
          <path
            d="M354.59 845.87v-72M325.31 845.87v-72M383.87 845.87v-72"
            className="board_svg__st1"
          />
          <path
            d="M360.43 845.87v-72M331.15 845.87v-72M389.71 845.87v-72M319.47 845.87v-72M348.75 845.87v-72M378.03 845.87v-72"
            className="board_svg__st2"
          />
          <path
            d="M222.83 701.87h87.84v72h-87.84z"
            className="board_svg__st0"
          />
          <path
            d="M266.75 773.87v-72M237.47 773.87v-72M296.03 773.87v-72"
            className="board_svg__st1"
          />
          <path
            d="M272.59 773.87v-72M243.31 773.87v-72M301.87 773.87v-72M231.63 773.87v-72M260.91 773.87v-72M290.19 773.87v-72"
            className="board_svg__st2"
          />
          <path
            d="M222.83 773.87h87.84v72h-87.84z"
            className="board_svg__st0"
          />
          <path
            d="M266.75 845.87v-72M237.47 845.87v-72M296.03 845.87v-72"
            className="board_svg__st1"
          />
          <path
            d="M272.59 845.87v-72M243.31 845.87v-72M301.87 845.87v-72M231.63 845.87v-72M260.91 845.87v-72M290.19 845.87v-72"
            className="board_svg__st2"
          />
        </g>
        <g
          style={{
            clipPath: "url(#board_svg__clippath-1)",
          }}
        >
          <path
            d="m27.526 509.647 62.498-35.75 43.614 76.248-62.497 35.75z"
            className="board_svg__st0"
          />
          <path
            d="m49.36 547.74 62.49-35.75M34.82 522.33l62.49-35.76M63.9 573.16l62.49-35.76"
            className="board_svg__st1"
          />
          <path
            d="m52.26 552.81 62.49-35.75M37.72 527.4l62.49-35.76M66.8 578.23l62.49-35.76M31.92 517.26l62.49-35.75M46.46 542.67l62.49-35.75M61 568.09l62.49-35.75"
            className="board_svg__st2"
          />
          <path
            d="m-34.985 545.392 62.498-35.75 43.614 76.248L8.63 621.639z"
            className="board_svg__st0"
          />
          <path
            d="m-13.14 583.5 62.5-35.76M-27.68 558.08l62.5-35.75M1.4 608.91l62.5-35.75"
            className="board_svg__st1"
          />
          <path
            d="m-10.24 588.57 62.5-35.76M-24.78 563.15l62.5-35.75M4.3 613.98l62.5-35.75M-30.58 553.01l62.5-35.75M-16.04 578.43l62.5-35.76M-1.5 603.84 61 568.09"
            className="board_svg__st2"
          />
          <path
            d="m-16.097 433.389 62.498-35.75 43.615 76.247-62.498 35.75z"
            className="board_svg__st0"
          />
          <path
            d="m5.74 471.5 62.49-35.75M-8.8 446.08l62.49-35.75M20.28 496.91l62.49-35.75"
            className="board_svg__st1"
          />
          <path
            d="m8.64 476.57 62.49-35.76M-5.9 451.15l62.49-35.75M23.18 501.98l62.49-35.75M-11.7 441.02l62.49-35.76M2.84 466.43l62.49-35.75M17.38 491.85l62.49-35.76"
            className="board_svg__st2"
          />
          <path
            d="m-78.603 469.152 62.498-35.75L27.51 509.65l-62.497 35.749z"
            className="board_svg__st0"
          />
          <path
            d="m-56.76 507.25 62.5-35.75M-71.3 481.84l62.5-35.76M-42.22 532.67l62.5-35.76"
            className="board_svg__st1"
          />
          <path
            d="m-53.86 512.32 62.5-35.75M-68.4 486.91l62.5-35.76M-39.32 537.74l62.5-35.76M-74.2 476.77l62.5-35.75M-59.66 502.18l62.5-35.75M-45.12 527.6l62.5-35.75"
            className="board_svg__st2"
          />
        </g>
        <g
          style={{
            clipPath: "url(#board_svg__clippath-2)",
          }}
        >
          <path
            d="m71.52 210.133 43.774-76.156 62.423 35.88-43.774 76.156z"
            className="board_svg__st0"
          />
          <path
            d="m93.41 172.07 62.42 35.88M108 146.68l62.42 35.89M78.82 197.45l62.42 35.89"
            className="board_svg__st1"
          />
          <path
            d="m90.5 177.13 62.42 35.89M105.09 151.75l62.42 35.88M75.91 202.52l62.42 35.88M110.91 141.62l62.42 35.88M96.32 167.01l62.42 35.88M81.73 192.39l62.42 35.88"
            className="board_svg__st2"
          />
          <path
            d="M9.106 174.26 52.88 98.104l62.423 35.88L71.53 210.14z"
            className="board_svg__st0"
          />
          <path
            d="m30.99 136.18 62.42 35.89M45.58 110.8 108 146.68M16.4 161.57l62.42 35.88"
            className="board_svg__st1"
          />
          <path
            d="m28.08 141.25 62.42 35.88M42.67 115.86l62.42 35.89M13.49 166.63l62.42 35.89M48.49 105.74l62.42 35.88M33.9 131.12l62.42 35.89M19.31 156.51l62.42 35.88"
            className="board_svg__st2"
          />
          <path
            d="m115.296 133.988 43.774-76.156 62.423 35.88-43.774 76.157z"
            className="board_svg__st0"
          />
          <path
            d="m137.19 95.92 62.42 35.88M151.78 70.53l62.42 35.88M122.6 121.3l62.42 35.88"
            className="board_svg__st1"
          />
          <path
            d="m134.28 100.98 62.42 35.88M148.87 75.59l62.42 35.89M119.69 126.36l62.42 35.89M154.69 65.47l62.42 35.88M140.1 90.85l62.42 35.89M125.51 116.24l62.42 35.88"
            className="board_svg__st2"
          />
          <path
            d="m52.874 98.1 43.774-76.156 62.423 35.88-43.774 76.156z"
            className="board_svg__st0"
          />
          <path
            d="m74.77 60.03 62.42 35.89M89.36 34.65l62.42 35.88M60.18 85.42l62.42 35.88"
            className="board_svg__st1"
          />
          <path
            d="m71.86 65.09 62.42 35.89M86.45 39.71l62.42 35.88M57.26 90.48l62.43 35.88M92.27 29.58l62.42 35.89M77.68 54.97l62.42 35.88M63.09 80.35l62.42 35.89"
            className="board_svg__st2"
          />
        </g>
        <g
          style={{
            clipPath: "url(#board_svg__clippath-3)",
          }}
        >
          <path d="M396.26 20.9h87.84v72h-87.84z" className="board_svg__st0" />
          <path
            d="M440.18 20.9v72M469.46 20.9v72M410.9 20.9v72"
            className="board_svg__st1"
          />
          <path
            d="M434.34 20.9v72M463.62 20.9v72M405.06 20.9v72M475.3 20.9v72M446.02 20.9v72M416.74 20.9v72"
            className="board_svg__st2"
          />
          <path d="M396.26-51.1h87.84v72h-87.84z" className="board_svg__st0" />
          <path
            d="M440.18-51.1v72M469.46-51.1v72M410.9-51.1v72"
            className="board_svg__st1"
          />
          <path
            d="M434.34-51.1v72M463.62-51.1v72M405.06-51.1v72M475.3-51.1v72M446.02-51.1v72M416.74-51.1v72"
            className="board_svg__st2"
          />
          <path d="M484.1 20.9h87.84v72H484.1z" className="board_svg__st0" />
          <path
            d="M528.02 20.9v72M557.3 20.9v72M498.74 20.9v72"
            className="board_svg__st1"
          />
          <path
            d="M522.18 20.9v72M551.46 20.9v72M492.9 20.9v72M563.14 20.9v72M533.86 20.9v72M504.58 20.9v72"
            className="board_svg__st2"
          />
          <path d="M484.1-51.1h87.84v72H484.1z" className="board_svg__st0" />
          <path
            d="M528.02-51.1v72M557.3-51.1v72M498.74-51.1v72"
            className="board_svg__st1"
          />
          <path
            d="M522.18-51.1v72M551.46-51.1v72M492.9-51.1v72M563.14-51.1v72M533.86-51.1v72M504.58-51.1v72"
            className="board_svg__st2"
          />
        </g>
        <g
          style={{
            clipPath: "url(#board_svg__clippath-4)",
          }}
        >
          <path
            d="m661.125 244.72 62.498-35.75 43.614 76.248-62.498 35.75z"
            className="board_svg__st0"
          />
          <path
            d="m745.42 247.03-62.5 35.76M759.96 272.45l-62.49 35.75M730.88 221.62l-62.5 35.75"
            className="board_svg__st1"
          />
          <path
            d="m742.52 241.97-62.5 35.75M757.06 267.38l-62.5 35.75M727.98 216.55l-62.5 35.75M762.86 277.52l-62.49 35.75M748.32 252.1l-62.5 35.76M733.78 226.69l-62.5 35.75"
            className="board_svg__st2"
          />
          <path
            d="m723.626 208.976 62.498-35.75 43.614 76.248-62.498 35.75z"
            className="board_svg__st0"
          />
          <path
            d="m807.91 211.28-62.49 35.75M822.46 236.7l-62.5 35.75M793.37 185.87l-62.49 35.75"
            className="board_svg__st1"
          />
          <path
            d="m805.01 206.21-62.49 35.76M819.55 231.63l-62.49 35.75M790.47 180.8l-62.49 35.75M825.36 241.76l-62.5 35.76M810.81 216.35l-62.49 35.75M796.27 190.93l-62.49 35.76"
            className="board_svg__st2"
          />
          <path
            d="m704.748 320.98 62.497-35.75 43.615 76.247-62.498 35.75z"
            className="board_svg__st0"
          />
          <path
            d="m789.04 323.28-62.49 35.75M803.58 348.69l-62.49 35.76M774.5 297.86 712 333.62"
            className="board_svg__st1"
          />
          <path
            d="m786.14 318.21-62.49 35.75M800.68 343.62l-62.5 35.76M771.6 292.79l-62.5 35.76M806.48 353.76l-62.49 35.76M791.94 328.35l-62.49 35.75M777.4 302.93l-62.5 35.76"
            className="board_svg__st2"
          />
          <path
            d="m767.244 285.216 62.498-35.75 43.614 76.248-62.498 35.75z"
            className="board_svg__st0"
          />
          <path
            d="m851.54 287.52-62.5 35.76M866.08 312.94l-62.5 35.75M836.99 262.11l-62.49 35.75"
            className="board_svg__st1"
          />
          <path
            d="m848.64 282.45-62.5 35.76M863.17 307.87l-62.49 35.75M834.09 257.04l-62.49 35.75M868.98 318.01l-62.5 35.75M854.44 292.59l-62.5 35.76M839.89 267.18l-62.49 35.75"
            className="board_svg__st2"
          />
        </g>
        <g
          style={{
            clipPath: "url(#board_svg__clippath-5)",
          }}
        >
          <path
            d="m617.043 624.849 43.773-76.156 62.423 35.88-43.774 76.156z"
            className="board_svg__st0"
          />
          <path
            d="m701.37 622.71-62.42-35.88M686.77 648.09l-62.42-35.88M715.96 597.32l-62.42-35.88"
            className="board_svg__st1"
          />
          <path
            d="m704.28 617.65-62.42-35.89M689.69 643.03l-62.43-35.88M718.87 592.26l-62.42-35.88M683.86 653.16l-62.42-35.89M698.46 627.77l-62.42-35.88M713.05 602.39l-62.42-35.89"
            className="board_svg__st2"
          />
          <path
            d="m679.456 660.732 43.774-76.156 62.423 35.88-43.774 76.156z"
            className="board_svg__st0"
          />
          <path
            d="m763.79 658.59-62.42-35.88M749.2 683.98l-62.43-35.89M778.38 633.21l-62.42-35.89"
            className="board_svg__st1"
          />
          <path
            d="m766.7 653.53-62.42-35.88M752.11 678.91l-62.42-35.88M781.29 628.15l-62.42-35.89M746.28 689.04l-62.42-35.88M760.88 663.66l-62.42-35.89M775.47 638.27l-62.42-35.88"
            className="board_svg__st2"
          />
          <path
            d="m573.266 701.004 43.774-76.156 62.423 35.88-43.774 76.156z"
            className="board_svg__st0"
          />
          <path
            d="m657.59 698.86-62.42-35.88M643 724.25l-62.42-35.89M672.18 673.48l-62.42-35.89"
            className="board_svg__st1"
          />
          <path
            d="m660.5 693.8-62.42-35.88M645.91 719.18l-62.42-35.88M675.09 668.41l-62.42-35.88M640.09 729.31l-62.43-35.88M654.68 703.93l-62.42-35.89M669.27 678.54l-62.42-35.88"
            className="board_svg__st2"
          />
          <path
            d="m635.68 736.877 43.774-76.156 62.422 35.88-43.773 76.156z"
            className="board_svg__st0"
          />
          <path
            d="m720.01 734.75-62.42-35.89M705.42 760.13 643 724.25M734.6 709.36l-62.42-35.88"
            className="board_svg__st1"
          />
          <path
            d="M722.92 729.68 660.5 693.8M708.33 755.07l-62.42-35.89M737.51 704.3l-62.42-35.89M702.51 765.19l-62.42-35.88M717.1 739.81l-62.42-35.88M731.69 714.42l-62.42-35.88"
            className="board_svg__st2"
          />
        </g>
      </g>
      <g
        style={{
          transform: `scale(0.85) rotate(${15 + rotate}deg)`,
          transformOrigin: "center",
          cursor: "pointer",
          transition: "transform 0.3s ease-in-out",
        }}
        onClick={() => setRotate((prev) => prev + 30)}
      >
        <ExtBoard />
      </g>

      {/* <MidBoard />
    <IntBoard /> */}
    </svg>
  );
};
export default Board;
