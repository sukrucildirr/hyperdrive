import type { SVGProps } from "react";
// <defs>
//   <style>
//     @media (prefers-color-scheme: dark) {
//       .cls-1 {
//         fill: #dcff71;
//       }
//     }
//     @media (prefers-color-scheme: light) {
//       .cls-1 {
//         fill: #004fff;
//       }
//     }
//   </style>
// </defs>
const SvgHyperwareSmall = (props: SVGProps<SVGSVGElement>) => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const fillStyle = isDark ? '#dcff71' : '#004fff';

  return (
    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 622.27 595.09" {...props} style={{ ...props.style }}>
      <g id="Capa_1" data-name="Capa 1">
        <g>
          <g>
            <g>
              <path style={{ fill: fillStyle }} d="M99.56,188.21L0,476.27l93.56.03c10.8,0,20.4-6.84,23.93-17.05l53.59-155.07c3.79-10.97,1.73-23.11-5.45-32.22l-66.06-83.76Z" />
              <path style={{ fill: fillStyle }} d="M420.78,118.82l-30.14,87.1c-3.74,10.8-13.91,18.04-25.34,18.04h-70.48c-10.46,0-20.34-4.76-26.81-12.97l-72.67-92.17h225.44Z" />
            </g>
            <path style={{ fill: fillStyle }} d="M101.63,0l-42.74,123.61c-1.85,5.35-.99,11.28,2.3,15.93l38.37,48.67,17.69-51.16c3.77-10.91,14.05-18.23,25.59-18.23h52.5L101.63,0Z" />
          </g>
          <g>
            <g>
              <path style={{ fill: fillStyle }} d="M522.71,406.88l99.56-288.06-93.56-.03c-10.8,0-20.4,6.84-23.93,17.05l-53.59,155.07c-3.79,10.97-1.73,23.11,5.45,32.22l66.06,83.76Z" />
              <path style={{ fill: fillStyle }} d="M201.49,476.27l30.14-87.1c3.74-10.8,13.91-18.04,25.34-18.04h70.48c10.46,0,20.34,4.76,26.81,12.97l72.67,92.17h-225.44Z" />
            </g>
            <path style={{ fill: fillStyle }} d="M520.64,595.09l42.74-123.61c1.85-5.35.99-11.28-2.3-15.93l-38.37-48.67-17.69,51.16c-3.77,10.91-14.05,18.23-25.59,18.23h-52.5l93.71,118.82Z" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default SvgHyperwareSmall;

