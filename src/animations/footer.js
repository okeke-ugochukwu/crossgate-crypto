import { gsap } from "@/utils/useGsap";

function initFooterAnimation() {

   let flipCrossgateLetters =  gsap.to('.crossgate', {
      opacity: 1,
      duration: .6,
      stagger: .06,
      ease: "power1",

      scrollTrigger : {
         trigger: '.footer__bottom',
         start: () => `top 70%`,
         toggleActions: "restart none none reverse",
         invalidateOnRefresh: true
      }
   })
}

export {
   initFooterAnimation
}