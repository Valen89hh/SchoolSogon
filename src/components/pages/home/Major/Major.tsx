import Container from "@/components/containers/Container";
import SlideMajor from "./SlideMajor/SlideMajor";
import SeeAll from "@/components/utils/SeeAll";

const Major = () => {
    return ( <section className="bg-secondary py-8 px-2">
        <Container>
            <h3 className="text-[1.8rem] text-white font-bold text-center">DESTACADO</h3>
            <SeeAll/>
            <SlideMajor/>
        </Container>
    </section> );
}
 
export default Major;