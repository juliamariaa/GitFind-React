import './Input.css';

function Input({user,setUser}) {
    return (
      <div>
          <input type="text"
            name="usuario"  
            placeholder="@username"
            value={user}
            onChange={(event)=> setUser(event.target.value)} 
          />
      </div>
    )
  }
  
export default Input