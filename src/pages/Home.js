import React, {useEffect, useState} from 'react';
import './Home.css'
import Tmdb from '../Tmdb';
import MovieRow from '../components/MovieRow/index.js';
import FeaturedMovie from '../components/FeaturedMovies/index.js';
import Header from '../components/Header/index.js';
import Footer from '../components/Footer/index.js';

 const Home = ({userFoto}) => {

  const [movieList, setMovieList ] = useState([]);
  const [featuredData, setfeaturedData ] = useState(null);
  const [blackHeader, setBlackHeader ] = useState(false);

 async function chooseFeatured(list) {
    let featured = list.filter(i=>i.slug==='trending')
    let randomChosen = Math.floor(Math.random() * featured[0].items.results.length -1)
    let chosen = featured[0].items.results[randomChosen];
    let chosenDetais = await Tmdb.getFeaturedInfo(chosen.id, chosen.media_type);
    setfeaturedData(chosenDetais);
  }

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      chooseFeatured(list);
    }
    loadAll();
  },[])

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      } else{
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return ()=>{
      window.removeEventListener('scroll', scrollListener);
    }

  },[])

  return(
    <div className='page'>
      <Header black={blackHeader} userFoto={userFoto}/>
      {featuredData &&
      <FeaturedMovie item={featuredData}/>}
      <section className='lists'>
        {movieList.map((item,key)=>(
          <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
        ))}
      </section>
      <Footer/>
    </div>
  );
}

export default Home;