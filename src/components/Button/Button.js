import './Button.css';

function Button({event}) {
    return (
      <div>
         <button className="btn" onClick={event}>Buscar</button>
      </div>
    )
  }
  
  export default Button