import React from "react";
import './style.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

export default ({item}) =>{

    let date = new Date(item.release_date);

    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }

    return (
        <section className="featured" style={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }
        }>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                     <div className="featured--name">{item.title ? item.title : item.name}</div>
                        <div className="featured--info">
                        <div className="featured--points">{item.vote_average.toFixed(1)} pontos</div>
                        <div className="featured--year">{date.getFullYear()?date.getFullYear():2023}</div>
                        {item.number_of_seasons && <div className="featured--seasons">{`${item.number_of_seasons} `}
                        temporada{item.number_of_seasons !== 1 ? 's' : '' }</div>}
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchbutton">
                            <PlayArrowIcon style={{fontSize:30, margin:-8, paddingRight:10}}/>Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--mylistbutton">
                        <AddIcon style={{fontSize:30, margin:-8, paddingRight:10}}/>Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}