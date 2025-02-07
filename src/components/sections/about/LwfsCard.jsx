import { ReactComponent as User } from '@/assets/imgs/lwfs/user.svg'
import { ReactComponent as Money } from '@/assets/imgs/lwfs/money.svg'
import { ReactComponent as BitcoinPiggyBank } from '@/assets/imgs/lwfs/bitcoin-piggy-bank.svg'


const LfsCard = (props) => {
   return (
      <div className={`aboutCard __lwfs ${props.className}`}>

         <div className="aboutCard__els">
            <div className="iconBox__wrapper">
               <div className="iconBox">
                  <User />
               </div>

               <div className="divider__wrapper">
                  <div className="line"></div>

                  <div>
                     <div>
                        < Money className="money-icon"/>
                     </div>
                  </div>

                  <div className="line"></div>
               </div>

               <div className="iconBox">
                  <BitcoinPiggyBank />
               </div>
            </div>
         </div>

         <div className="aboutCard__text">
            <h3 className="heading-4">
               Low Fees
            </h3>

            <p className="normal-text">
               Enjoy competitive fees that don’t cut into your profits.
            </p>
         </div>
         
      </div>
   )
}

export default LfsCard