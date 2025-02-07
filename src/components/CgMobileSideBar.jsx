import CgMainNav from "@/components/CgMainNav"
import AuxButton from "@/components/buttons/AuxButton";
import '@/style/components/_cgSideBar.scss';

const CgMobileSideBar = () => {
   return (
      <aside className="sidebar base-text">
         <CgMainNav
           className="mobile"
           aria-label="mobile-navigation"
         >
            <AuxButton 
               type="link"
               to="/"
               text="Join Our Discord"
            ></AuxButton>
         </CgMainNav>
      </aside>
   )
}

export default CgMobileSideBar