import React, {Component} from 'react';


import axios from "axios";
import MoviesListCard from '../MoviesListCard/MoviesListCard';


class MoviesList extends Component {
    state = {
        movies: []
    }

    componentDidMount()
    {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=2206d6893040e69cde3b8d1af61fd53d&language=en-US&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
            .then(res => {
                const movies = res.data.results;
                this.setState({movies});
                console.log(res)
            })
    }
    render() {
        return (
            <>


                {
                    this.state.movies.map(
                        movie =>
                            <MoviesListCard
                                    poster={movie.poster_path}
                                    title={movie.original_title}
                                    description={movie.overview}
                                    stars={movie.vote_average}
                                 />
                    )
                }
            </>
        );
    }


}

export default MoviesList;