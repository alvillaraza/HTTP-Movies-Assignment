import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const initialItem = {
    director: '',
    metascore: '',
    actors: '',
};

const UpdateMovie = (props) => {
    const [updateMovie, setUpdateMovie] = useState(initialItem);
    const { id } = useParams();
    console.log(updateMovie);
    useEffect(() => {
        const movieToUpdate = props.movieList.find(movie => `${movie.id}` === id);
        if (movieToUpdate) {
            setUpdateMovie(movieToUpdate);
        }
    }, [props.movieList, id]);

    const changeHandler = e => {
        e.persist();
        let value = e.target.value;
    }

 
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     axios
    //         .put(`http://localhost:5000/movies/${id}`, movie)
    //         .then(res => {
            
    //     })
    // }

    return (
        <div>
            <h2>Update Movie</h2>
            <form>
                <input
                    type='text'
                    name='name'
                    onChange={changeHandler}
                    value={updateMovie.director} />
                
                <input
                    type='text'
                    name='metascore'
                    onChange={changeHandler}
                    value={updateMovie.metascore} />
                
                <input
                    type='text'
                    name='stars'
                    onChange={changeHandler}
                    value={updateMovie.stars} />
                
                <button>Update</button>
            </form>
        </div>
    )
};

export default UpdateMovie;