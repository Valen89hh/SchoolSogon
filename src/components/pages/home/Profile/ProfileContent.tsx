import BorderContainer from "@/components/widgets/containers/BorderContainer";
import Container from "@/components/widgets/containers/Container";
import Profile from "./Profile";
import AboutSchool from "./AboutSchool/AboutSchool";
import { getInfoAbout, getInfoProfile, getProfile } from "@/data/InfoProfile/InfoProfile";

const ProfileContent = () => {
    return (
        <Container className="flex flex-col sm:flex-row w-full gap-3 my-[2rem]">
            <Profile img={getProfile().img} description={getProfile().text} />
            <AboutSchool tags={getInfoAbout().tags} />
        </Container>
    );
}

export default ProfileContent;