"use client"

import ButtonPrimary from "@/components/widgets/buttons/ButtonPrimary";
import Container from "@/components/widgets/containers/Container";
import ContainerFlow from "@/components/widgets/containers/ContainerFlow";
import ConverImage from "@/components/pages/home/CoverImage/CoverImage";
import MainSection from "@/components/pages/home/MainSection/MainSection";
import Major from "@/components/pages/home/Major/Major";
import ProfileContent from "@/components/pages/home/Profile/ProfileContent";
import Image from "next/image";
import { DocumentScannerOutlined } from "@mui/icons-material";
import DocumentationSection from "@/components/pages/home/Documentation/DocumentationSection";

export default function Home() {
  return <>
    <MainSection />
    <ProfileContent />
    <Major />
    <DocumentationSection />
  </>;
}
