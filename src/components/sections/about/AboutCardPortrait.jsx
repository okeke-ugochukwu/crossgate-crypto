// import '@/style/components/sections/about/_aboutCard.scss'

const AboutCard = (props) => {
   return (
      <div className="aboutCard">

         <div className="aboutCard__els">
            { props.children }
         </div>

         <div className="aboutCard__text">
            <h3 className="heading-4">
               { props.title }
            </h3>

            <p className="normal-text">
               { props.descr }
            </p>
         </div>
      </div>
   )
}

export default AboutCard