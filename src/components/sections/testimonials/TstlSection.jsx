import testimonials from '@/db/testimonials.json'
import '@/style/components/sections/testimonials/_tstlSection.scss'

import { ReactComponent as ArrowLeft } from '@/assets/imgs/svg/arrow-left.svg'
import { ReactComponent as ArrowRight } from '@/assets/imgs/svg/arrow-right.svg'

import TstlNavBtn from '@/components/sections/testimonials/TstlNavBtn'

import { useEffect } from 'react'
import { initTestimonialsAnimation } from '@/animations/tstl'

const TestimonialSection = () => {

   useEffect(()=> {
      initTestimonialsAnimation()
   })
      
   function scrollContent(direction) {
      var contentWrapper = document.querySelector('.tstls__content')
      direction === 'forward'
         ? contentWrapper.scrollLeft += contentWrapper.offsetWidth
         : contentWrapper.scrollLeft -= contentWrapper.offsetWidth
      
   }

   return (
      <div className="tstls__wrapper">
         <section className="tstls">
            <div className="margin">

               <div className="tstls__content no-scrollbar"> 
                     {
                        testimonials.map((tstl, idx) => {
                           return (
                              <div
                                className="tstl"
                                key={`tstl__${idx}`}
                              >
                                    <div className="tstl__meta fadeInUp">
                                       <img
                                       src="/imgs/png/avatar.png"
                                       alt="avatar" className="tstl__avatar"
                                       />

                                       <span className="normal-text"> 
                                          { tstl.author }
                                       </span>
                                    </div>

                                    <div className="tstl__body fadeInUp">
                                       “{ tstl.body }”
                                    </div>
                              </div>
                           )
                        })
                     }
               </div>

               <div className="tstls__nav">
                  <TstlNavBtn onClick={() => scrollContent('backward')}>
                     <ArrowLeft/>
                  </TstlNavBtn>

                  <TstlNavBtn onClick={() => scrollContent('forward')}>
                     <ArrowRight/>
                  </TstlNavBtn>
               </div>
               
            </div>
         </section>
      </div>
   )
}

export default TestimonialSection