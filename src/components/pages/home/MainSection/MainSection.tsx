import ButtonPrimary from "@/components/widgets/buttons/ButtonPrimary";
import Container from "@/components/widgets/containers/Container";

const MainSection = () => {
    return (<Container className="grid grid-cols-1 sm:grid-cols-2">
        <div className="space-y-3 ">
            <h1 className="text-[2.2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold">Educacion innovadora para estudiantes de exito ne Sogon</h1>
            <ButtonPrimary onClick={() => { }} className="px-6 py-2">
                Empezar
            </ButtonPrimary>
        </div>
        <img src="/drawable/Cover.png" alt="cover" className="w-full h-full object-cover" />
    </Container>);
}

export default MainSection;