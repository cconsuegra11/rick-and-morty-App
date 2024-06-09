import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import "./styles/residentCard.css"

const ResidentCard = ( { info } ) => {

   const [ residente, getResident ] = useFetch()

   useEffect(() => {
    getResident( info )
   }, [])
   

  return (
    <article className='residentCard'>
        <figure className='residentCard_img'>
            <img src={residente?.image} alt='character image' />
            <figcaption className='residentCard_status'>
                <div className={`residentCard_circle ${residente?.status}`}></div>
                <span>{ residente?.status }</span>
            </figcaption>
        </figure>
        <h2 className='residentCard_name'>{ residente?.name }</h2>
        <hr className='residentCard_separator'/>
        <ul className='residentCard_list'>
            <li className='residentCard_item'><span> Specie: </span><span> { residente?.species }</span></li>
            <li className='residentCard_item'><span> Origin: </span><span> { residente?.origin.name }</span></li>
            <li className='residentCard_item'><span> Eppisodes where appear: </span><span> { residente?.episode.length }</span></li> 
        </ul>
    </article>
  )
}

export default ResidentCard