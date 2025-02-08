import '@/style/components/sections/_heroSection.scss'

import HeroImg from '@/assets/imgs/webp/crossgate-mobile-screenshot.webp'
import TonImg  from '@/assets/imgs/png/3d-ton.png'
import BitCoinImg  from '@/assets/imgs/png/3d-bitcoin.png'

import CgTag from "@/components/CgTag"
import CgHeader from "@/components/CgHeader"
import PrimaryButton from "@/components/buttons/PrimaryButton"

import { useEffect } from 'react'
import { initHeroAnimation } from '@/animations/hero'
import StarsBg from '@/components/sections/StarsBg'

const HeroSection = () => {
   useEffect(() => {
      initHeroAnimation()
   })

   return (
      <div className="hero__wrapper">
         <section className="hero">
            <div className="margin">
               <StarsBg />

               <img
                 src="/src/assets/imgs/webp/lights.webp"
                 alt="lights"
                 className="hero__lights"
               />

               <CgHeader />

               <div className="hero__text normal-text">
                  <CgTag text="We just raised a 3m seed round" className="fadeInUp">
                     <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
                        <path d="M9.00012 3.5L1.50012 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 1L8.79289 2.79289C9.12623 3.12623 9.29289 3.29289 9.29289 3.5C9.29289 3.70711 9.12623 3.87377 8.79289 4.20711L7 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                  </CgTag>

                  <div>
                     <h1 className="heading-1 hero__heading fadeInUp">
                        Unlock the Full Potential of Your Digital Assets
                     </h1>

                     <p className="base-text hero__subHeading fadeInUp">
                        Move your crypto assets between blockchains in minutes, not hours
                     </p>
                  </div>

                  <PrimaryButton 
                     type="link"
                     to="/"
                     className="hero__CTA fadeInUp"
                     text="Download CrossGate"
                  />
               </div>

               <div className="hero__imgs fadeInUp">
                  <div>
                     <img
                        className="hero__img"
                        src={ HeroImg }
                        alt="crossgate-mobile-screenshot"
                     />

                     <img
                        className="hero__tokens __ton"
                        src={ TonImg } alt="3d-ton"
                     />

                     <img
                        className="hero__tokens __bitcoin"
                        src={ BitCoinImg } alt="3d-ton"
                     />
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default HeroSection