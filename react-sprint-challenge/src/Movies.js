import React, {} from 'react'

export default function Movies(props) {
    
    const { data } = props;
    console.log( data );
    return(
        <div>
            {data.map(card => (
                <div>
                    <p>Episode {card.episode_id}: {card.title}</p>
                    <p>Director: {card.director}</p>
                    <p>Release Date: {card.release_date}</p>
                </div>
            ))}
        </div>
    )
}
