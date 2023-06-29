import React from "react";
import './style.css';
import userAvatar from '../../Netflix-avatar.png'
import logoNetflix from '../../logo netflix.png'
import { useNavigate } from "react-router-dom";

export default ({black, userFoto}) => {

    const navigate = useNavigate();

    const handleProfile = () =>{
        return navigate('/');
    }

    return (
        <header className={black ? 'black' : ''}>
            <div>
                <img src={logoNetflix} alt="logo da netflix"></img>
                <ul>
                    <li>Home</li>
                    <li>Séries</li>
                    <li>Filmes</li>
                    <li>Lançamentos</li>
                    <li>Sua lista</li>
                </ul>
            </div>
            <img src={userFoto ? userFoto : userAvatar} alt="avatar do usuario" onClick={handleProfile}></img>
        </header>
    )
}