import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import('../components/HeroSection/HeroSection'))
const Skills = dynamic(() => import('../components/HeroSection/Skills'))
const JobSkills = dynamic(() => import('../components/JobSkills/JobSkills'))
const Contact = dynamic(() => import('../components/Contact/ContactUs'))

export default function Home() {
  return (
    <>
     <HeroSection/>
     <Skills/>
     <JobSkills/>
     <Contact/>
    </>
  )
}
