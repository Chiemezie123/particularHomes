import {
  HomeBlackIcon,
  SideBarMessageIcon,
  SideBarHouseIcon,
  SideBarReportingIcon,
  SideBarStatsIcon,
  SideBarUserManageIcon,
  SideBarApartmentIcon,
  Team,
  Mission,
  Vision
} from "@/assets/svg";
import { SideBarInnerProps } from "@/components/sidebar/index.types";

import {
  BestPrice,
  NearMe,
  TopTicks,
  MostPopular,
} from "@/components/compactments";
import homeImageOne from "@/assets/images/houseImageOne.png";
import homeImageTwo from "@/assets/images/houseImageTwo.png";
import homeImageThree from "@/assets/images/houseImageThree.png";

import firstHouse from "@/assets/images/firstHouse.png";
import secondHouse from "@/assets/images/secondHouse.png";
import thirdHouse from "@/assets/images/thirdHouse.png";
import fourthHouse from "@/assets/images/fourthHouse.png";
import fifthHouse from "@/assets/images/fifthHouse.png";




export const sidebarModuleMenus: SideBarInnerProps[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: <HomeBlackIcon />,
  },
  {
    path: "/dashboard/Apartments",
    title: "My Apartments",
    icon: <SideBarApartmentIcon />,
  },
  {
    path: "/dashboard/Messages",
    title: "Messages",
    icon: <SideBarMessageIcon />,
  },
  {
    path: "/dashboard/Reporting",
    title: "Reporting",
    icon: <SideBarReportingIcon />,
  },
  {
    path: "/dashboard/Statistics",
    title: "Statistics",
    icon: <SideBarStatsIcon />,
  },
  {
    path: "/dashboard/Management",
    title: "User Management",
    icon: <SideBarUserManageIcon />,
  },
];

export const queryTabs = [
  {
    label: "Top-Picks",
    query: "Top-Picks",
    count: 20,
    content: <TopTicks />,
  },
  {
    label: "Most Popular",
    query: "MostPopular",
    count: 15,
    content: <MostPopular />,
  },
  {
    label: "Best Price",
    query: "BestPrice",
    count: 3,
    content: <BestPrice />,
  },
  {
    label: "Near Me",
    query: "NearMe",
    count: 3,
    content: <NearMe />,
  },
];

export const listingCardData = [
  {
    title: "Sunny Three-Bedroom Flat with Balcony",
    location: "Lagos, Nigeria",
    rating: 4.5,
    backgroundImage: homeImageOne,
  },
  {
    title: "Stylish Condo with Riverfront Access",
    location: "Ontario, Canada",
    rating: 4.5,
    backgroundImage: homeImageTwo,
  },
  {
    title: "Elegant Townhouse with Private Garden",
    location: "Ontario, Canada",
    rating: 4.5,
    backgroundImage: homeImageThree,
  },
  {
    title: "Stylish Condo with Riverfront Access",
    location: "Ontario, Canada",
    rating: 4.5,
    backgroundImage: homeImageTwo,
  },
  {
    title: "Sunny Three-Bedroom Flat with Balcony",
    location: "Lagos, Nigeria",
    rating: 4.5,
    backgroundImage: homeImageOne,
  },
  {
    title: "Elegant Townhouse with Private Garden",
    location: "Ontario, Canada",
    rating: 4.5,
    backgroundImage: homeImageTwo,
  },
  // {
  //   title:"Sunny Three-Bedroom Flat with Balcony",
  //   location:"Lagos, Nigeria",
  //   rating:4.5,
  //   backgroundImage:homeImageOne
  // },
  // {
  //   title:"Elegant Townhouse with Private Garden",
  //   location:"Ontario, Canada",
  //   rating:4.5,
  //   backgroundImage:homeImageThree
  // },
];

export const housingImages = [
  {
    pic: firstHouse,
  },
  {
    pic: secondHouse,
  },
  {
    pic: thirdHouse,
  },
  {
    pic: fourthHouse,
  },
  {
    pic: fifthHouse,
  },
  {
    pic: fourthHouse,
  },
];


export const visionCardDetails =[
      {
        logo:<Mission/>,
        title:"MISSION",
        text:"Paircular Holmes is committed to being your go-to destination for all things home. We're dedicated to redefining living experiences by providing tailored solutions for every housing need. Your one-stop destination for comprehensive home solutions."
      },
      {
        logo:<Vision/>,
        title:"VISION",
        text:"Paircular Homes envisions redefine the concept of home, offering not just spaces but places where your unique story unfolds, and where every moment resonates with comfort and joy.We aspire to be the guiding force in your journey to find the perfect home."
      },
      {
        logo:<Team/>,
        title:"TEAM",
        text:"Our team values collaboration, integrity, and innovation. We foster inclusivity, creativity, and continuous learning for growth. United by a shared vision, we tackle challenges, celebrate success, and strive to revolutionize the housing landscape."
      },
      {
        logo:<Vision/>,
        title:"VISION",
        text:"Paircular Homes envisions redefine the concept of home, offering not just spaces but places where your unique story unfolds, and where every moment resonates with comfort and joy.We aspire to be the guiding force in your journey to find the perfect home."
      },
]
