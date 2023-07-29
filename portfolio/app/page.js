import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import('../components/HeroSection/HeroSection'))
const Skills = dynamic(() => import('../components/HeroSection/Skills'))

export default function Home() {
  return (
    <>
     <HeroSection/>
     <Skills/>
    </>
  )
}
