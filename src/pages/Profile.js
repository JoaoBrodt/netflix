
import React from 'react';
import './Profile.css'
import logoNetflix from '../logo netflix.png'
import userAvatarPadrao from '../Netflix-avatar.png'
import userAvatarCobraKai from '../netflix-avatar-cobraKai.png'
import userAvatarPadrao2 from '../netflix-avatar-padrao2.png'
import userAvatarUmbrelaAcademy from '../netflix-avatar-umbrela.png'
  import { useNavigate } from "react-router-dom";

 const Profile = () => {

    const navigate = useNavigate();

    const handleHome = () =>{
        return navigate('/home');
    }

  const users = [
    {name:'Miguel',
    foto:userAvatarCobraKai},
    {name:'João',
    foto:userAvatarPadrao},
    {name:'Número 5',
    foto:userAvatarUmbrelaAcademy},
    {name:'User',
    foto:userAvatarPadrao2},
];

  return(
    <div >
        <header>
            <img src={logoNetflix} alt='netflix logo'></img>
        </header>
        <div className='watchingProfile' >
            <p>Quem está assistindo?</p>
            <ul className='userList'>
              {users.map((item, key)=>(
               <li onClick={handleHome} userFoto={item.foto}>
                <img src={item.foto} key={key} alt='logo do usuario'/>
                <p>{item.name}</p>
              </li>
              ))}
            </ul>
        </div>
    </div>
  );
}

export default Profile;