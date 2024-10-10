import Image from "next/image";
import Feature from "@/components/Feature";
import Hero from "../components/Hero";
import Services from "@/components/Services";
import Menu from "@/components/Menu";
import Survey from "@/components/Survey";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <Hero/>
      <Feature/>
      <Services/>
      <Menu/>
      <Survey/>
    </main>
  )   }