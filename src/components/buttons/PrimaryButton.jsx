import '@/style/components/buttons/_primaryButton.scss'

import ButtonShineImg from '@/assets/imgs/svg/button-shine.svg'
import { Link } from 'react-router-dom'

const PrimaryButton = (props) => {   
   if (['button', 'submit'].includes(props.type)) {
      return (
         <button
           className={`primary-button ${props.className}`}
           type={ props.type }
         >
            <span> { props.text }</span>
            <img src={ ButtonShineImg } alt="." />
         </button>
      )
   }

   else {
      return (
         <Link
           to={props.to}
           className={`primary-button ${props.className}`}
         >
            <span> { props.text } </span>
            <img src={ ButtonShineImg } alt="." />
         </Link>
      )
   }
}

export default PrimaryButton