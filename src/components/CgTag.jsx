import '@/style/components/_cgTag.scss'
import { Link } from 'react-router-dom'

const CgTag = (props) => {
   return (
      <Link to="/" className={`tag ${props.className}`}> 
         <span> { props.text }</span>
         { props.children }
      </Link>

   )
}

export default CgTag