import {
  HomeBlackIcon,
  SideBarMessageIcon,
  SideBarHouseIcon,
  SideBarReportingIcon,
  SideBarStatsIcon,
  SideBarUserManageIcon,
  SideBarApartmentIcon,
} from "@/assets/svg";
import { SideBarInnerProps } from "@/components/sidebar/index.types";

export const sidebarModuleMenus: SideBarInnerProps[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: <HomeBlackIcon/>,
  },
  {
    path: "/dashboard/Apartments",
    title: "My Apartments",
    icon: <SideBarApartmentIcon/>,
  },
  {
    path: "/dashboard/Messages",
    title: "Messages",
    icon: <SideBarMessageIcon/>,
  },
  {
    path: "/dashboard/Reporting",
    title: "Reporting",
    icon: <SideBarReportingIcon/>,
  },
  {
    path: "/dashboard/Statistics",
    title: "Statistics",
    icon: <SideBarStatsIcon/>,
  },
  {
    path: "/dashboard/Management",
    title: "User Management",
    icon: < SideBarUserManageIcon/> ,
  },
];
