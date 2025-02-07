/* eslint-disable react/prop-types */
import routes from '@/db/routes.json'
import '@/style/components/_cgMainNav.scss'

const CgMainNav = (props) => {
   return (
      <nav className={ `${props.className}` }>
         <ul>
            {
               routes.map((route, idx) => (
                  <li key={`desktop__nav__link__${idx + 1}`}> {route.label} </li>
               ))
            }
         </ul>

         { props.children }
      </nav>
   )
}

export default CgMainNav