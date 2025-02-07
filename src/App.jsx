import { 
   Route,
   createBrowserRouter, 
   createRoutesFromElements, 
   RouterProvider, 
} from "react-router-dom"

import { initLenis } from "@/utils/useLenis"
import { useEffect, useRef, createContext } from "react"
import { DOMStore } from "@/store/dom"

import DefaultLayout from "@/layouts/DefaultLayout"
import HomePage from "@/pages/HomePage"

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={ <DefaultLayout/> }>
         <Route index element={ <HomePage /> } />
      </Route>
   )
)

const App = () => {
   const lenis = useRef({
      initialized: false,
      instance: null,
   })
   
   useEffect(() => {
      initLenis(DOMStore)

      // Cleanup on unmount
      return () => {
         DOMStore.lenis.instance.destroy();
      };
   })

   return <RouterProvider router={ router } />
}

export { App as default }
