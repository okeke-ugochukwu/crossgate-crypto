const TstlNavBtn = (props) => {
   return (
      <button
         onClick={props.onClick}
         className="tstls__navBttn"
         type="button"
      >
         {props.children}
      </button>
   )
}

export default TstlNavBtn