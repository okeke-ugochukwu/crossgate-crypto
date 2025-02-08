import { gsap } from "@/utils/useGsap";

function initHeroAnimation() {

   const tl = gsap.timeline({
      trigger: '.hero__wrapper',
      toggleActions: "complete complete complete complete",
      delay: .3,

      start: () => `-=1px top`,
      end: () => `top top`,

      invalidateOnRefresh: true,
   })

   let fadeInHeaderElements =  gsap.to(gsap.utils.toArray([
      '.header__pin', '.header__nav', '.header__actions'
   ]), {
      y: 0, x: 0,
      opacity: 1,
      duration: .6,
      ease: "power3.inOut"
   })

   
   let fadeInHeroContentElements = gsap.to(gsap.utils.toArray([
      '.hero__text .tag', '.hero__heading', 
      '.hero__subHeading', '.hero__CTA', '.hero__imgs'
   ]),{
      y: 0,
      opacity: 1,
      duration: .6,
      stagger: .03,
      ease: "power3.inOut"
   })

   tl
      .add(fadeInHeaderElements, "fadeInHeaderElements")
      .add(fadeInHeroContentElements, .1)
}

export {
   initHeroAnimation
}