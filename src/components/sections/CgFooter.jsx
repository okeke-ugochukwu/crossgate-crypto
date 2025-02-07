import footerLinks from '@/db/footerLinks.json'
import '@/style/components/_cgFooter.scss'

import NewsLetterFrom from '@/components/forms/NewLetterForm'

import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { initFooterAnimation } from '@/animations/footer'

const cgFooter = () => {
   useEffect(() => {
      initFooterAnimation()
   })

   return (
      <footer className="footer">
         <div className="margin">

            <div className="footer__top">
               <div className="footer__form">
                  <div className="newsLetter__head">
                     <h4 className="base-text"> Join our newsletter </h4>
                     <p className="normal-text"> Ready to Experience Boundless Blockchain Freedom? </p>
                  </div>

                  <NewsLetterFrom />
               </div>

               <div className="footer__links">
                  {
                     footerLinks.map((linkGroup, linkGroupIdx) => {
                     return (
                           <ul 
                              key={`footer__linkGroup__${linkGroupIdx+1}`}
                              className={`footer__linkGroup __flg${linkGroupIdx+1}`}
                           >
                              <li className="normal-text">
                                 <span> { linkGroup[0] }</span>
                              </li>

                              {
                                 linkGroup[1].map((link, linkIdx) => {
                                    return (
                                       <li
                                          key={`footer__link__${linkIdx+1}`}
                                          className={`footer__link __fl${linkIdx+1} small-text`}
                                       >
                                          <Link to={ link.path }>
                                             { link.label }
                                          </Link>
                                       </li>
                                    )
                                 })
                              }
                           </ul>
                        )
                     })
                  }
               </div>
            </div>

            <div className="footer__bottom">
               {
                  'Crossgate'.split("").map((letter, idx) => {
                     return (
                        <span
                          className="crossgate"
                          key={`crossgate__letter__${letter}${idx}`}
                        >
                           { letter}
                        </span>
                     )
                  })
               }
            </div>
         </div>
      </footer>
   )
}

export default cgFooter