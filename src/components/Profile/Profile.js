import './Profile.css';

function Profile({currentUser}){
    return(
        <div>
            <div className="profile">
                <img src={currentUser.avatar_url} 
                    className="profileImg" alt="imagem de perfil" 
                />
                <div className="description">
                    <h3>{currentUser.name}</h3>
                    <span>@{currentUser.login}</span>
                    <p>{currentUser.bio}</p>
                </div>
            </div>
            <hr/>            
        </div>
    )
}

export default Profile