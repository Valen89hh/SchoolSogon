import Container from "@/components/widgets/containers/Container";
import Title from "@/components/widgets/texts/Title";
import ContainerDocumentation from "./ContainerDocumentation";
import SeeAll from "@/components/utils/SeeAll";
import SliderContainer from "@/components/widgets/containers/SliderContainer";
import Player from "@/components/widgets/reproductor/Player";

const DocumentationSection = () => {
    return (<Container className="my-[3rem] ">
        <Title text="Documentacion" color="text-black" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 ">
            <ContainerDocumentation title="Imagen" className="space-y-3">
                <div className="px-3 h-1/2">
                    <SeeAll color="text-primary" />
                    <div className="flex w-full h-full  gap-3">
                        <div className="w-1/2 h-full rounded-lg overflow-hidden">
                            <img src="/drawable/documentation/img1.png" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-1/2 grid grid-cols-1 gap-3 ">
                            <div className="w-full  rounded-lg overflow-hidden">
                                <img src="/drawable/documentation/img2.png" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full rounded-lg overflow-hidden bg-red-50">
                                <img src="/drawable/documentation/img3.png" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
                <SliderContainer arrowSettings={{ width: "1.5rem", height: "1.5rem", translate: "1rem" }}>
                    <img src="/drawable/documentation/img2.png" alt="" className="w-full h-full rounded-lg object-cover" />
                    <img src="/drawable/documentation/img3.png" alt="" className="w-full h-full rounded-lg object-cover" />
                    <img src="/drawable/documentation/img4.png" alt="" className="w-full h-full rounded-lg object-cover" />
                </SliderContainer>
            </ContainerDocumentation>
            <ContainerDocumentation title="Video" className="space-y-4 ">
                <div className="h-1/2">

                    <SeeAll color="text-primary" />
                    <SliderContainer arrowSettings={{ width: "1.5rem", height: "1.5rem", translate: "1rem" }}>
                        <Player src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
                        <Player src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
                        <Player src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
                    </SliderContainer>
                </div>
                <div className="grid grid-cols-2 px-3 gap-3 h-1/2  ">
                    <Player src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
                    <Player src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
                    <Player src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
                    <Player src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />

                </div>
            </ContainerDocumentation>
        </div>
    </Container>);
}

export default DocumentationSection;