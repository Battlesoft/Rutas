import React from 'react';
import { useFetch } from 'use-http';
import { Link } from 'react-router-dom';

const Blog = () => {
    const { data, error, loading } = useFetch("https://rickandmortyapi.com/api/character");

    if (loading) return (<h1>Buscando el Morty adecuado...</h1>);
    if (error) return (<h1>La pistola de portales no funciona...</h1>);

    console.log(data.results);
    return (
        <>
            <h1>Blog - Elije tu personaje favorito</h1>
            <ul className="list-group">
                {
                    data.results.map(item => (
                        <Link 
                            className="list-group-item"
                            key={item.id}
                            to={`/blog/${item.id}`}
                        >
                            {item.name}
                        </Link>
                    ))
                }
            </ul>
        </>
    );
}

export default Blog;