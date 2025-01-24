import { StaticImageData } from "next/image";

export interface listingCardProps {
    title: string;
    location : string;
    rating: number
    backgroundImage:StaticImageData;
    onClick : ()=> void;
    isApartment?:boolean
}

export interface  visionCardProps {
    logo:React.JSX.Element;
    title:string;
    text:string;
}