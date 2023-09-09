import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './adminPages.scss'

export default function AdminPages() {
  return (
    <div className='AdminPage_container'>
      <div className='menuAdmin_container'>
        <div className='menuAdmin_logo_container'>
          <svg width="100" height="35" viewBox="0 0 226 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7079 35.648L4.08593 54H0.31193L22.5859 0.719998H24.6579L47.0059 54H43.0099L35.3879 35.648H11.7079ZM23.3999 6.64C23.3506 6.68933 23.2519 6.98533 23.1039 7.528C22.4133 9.64933 21.7473 11.45 21.1059 12.93L12.9659 32.614H34.1299L25.9899 13.004C24.2633 9.25466 23.3999 7.13333 23.3999 6.64ZM57.0763 54V6.196C61.319 5.85066 64.9203 5.678 67.8803 5.678C72.419 5.678 76.1683 6.862 79.1283 9.23C82.0883 11.5487 83.5683 14.8787 83.5683 19.22C83.5683 22.1307 82.7296 24.8193 81.0523 27.286C79.375 29.7527 77.4756 31.7507 75.3543 33.28C81.225 41.0747 84.851 45.7367 86.2323 47.266C89.0443 50.1767 92.103 51.8293 95.4083 52.224L95.3343 54.518C92.5716 54.4687 90.327 54.074 88.6003 53.334C86.8736 52.5447 85.147 51.2373 83.4203 49.412C81.743 47.5867 78.0183 42.678 72.2463 34.686C68.2503 34.686 64.3283 34.5627 60.4803 34.316V54H57.0763ZM70.3963 31.874C72.3203 31.874 74.3923 30.5913 76.6123 28.026C78.8323 25.4607 79.9423 22.476 79.9423 19.072C79.9423 15.668 78.783 13.078 76.4643 11.302C74.1456 9.526 71.1363 8.638 67.4363 8.638C65.463 8.638 63.1443 8.73666 60.4803 8.934V31.504C64.0323 31.7507 67.3376 31.874 70.3963 31.874ZM131.254 5.974L110.756 29.136C118.846 38.9533 124.372 45.1693 127.332 47.784C130.341 50.3987 133.326 51.8787 136.286 52.224L136.212 54.518C133.449 54.4687 131.204 54.074 129.478 53.334C127.751 52.5447 126.222 51.5087 124.89 50.226C123.558 48.9433 120.696 45.8107 116.306 40.828C111.964 35.796 108.708 31.948 106.538 29.284L127.184 5.974H131.254ZM105.502 5.974V54H102.098V5.974H105.502ZM180.79 54V29.728H147.416V54H144.012V5.974H147.416V26.694H180.79V5.974H184.194V54H180.79ZM201.969 54V5.974H224.391V8.934H205.373V26.398H222.541V29.284H205.373V50.892H225.131V54H201.969Z" fill="#ffffff" />
          </svg>
        </div>
        <NavLink to='*/tableau-de-bord' className={({isActive}) => isActive ? 'menuAdmin_items_active' : 'menuAdmin_items'}>Tableau de bord</NavLink>
        <NavLink to='*/gestion-de-utilisateurs' className={({isActive}) => isActive ? 'menuAdmin_items_active' : 'menuAdmin_items'}>Géstion d'utilisateurs</NavLink>
        <NavLink to='*/metiers' className={({isActive}) => isActive ? 'menuAdmin_items_active' : 'menuAdmin_items'}> Métiers</NavLink>
        <NavLink to='*/administration' className={({isActive}) => isActive ? 'menuAdmin_items_active' : 'menuAdmin_items last_item'}>Administration</NavLink>
      </div>


      <div className='adminPage_pages_space'>
        <div className='adminPage_header'>
          <p className='adminPage_titre'>Administrateur</p>
          <NavLink to=''><div className='tiny_profile_pic' ></div></NavLink>
        </div>
        <div className='adminPage_outlet'>
          
          
          <Outlet/>
          
          
          
          </div>
      </div>
    </div>
  )
}
