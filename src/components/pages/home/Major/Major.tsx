import Container from "@/components/widgets/containers/Container";
import SlideMajor from "./SlideMajor/SlideMajor";
import SeeAll from "@/components/utils/SeeAll";
import Title from "@/components/widgets/texts/Title";

const Major = () => {
    return (<section className="bg-secondary py-8 px-2">
        <Container>
            <Title text="Destacado" color="text-white" />
            <SeeAll />
            <SlideMajor />
        </Container>
    </section>);
}

export default Major;