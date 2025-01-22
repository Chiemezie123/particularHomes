import { StaticImageData } from "next/image";

export interface listingCardProps {
    title: string;
    location : string;
    rating: number
    backgroundImage:StaticImageData;
    onClick : ()=> void
}

export interface  visionCardProps {
    logo:React.JSX.Element;
    title:string;
    text:string;
}