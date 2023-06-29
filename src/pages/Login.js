
import React from 'react';
import './Login.css'
import logoNetflix from '../logo netflix.png'
import NetflixBg from '../login-background.webp'

  import { useNavigate } from "react-router-dom";

 const Login = () => {

    const navigate = useNavigate();

    const handleProfile = () =>{
        return navigate('/profile');
    }

  return(
    <div >
        <img
        className='loginPage--bg'
        src={NetflixBg}
        alt='background da netflix'
        />
          <header>
            <img src={logoNetflix} alt='netflix logo'></img>
        </header>
        <div className='loginPage--body'>
            <div className='loginPage--box'>
                <h2> Entrar</h2>
                <form onSubmit={handleProfile}>
                    <div className='input--wrap'>
                        <input type='text' placeholder='Email ou número de telefone'></input>
                    </div>
                    <div className='input--wrap'>
                        <input type='password' placeholder='Senha'></input>
                    </div>
                    <div className='input--wrap'>
                        <button>Entrar</button>
                    </div>
                    <div className='loginPageSupport'>
                        <div className='loginPageSupport--remember'>
                            <span className='senha'>
                               <input type='checkbox'></input>
                               <span>Lembre-se de mim</span>
                            </span>
                            <div className='need--help'>
                                Preciso de ajuda
                            </div>
                        </div>
                    </div>
                </form>
                    <div className='loginPage--footer'>
                        <div className='loginPage--assine'>Novo por aqui?
                            <strong> Assine agora</strong>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  );
}

export default Login;