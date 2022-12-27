import React from "react";
const SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="626.601" height="1156.834" z>
<g id="Ilustration.Background.Icon" transform="translate(-1419 -3535.999)" opacity="0.45" style="mix-blend-mode: normal;isolation: isolate">
  <g id="Grupo_7716" data-name="Grupo 7716" transform="translate(1419 3535.999)" style="mix-blend-mode: color-dodge;isolation: isolate">
    <g id="g6928-9-9" transform="translate(0 711.381)">
      <path id="path6930-4-7" d="M159.844,86.353c-20.1,76.2-30.3,148.327-26.88,190.112,3.506,42.568,20.642,47.168,44.952,12.066,17.762-25.709,37.659-70.193,55.444-123.958A352.417,352.417,0,0,1,159.844,86.353ZM599.252,204.182a352,352,0,0,1-102.768,30.913c-11.473,55.468-16.475,103.956-13.938,135.105,3.512,42.539,20.648,47.124,44.952,12.028C551.34,347.792,578.562,280.243,599.252,204.182Zm-285.332,6.933c-28.148,110.174-46.143,210.669-48.206,269.214-2.25,64.053,14.886,68.638,44.952,12.029,27.474-51.781,62.1-147.807,92.775-257.264a351.427,351.427,0,0,1-45.641-8.656A350.926,350.926,0,0,1,313.919,211.115Z" transform="translate(-132.313 -86.353)" fill="#112036"/>
    </g>
    <path id="path900" d="M422.6,272.07q-11.293-.386-22.475.076C270.8,277.409,153.915,365.753,118.715,497.18,75.393,658.936,171.838,826.092,333.522,869.434S662.293,816.251,705.615,654.5s-53.16-328.875-214.844-372.216a303.323,303.323,0,0,0-68.175-10.21Zm-2.513,67.116a239.3,239.3,0,0,1,53.28,8.07,235.9,235.9,0,1,1-70.8-8.033c5.819-.227,11.648-.252,17.522-.038ZM535.842,64.162c-20.111,0-40.325,7-57.625,14.748-23.07,10.333-44.1,26.543-65.208,48.036-27.335,27.837-53.8,63.84-78.838,106.07a348.4,348.4,0,0,1,98.787-8.427c13.777-19.948,27.508-37.7,40.893-51.331,44.7-45.021,81.207-48.74,99.744,26.738,5.065,19.6,8.252,43.247,10.146,69.181a349.484,349.484,0,0,1,80.944,62.554c.022-53.094-4.855-101.089-15.278-141.426-7.541-29.173-17.692-53.711-32.507-74.2S582.1,73.73,555.829,66.69a76.116,76.116,0,0,0-19.987-2.528ZM422.811,265.844q-11.524-.392-22.936.08C267.9,271.3,148.624,361.45,112.7,495.571,68.493,660.641,166.915,831.224,331.912,875.453S667.42,821.181,711.63,656.112,657.381,320.5,492.383,276.267a309.524,309.524,0,0,0-69.572-10.419Zm-2.565,68.491a244.168,244.168,0,0,1,54.371,8.236,240.729,240.729,0,1,1-72.253-8.2c5.938-.227,11.886-.257,17.881-.039Z" transform="translate(-95.607 -64.162)" fill="#112036"/>
  </g>
</g>
</svg>
`;
export function BackgroundContainer() {
    return (
        <div
            style={{
                position: "absolute",
                left: "0",
                border: "yellow 1px solid",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: 0,
                width: "100%",
                right: "0",
            }}
        >
            <span dangerouslySetInnerHTML={{ __html: SVG }} />
        </div>
    );
}
