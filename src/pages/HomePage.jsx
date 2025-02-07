import HeroSection from "@/components/sections/HeroSection"
import StepsSection from "@/components/sections/StepsSection"
import AboutSection from "@/components/sections/about/AboutSection"
import TstlSection from "@/components/sections/testimonials/TstlSection"
import FaqSection from "@/components/sections/faq/FaqSection"
import CgFooter from "@/components/sections/CgFooter"

import { useEffect } from "react"
import { DOMStore } from "@/store/dom"

const HomePage = () => {
   useEffect(() => {
      
   })

   return (
      <>
         <HeroSection/>
         <AboutSection/>
         <StepsSection/>
         <TstlSection />
         <FaqSection />
         <CgFooter />
      </>
   )
}

export default HomePage