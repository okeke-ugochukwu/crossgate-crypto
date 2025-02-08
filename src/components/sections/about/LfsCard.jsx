import { ReactComponent as Rocket } from '@/assets/imgs/lfs/rocket-launch.svg'
import { ReactComponent as BlurredPolygon } from '@/assets/imgs/lfs/polygon-2.svg'

const LfsCard = (props) => {
   return (
      <div className={`aboutCard __lfs ${props.className}`}>
         <img
            className="aboutCard__bg"
            src="/imgs/lfs/bg.png"
            alt="gold-matrix-background"
            loading="lazy"
         />

         <div className="aboutCard__els">
            <div>
               <BlurredPolygon />

               <img
                  src="/imgs/lfs/polygon.svg"
                  className="__lfs__polygon" alt="polygon" 
               />
              
              <Rocket />
            </div>
         </div>

         <div className="aboutCard__text">
            <h3 className="heading-4">
               Lightning Fast
            </h3>

            <p className="normal-text">
               No more waiting hours for confirmations. Complete transfers in minutes.
            </p>
         </div>
      </div>
   )
}

export default LfsCard