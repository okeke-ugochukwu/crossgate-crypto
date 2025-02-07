import '@/style/components/sections/_faqSection.scss'

import FaqBlock from '@/components/sections/faq/FaqBlock'
import faqs from '@/db/faqs.json'

import { useEffect } from 'react'
import { initFaqAnimation } from '@/animations/faq'

const FaqSection = () => {
   useEffect(() => {
      initFaqAnimation()
   })

   return (
      <div className="faqs__wrapper">
         <section className="faqs">
            <div className="margin">

               <div className="margin__inner">

                  <div className="faqs__head">
                     <h2 className="heading-2 faqs__heading fadeInUp">
                        Frequently Asked questions
                     </h2>

                     <p className="base-text faqs__subHeading fadeInUp">
                        Let’s answers any questions you may have
                     </p>
                  </div>

                  <div className="faqs__content">
                     {
                        faqs.map((faq, idx) => {
                           return (
                              <FaqBlock 
                                 key={ `faq__${idx}`}
                                 id={ `faqBlock__${idx}`}
                                 className={ `faqBlock__${idx} fadeInUp`}
                                 faq={ faq } idx={ idx }
                              />
                           )
                        })
                     }
                  </div>

               </div>

               <div className="faqs__divider"></div>
               
            </div>
         </section>

      </div>
   )
}

export default FaqSection