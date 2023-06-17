// Components 
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Profile from '../../components/Profile/Profile';
import ItemList from '../../components/ItemList/ItemList';

// States
import { useState } from 'react';

// Assets
import background from '../../assets/background.png';

// CSS
import './Home.css';

function App() {

  // Request
  const [user,setUser] = useState('')
  const [currentUser,setCurrentUser] = useState(null)
  const [repos,setRepos] = useState(null)

  const HandleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json()

    if (newUser.name){
      const {avatar_url, name, bio, login} = newUser
      setCurrentUser({avatar_url, name, bio, login})

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newRepos = await reposData.json()

      if (newRepos.length){
        setRepos(newRepos)
      }
    }
  }

  return (
    <div className="App">
      <Header/>
      <div className="content">
        <img src={background} className="imageBackground" alt="background app" />
        <div className="info">
          <div className="sectionTwo">
            <Input user={user} setUser={setUser}/>
            <Button event={HandleGetData}/>
          </div>
        {currentUser?.name ?
        <>
          <Profile currentUser={currentUser}/>
        </> : null}

        {repos?.length ?
        <div>
          <h4 className="repositorio">REPOSITÓRIOS</h4>
            {repos.map((repo) => (
                <ItemList title={repo.name} description={repo.description}/>
            ))}        
        </div> : null}
       
        </div>
      </div>
    </div>
  );
}

export default App;
