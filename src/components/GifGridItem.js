import React from 'react'
import animate__animated from 'animate.css';

export const GifGridItem = ({ id, title, url }) => {

      /* console.log(id, title, url); */

      return (
            <div className="card animate__animated animate__fadeInLeft">
                  <img src={url} alt={title} />
                  <p>{ title }</p>
            </div>
      )
}
