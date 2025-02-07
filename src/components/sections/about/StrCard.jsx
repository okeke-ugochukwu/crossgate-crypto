import { ReactComponent as SecurityLock } from '@/assets/imgs/str/security-lock.svg'
import { ReactComponent as Sparkles } from '@/assets/imgs/str/sparkles.svg'

const StrCard = (props) => {
   return (
      <div className={`aboutCard __str ${props.className}`}>
         <img
            className="aboutCard__bg"
            src="/src/assets/imgs/lfs/bg.png"
            alt="gold-matrix-background"
            loading="lazy"
         />

         <div className="aboutCard__els">

            <div className="strCards__wrapper">
               <div className="strCards">
                  <div className="strCards__inner">

                     <img
                     src="/src/assets/imgs/str/texture.png"
                     alt="texture-img"
                     />

                     <Sparkles className="sparkles" />
                     <Sparkles className="sparkles" />
                     <SecurityLock />
                     
                  </div>
               </div>
            </div>

         </div>

         <div className="aboutCard__text">
            <h3 className="heading-4">
               Secure Transactions
            </h3>

            <p className="normal-text">
               End-to-end encryption with decentralized validation.
            </p>
         </div>
      </div>
   )
}

export default StrCard