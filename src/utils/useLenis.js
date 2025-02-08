/**
 * This composable manages lenis smooth scroll for both the window,
 * and for popups/modals. Primarily interats with the DOMStore [@/store/dom.js]
 */

import Lenis from '@studio-freight/lenis'
import { gsap, ScrollTrigger } from '@/utils/useGsap'

async function reInitLenis(store) {
   store.lenis.instance.resize()
   store.lenis.initialized = true
}

async function initLenis(store, payload) {

   const lenis = new Lenis({
      wrapper: payload ? payload.wrapper : window,
      content: payload ? payload.content : document.documentElement,
      autoResize: true,
      wheelMultiplier: 0.8,
      easing: (x) => Math.sqrt(1 - Math.pow(x - 1, 2))
   })

   lenis.on('scroll', () => {
      ScrollTrigger.update
   })

   gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
   })
   gsap.ticker.lagSmoothing(0)

   if (payload) {
      store.lenis[payload.el.catg][payload.el.name].initialized = true
      store.lenis[payload.el.catg][payload.el.name].instance = lenis
   }
   else {
      store.lenis.initialized = true
      store.lenis.instance = lenis

      //recalibrate on resize
      window.addEventListener('resize', reInitLenis(store))
   }

   ScrollTrigger.refresh()
}


export { initLenis }