import { Link } from 'react-router-dom'

import CgMainNav from '@/components/CgMainNav'
import CgMobileSideBar from '@/components/CgMobileSideBar'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import AuxButton from '@/components/buttons/AuxButton'
import HamBurger from '@/components/buttons/HamBurger'

import '@/style/components/_cgHeader.scss'
import logoImg from '@/assets/imgs/svg/logo.svg'

const CgHeader = () => {
   return (
      <header className="header">
         <div className="header__pin">
            <Link to="/">
               <img src={ logoImg } alt="crossgate" />
            </Link>
         </div>

         <div className="header__nav">
            <CgMainNav
               className="desktop"
               aria-label="desktop-navigation"
            />
         </div>

         <input
            type="checkbox" id="sidebar__toggle"
            className="sidebar__toggle"
         />

         <CgMobileSideBar />

         <div className="header__actions">
            <div>
               <AuxButton 
                  type="link"
                  to="/"
                  text="Join Our Discord"
               ></AuxButton>

               <PrimaryButton 
                  type="link"
                  to="/"
                  text="Download"
               />
            </div>

            <HamBurger />
         </div>
      </header>
   )
}

export default CgHeader