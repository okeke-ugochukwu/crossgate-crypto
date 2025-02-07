import { ReactComponent as Minus } from '@/assets/imgs/svg/minus.svg'

const FaqBlock = (props) => {
   return (
      <label 
         className={` ${props.className} faqBlock__wrapper base-text` }
         htmlFor={ `faq__toggle__${props.idx}` }
         id={ props.id } 
      >

         <input
           type="radio"
           name="faq__toggle"
           id={ `faq__toggle__${props.idx}`}
         />

         <div className="faqBlock">
            <div className="faqBlock__content ">
               <h4> { props.faq.question } </h4>
               <p > { props.faq.answer }</p>
            </div>

           
            <label  htmlFor={ `faq__toggle__${props.idx}` }>
               <Minus />
               <Minus />
            </label>
         </div>
      </label>
   )
}

export default FaqBlock