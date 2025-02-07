import { gsap } from "@/utils/useGsap";
import { breakpoints } from "@/animations";

function initTestimonialsAnimation() {
   
   let tstl = {
      meta: Array.from(document.querySelectorAll('.tstl__meta')),
      body: Array.from(document.querySelectorAll('.tstl__body')),
   }

   let fadeInTstlElements = tstl.meta.map((metaEl, idx) => {
      return gsap.to([tstl.meta[idx], tstl.body[idx]],{
         y: 0,
         opacity: 1,
         duration: .6,
         stagger: .06,
         ease: "power1",

         scrollTrigger : {
            trigger: tstl.meta[idx],
            start: () => `top 70%`,
            toggleActions: "restart none none reverse",
            invalidateOnRefresh: true
         }
      })
   })

   let fadeInTstlButtons = gsap.to('.tstls__navBttn', {
      margin: 0,
      opacity: 1,
      duration: .6,
      stagger: .06,
      ease: "power1",

      scrollTrigger : {
         trigger: '.tstls__nav',
         start: () => `top 75%`,
         toggleActions: "restart none none reverse",
         invalidateOnRefresh: true
      }
   })

  
}

export {
   initTestimonialsAnimation
}