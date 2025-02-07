import '@/style/components/sections/_stepsSection.scss'
import transferSteps from '@/db/transferSteps.json'

import { useEffect } from 'react'
import { initStepsAnimation } from '@/animations/steps'

const StepsSection = () => {

   const floatingTokens = [ "polygon", "avalanche", "polkadot", "cardano"]

   useEffect(() => {
      initStepsAnimation()
   })

   return (
      <div className="steps__wrapper">
         <section className="steps">
            <div className="margin">

               <div className="steps__top">
                  <div className="steps__head">
                     <h2 className="heading-2 steps__heading fadeInUp">
                        Transfer in 3 Simple Steps
                     </h2>

                     <p className="base-text steps__subHeading fadeInUp">
                        Effortless Cross-Chain Transfers Made Simple and Secure
                     </p>
                  </div>

                  <div className="steps__body">
                     <div className="steps__banner fadeInUp">
                        <img
                           src="/src/assets/imgs/png/steps-banner.png"
                           alt="crossgate-yellow-pattern-background"
                           className="banner"
                           loading="lazy"
                        />

                        {
                           floatingTokens.map((token, idx) => {
                              return ( 
                                 <img
                                    key={`steps__token__${idx}`}
                                    src={ `/src/assets/imgs/png/3d-${token}.png` }
                                    alt={ `3d-${token}-coin `}
                                    className={ `steps__token ${token} `}
                                    loading="lazy"
                                 />
                              )
                           })
                        }
                     </div>

                     <div className="steps__text">
                        {
                           transferSteps.map((step, idx) => {
                              return (
                                 <div
                                   className="step"
                                   key={`step__${idx}`}
                                 >
                                    <h3 className="step__title heading-4 fadeInUp"> { step.title } </h3>
                                    <p className="step__descr base-text fadeInUp">{ step.descr } </p>
                                 </div>
                              )
                           })
                        }
                     </div>
                  </div>
               </div>

               <div className="steps__bottom">
                  <div className="steps__divider __sTopDr"></div>

                  <div className="heading-4">
                     <span className="steps__bottomHeading fadeInUp">Trusted by Thousands, Powering Millions</span> <br />
                     <span className="steps__bottomHeading fadeInUp">Join a thriving community of users who trust CrossGate.</span> 
                  </div>

                  <div className="steps__stats">
                     <div className="stat __st1">
                        <span className="stat__top fadeInUp">
                           $ <span className="stat__fig __st1Fig">2.4</span>B+
                        </span>

                        <span className="stat__bttm base-text fadeInUp"> Volume </span>
                     </div>

                     <div className="stat __st2">
                        <span className="stat__top fadeInUp">
                           <span className="stat__fig __st1Fig">1</span>M+
                        </span>

                        <span className="stat__bttm base-text fadeInUp"> Users </span>
                     </div>

                     <div className="stat __st3">
                        <span className="stat__top fadeInUp">
                           <span className="stat__fig __st1Fig">12</span>+
                        </span>

                        <span className="stat__bttm base-text fadeInUp"> Chains </span>
                     </div>
                  </div>

                  <div className="steps__divider __sBtmDr"></div>

               </div>

            </div>
         </section>
      </div>
   )
}

export default StepsSection