import React from 'react'
import './profile.scss'
import {  signOut } from "firebase/auth";
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
 
  const handleLogout = () => {               
      signOut(auth).then(() => {
      // Sign-out successful.
          navigate("/");
          console.log("Signed out successfully")
      }).catch((error) => {
      // An error happened.
      });
  }
  return (
    <div className='profile_page_container'>

      <div className='profile_page_card'>
        <div className='items_left'>
          <div className='profile_photo_names_container'>
            <div className='profilePic' />
            <div>
              <p>Name</p>
              <strong>Lastname</strong>
            </div>
          </div>
          <div className='profile_label'>
            <label>Mail</label>
            <p>thisisamail@gmail.com</p>
          </div>
          <div className='profile_label'>
            <label>Mot de passe</label>
            <p>·····················</p>
          </div>
          <div className='profile_label'>
            <label>Métier</label>
            <p>Service technique d’Assistance à Proximité </p>
          </div>
          <div className='profile_label'>
            <label>Articles rédigés</label>
            <p>7</p>
          </div>
          <div className='profile_label last'>
            <label>Rôle</label>
            <p>Rédacteur</p>
          </div>
        </div>

        <div className='items_right'>
          <div className='profile_label'>
            <label>Besoin d'applications ?</label>
            <p>Rédacteur</p>
          </div>
          <div className='profile_label'>
            <label>Rôle</label>
            <p>Rédacteur</p>
          </div>
          <div className='profile_label'>
            <label>Rôle</label>
            <p>Rédacteur</p>
          </div>
          <button onClick={handleLogout} className='deco_btn'>Déconnexion</button>
        </div>
      </div>

    </div>
  )
}
