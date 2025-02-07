import { gsap } from "@/utils/useGsap";
import { breakpoints } from "@/animations";

function initStepsAnimation() {

   let fadeInHeadingElements =  gsap.to(gsap.utils.toArray([
      '.steps__heading', '.steps__subHeading'
   ]), {
      y: 0,
      opacity: 1,
      duration: .6,
      stagger: .06,
      ease: "power1",

      scrollTrigger : {
         trigger: '.steps__heading',
         start: () => `top 70%`,
         toggleActions: "restart none none reverse",
         invalidateOnRefresh: true
      }
   })

   let fadeInBanner =  gsap.to(gsap.utils.toArray([
      '.steps__banner'
   ]), {
      y: 0,
      opacity: 1,
      duration: .6,
      stagger: .06,
      ease: "power1",

      scrollTrigger : {
         trigger: '.steps__banner',
         start: () => `top 70%`,
         toggleActions: "restart none none reverse",
         invalidateOnRefresh: true
      }
   })

   let textBlock = {
      headings: Array.from(document.querySelectorAll('.step__title')),
      descr: Array.from(document.querySelectorAll('.step__descr')),
   }

   let fadeInTextBlocks = textBlock.headings.map((heading, idx) => {
      return gsap.to([textBlock.headings[idx], textBlock.descr[idx]], {
         y: 0,
         opacity: 1,
         duration: .4,
         stagger: .04,
         ease: "power1",
         delay: () => {
            return window.matchMedia(breakpoints.desktop).matches ? idx * 0.1 : ''
         },
        
         scrollTrigger: {
            trigger: textBlock.headings[idx],
            start: () => `top 80%`,
            toggleActions: "restart none none reverse",
            invalidateOnRefresh: true
         }
      })
   })

   let statsBlock = {
      top: Array.from(document.querySelectorAll('.stat__top')),
      bottom: Array.from(document.querySelectorAll('.stat__bttm')),
   }

   let stretchOutDividers = gsap.utils.toArray('.steps__divider')
      .map((dividerEl, idx) => {
         return gsap.to(dividerEl,{
            width: "100%",
            duration: .6,
            stagger: .06,
            ease: "power1",

            scrollTrigger : {
               trigger: dividerEl,
               start: () => `top 80%`,
               toggleActions: "restart none none reverse",
               invalidateOnRefresh: true
            }
         })
      })

   let fadeInStatsHeading = gsap.to('.steps__bottomHeading',{
      y: 0,
      opacity: 1,
      duration: .6,
      stagger: .06,
      ease: "power1",

      scrollTrigger: {
         trigger: '.steps__bottomHeading:first-child',
         start: () => `top 80%`,
         toggleActions: "restart none none reverse",
         invalidateOnRefresh: true
      }
   })

   let fadeInStatsBlocks = statsBlock.top.map((heading, idx) => {
      return gsap.to([statsBlock.top[idx], statsBlock.bottom[idx]], {
         y: 0,
         opacity: 1,
         duration: .4,
         stagger: .04,
         ease: "power1",
         delay: () => {
            return window.matchMedia(breakpoints.desktop).matches ? idx * 0.1 : ''
         },
      
         scrollTrigger: {
            trigger: statsBlock.top[idx],
            start: () => `top 80%`,
            toggleActions: "restart none none reverse",
            invalidateOnRefresh: true
         }
      })
   })
}

export {
   initStepsAnimation
}