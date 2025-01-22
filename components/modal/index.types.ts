import { StaticImageData } from "next/image";

export interface detailsComp{
    title: string;
    location:String;
    price:number;
    featureArray:features[];
    MainLocation:string;
    closeDetailComp:boolean;
    setCloseDetailComp:()=> void;
};


interface features{
    features: string
}

export interface imageCompProps {
    imageArray : imageProps[];
    setModalOpen : ()=> void;
    closeDetailComp: boolean;
    setCloseDetailComp:()=> void;
}

interface imageProps{
    image :StaticImageData;
}

export interface innerImageProps {
    setModalOpen : ()=> void;
}