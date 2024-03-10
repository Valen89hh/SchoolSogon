"use client"

import { SideBarProvider } from "@/context/SideBarContext";
import ContainerFlow from "../containers/ContainerFlow";
import Divider from "../../utils/Divider";
import PrimaryHeader from "./PrimaryHeader/PrimaryHeader";
import SubHeader from "./SubHeader/SubHeader";
import SideBar from "@/components/widgets/SideBar/SideBar";


const Header = () => {
  return (
    <SideBarProvider>
      <SideBar />
      <ContainerFlow className={"mt-5"}>
        <PrimaryHeader />
        <Divider style="my-5" />
        <SubHeader />
      </ContainerFlow>
    </SideBarProvider>


  );
};

export default Header;
