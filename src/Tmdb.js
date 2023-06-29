const API_KEY = 'bbce41a88628a79575a90153a33558fd';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async(endpooint)=>{
    const req = await fetch(`${API_BASE}${endpooint}`);
    const jsonReq = await req.json();
    return jsonReq;
}

export default {
    getHomeList: async () => {
        return[
            {
                slug:  'trending',
                title: 'Recomendados',
                items:await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug:  'tvToprated',
                title: 'Séries populares',
                items:await basicFetch(`/tv/top_rated?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug:  'toprated',
                title: 'Em alta',
                items:await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
            },

            {
                slug:  'action',
                title: 'Ação',
                items:await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug:  'comedy',
                title: 'Comédia',
                items:await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug:  'horror',
                title: 'Terror',
                items:await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug:  'animation',
                title: 'Animação',
                items:await basicFetch(`/discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`),
            },

        ]
    },
    getFeaturedInfo: async(movieId, type)=>{
        let info = {};
        if(movieId){
            switch(type){
                case 'movie':
                    info=await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                case 'tv':
                    info=await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                default:
                    info={}
                break;
            }
            return info;
        }
    }
}