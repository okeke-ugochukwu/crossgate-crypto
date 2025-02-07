import { gsap } from "@/utils/useGsap";
import { breakpoints } from "@/animations";

function initFaqAnimation() {

   let fadeInHeadingElements =  gsap.to(gsap.utils.toArray([
      '.faqs__heading', '.faqs__subHeading'
   ]), {
      y: 0,
      opacity: 1,
      duration: .6,
      stagger: .06,
      ease: "power1",

      scrollTrigger : {
         trigger: '.faqs__heading',
         start: () => `top 70%`,
         toggleActions: "restart none none reverse",
         invalidateOnRefresh: true
      }
   })

  let fadeInFaqBlocks =  gsap.to('.faqBlock__wrapper', {
      y: 0,
      opacity: 1,
      duration: .6,
      stagger: .06,
      ease: "power1",

      scrollTrigger : {
         trigger: '.faqBlock__wrapper:first-child',
         start: () => `top 70%`,
         toggleActions: "restart none none reverse",
         invalidateOnRefresh: true
      }
   })

   let stretchOutDivider =  gsap.to('.faqs__divider', {
         width: "100%",
         duration: .6,
         stagger: .06,
         ease: "power1",

         scrollTrigger : {
            trigger: '.faqs__divider',
            start: () => `top 80%`,
            toggleActions: "restart none none reverse",
            invalidateOnRefresh: true
         }
      })
}

export {
   initFaqAnimation
}