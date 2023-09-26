import React, { useState, useEffect } from 'react'
import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";
import { NavLink } from 'react-router-dom';

export default function GestionUtilisateurs() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    await getDocs(collection(db, "Users")).then((querySnapshot) => {
      const mapUsers = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setUsers(mapUsers);
    })
  }

  useEffect(() => {
    fetchUsers();
  }, [])


  return (
    <div className='gestion_heigh'>
      <h1>Gestion d’utilisateurs</h1>
      <p className='tdb_card_p'>Ajoutez, supprimez ou modifiez les utilisateurs de l’application.</p>
      <div className='separator' />
      <table className='table_container'>
        <tr>
          <th>ID</th>
          <th>Code Agent</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Mail</th>
          <th>Articles</th>
          <th>Dernière connexion</th>
          <th>Modifier</th>
        </tr>
        {users.map((userProp) => {
          return (
            <tr>
              <td>{userProp.user_id}</td>
              <td>{userProp.user_code}</td>
              <td>{userProp.user_lastname}</td>
              <td>{userProp.user_name}</td>
              <td>{userProp.user_mail}</td>
              <td>{userProp.user_articles}</td>
              <td>{userProp.user_last_log}</td>
              <td><NavLink to="/admin-Tableau-de-bord/*/profil-de-utilisateur/utilisateur-selected" ><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8.5" cy="8.5" r="8.5" fill="#D9D9D9" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46949 8.50138C3.74082 7.37479 3.8352 5.93857 4.59089 4.83531L6.53295 7.83791L8.96609 6.26417L7.02411 3.26168C8.34013 3.02505 9.68856 3.52797 10.4172 4.65447C11.1458 5.78101 11.0515 7.21715 10.2959 8.32039L12.6697 11.9905L10.2365 13.5642L7.86273 9.89413C6.54665 10.1308 5.19813 9.62793 4.46949 8.50138Z" fill="white" />
              </svg></NavLink>
              </td>
            </tr>
          )
        })}
      </table>

    </div>
  )
}
