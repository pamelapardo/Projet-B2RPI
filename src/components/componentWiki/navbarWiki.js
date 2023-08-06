import React from 'react'
import { Link } from 'react-router-dom'
import './navbarWiki.scss'

const motsCleList = [
  {word:"Alorem"},
  {word:"Bonsecteur"},
  {word:"Caliqua"},
  {word:"Dolor"},
  {word:"Application"},
  {word:"Fabricatio"},
  {word:"Opsum"},
  {word:"Sit"},
  {word:"Velit"},
  {word:"Amet"},
  {word:"Red"},
  {word:"Arum"},
  {word:"Adisciping"}
]

export default function NavbarWiki() {
  return (
    <div className='navbar_wiki_container'>

      <div className='navbar_items'>
        <Link className='nav_link'>Wiki</Link>
      </div>
      <div className='navbar_items'>
        <Link className='nav_link'>Brouillons</Link>
      </div>
      <div className='navbar_items'>
        <p className='nav_link'>Tous les mots clé</p>
        <div className='mot_cle_container'>
          {motsCleList.map((mot,index)=> {
            return <p key={index}>{mot.word}</p>
          })}
        </div>
      </div>

      <div className='basic_articles_container'>
        <a href=' ' className='no_wrap'>
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3692 9.7744C13.0607 8.82824 13.4627 7.69738 13.4627 6.4825C13.4627 3.15621 10.449 0.459717 6.73135 0.459717C3.01373 0.459717 0 3.15621 0 6.4825C0 9.8088 3.01373 12.5053 6.73135 12.5053C7.74502 12.5053 8.70635 12.3048 9.56853 11.9458L14 14.0843L12.3692 9.7744Z" fill="#BDBDBD" />
          </svg>
          <p>Comment rédiger un bon article ?</p>
        </a>
        <a href=' ' className='no_wrap'>
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3692 9.7744C13.0607 8.82824 13.4627 7.69738 13.4627 6.4825C13.4627 3.15621 10.449 0.459717 6.73135 0.459717C3.01373 0.459717 0 3.15621 0 6.4825C0 9.8088 3.01373 12.5053 6.73135 12.5053C7.74502 12.5053 8.70635 12.3048 9.56853 11.9458L14 14.0843L12.3692 9.7744Z" fill="#BDBDBD" />
          </svg>
          <p>Solution, procèdure ou documentation ?</p>
        </a>
        <a href=' ' className='no_wrap'>
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3692 9.7744C13.0607 8.82824 13.4627 7.69738 13.4627 6.4825C13.4627 3.15621 10.449 0.459717 6.73135 0.459717C3.01373 0.459717 0 3.15621 0 6.4825C0 9.8088 3.01373 12.5053 6.73135 12.5053C7.74502 12.5053 8.70635 12.3048 9.56853 11.9458L14 14.0843L12.3692 9.7744Z" fill="#BDBDBD" />
          </svg>
          <p>Comment utiliser Markdown ?</p>
        </a>
        <a href=' ' className='no_wrap'>
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3692 9.7744C13.0607 8.82824 13.4627 7.69738 13.4627 6.4825C13.4627 3.15621 10.449 0.459717 6.73135 0.459717C3.01373 0.459717 0 3.15621 0 6.4825C0 9.8088 3.01373 12.5053 6.73135 12.5053C7.74502 12.5053 8.70635 12.3048 9.56853 11.9458L14 14.0843L12.3692 9.7744Z" fill="#BDBDBD" />
          </svg>
          <p>Trouver le bon mot clé</p>
        </a>
      </div>
    </div>
  )
}
