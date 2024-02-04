import Container from "../containers/Container";
import ContainerFlow from "../containers/ContainerFlow";
import Divider from "../utils/Divider";
import PrimaryHeader from "./PrimaryHeader/PrimaryHeader";
import SubHeader from "./SubHeader/SubHeader";

const Header = () => {
  return (
    <ContainerFlow className={"mt-5"}>
      <PrimaryHeader />
      <Divider style="my-5"/>
      <SubHeader />
    </ContainerFlow>
  );
};

export default Header;
