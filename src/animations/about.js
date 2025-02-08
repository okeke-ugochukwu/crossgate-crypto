import { gsap } from "@/utils/useGsap";
import { breakpoints } from "@/animations";

function initAboutAnimation() {

   let fadeInHeadingElements =  gsap.to(gsap.utils.toArray([
      '.about__heading', '.about__subHeading'
   ]), {
      y: 0,
      opacity: 1,
      duration: .6,
      stagger: .06,
      ease: "power1",

      scrollTrigger : {
         trigger: '.about__heading',
         start: () => `top 70%`,
         toggleActions: "restart none none reverse",
         invalidateOnRefresh: true
      }
   })


   function runMobileTransition() {

      let fadeInCards = 
         gsap.utils.toArray('.aboutCard')
            .forEach((card) => {
               gsap.to(card, {
                  y: 0,
                  opacity: 1,
                  duration: .6,
                  ease: "power1",

                  scrollTrigger : {
                     trigger: card,
                     start: () => `top 70%`,
                     toggleActions: "restart none none reverse",
                     invalidateOnRefresh: true
                  }
               }) 
            })
   }

   function runDesktopTransition() {
      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: '.about__imgGrid',
            start: () => `top 70%`,
            toggleActions: "restart none none reverse",
            invalidateOnRefresh: true,
         }
      })

      let fadeInPortraitCards = gsap.to(gsap.utils.toArray([
         '.__lfs', '.__str'
      ]), {
         y: 0,
         opacity: 1,
         duration: .6,
         ease: "power1",
      })

      let fadeInLandscapeCards = gsap.to(gsap.utils.toArray([
         '.__lwfs ', '.__mcs'
      ]), {
         y: 0,
         opacity: 1,
         duration: .6,
         stagger: .06,
         ease: "power1",
      })

      tl
         .add(fadeInLandscapeCards, "fadeInLandscapeCards")
         .add(fadeInPortraitCards, .2)

   }
      
   // setup breakpoints & add animations
   let fadeInAboutElements = gsap.matchMedia()

   fadeInAboutElements
      .add(breakpoints.mobile, () => {
         runMobileTransition()
      })
      .add(breakpoints.desktop, () => {
         runDesktopTransition()
      })

}

export {
   initAboutAnimation
}