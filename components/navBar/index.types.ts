import { Url } from "next/dist/shared/lib/router/router";
import { StaticImageData } from "next/image";

export interface landingNavBarProps {
    logo:StaticImageData,
    pathOne:Url,
    pathTwo:Url,
    pathThree:Url,
    pathOneText: String,
    pathTwoText:string,
    pathThreeText:string,
    buttonText:string,
    onClick: ()=> void,
    logoWidth: number,
    logoHeight:number
}