import '@/style/components/buttons/_auxButton.scss'
import { Link } from 'react-router-dom'

const AuxButton = (props) => {   
   if (['button', 'submit'].includes(props.type)) {
      return (
         <button
           className="aux-button"
           type={ props.type }
         >
            { props.children } 
            <span> { props.text } </span>
         </button>
      )
   }

   else {
      return (
         <Link
           to= { props.to }
           className="aux-button"
         >
            { props.children } 
            <span> { props.text } </span>
         </Link>
      )
   }
}

export default AuxButton