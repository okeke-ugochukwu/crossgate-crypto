import '@/style/components/forms/_newsLetterForm.scss'

import PrimaryButton from '@/components/buttons/PrimaryButton'
import { Link } from 'react-router-dom'

const NewLetterForm = () => {
   return (
      <div className="newsLetter__wrapper">
         <form className="newsLetter__form">
            <input
              type="email"
              name="newLetter__email"
              className="normal-text"
              id="newsLetter__email"
              placeholder="Enter your email"
            />

            <PrimaryButton 
               type="submit"
               text="Subscribe"
            />
         </form>
         
         <div className="newsLetter__foot">
            By subscribing you agree to with our <Link to='/'> Privacy Policy </Link>
         </div>
      </div>
   )
}

export default NewLetterForm