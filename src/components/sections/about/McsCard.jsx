import { ReactComponent as Blockchain } from '@/assets/imgs/mcs/blockchain.svg'

const LfsCard = (props) => {
   return (
      <div className={`aboutCard __mcs ${props.className}`}>

         <div className="aboutCard__els">
            <div className="blkBox__wrapper">
               <div>
                  < Blockchain />
               </div>
            </div>
         </div>

         <div className="aboutCard__text">
            <h3 className="heading-4">
               Multi-Chain Support
            </h3>

            <p className="normal-text">
               Transfer across major blockchains like 
               Ethereum, Solana, and Binance Smart Chain
            </p>
         </div>
         
      </div>
   )
}

export default LfsCard