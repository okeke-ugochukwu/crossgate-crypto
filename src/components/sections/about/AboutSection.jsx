import '@/style/components/sections/about/_aboutSection.scss'
import '@/style/components/sections/about/_aboutCard.scss'

import LfsCard from '@/components/sections/about/LfsCard'
import LwfsCard from '@/components/sections/about/LwfsCard'
import StrCard from '@/components/sections/about/StrCard'
import McsCard from '@/components/sections/about/McsCard'

import { useEffect } from 'react'
import { initAboutAnimation } from '@/animations/about'

const AboutSection = () => {

   useEffect(() => {
      initAboutAnimation()
   })

   return (
      <div className="about__wrapper">
         <section className="about">
            <div className="margin">

               <div className="about__text">
                  <h2 className="heading-2 about__heading fadeInUp">
                     Gateway to Effortless Cross-Chain Transfers
                  </h2>

                  <p className="base-text about__subHeading fadeInUp">
                     We empower you to move your digital assets freely across multiple blockchain networks with ease, security, and speed.
                  </p>
               </div>

               <div className="about__imgGrid">
                  <LfsCard className="fadeInUp" />
                  <LwfsCard className="fadeInUp" />
                  <McsCard className="fadeInUp" />
                  <StrCard className="fadeInUp" />
               </div>

            </div>
         </section>
      </div>
   )
}

export default AboutSection