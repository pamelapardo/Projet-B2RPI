import React, { useState, useEffect } from 'react'
import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";

export default function Metiers() {
  const [metiers, setMetiers] = useState([]);
  const fetchmetiers = async () => {
    await getDocs(collection(db, "Metiers")).then((querySnapshot) => {
      const mapMetiers = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setMetiers(mapMetiers);
    })
  }

  useEffect(() => {
    fetchmetiers();
  }, [])


  return (
    <div className='gestion_heigh'>
      <h1>Métiers</h1>
      <p className='tdb_card_p'>Observez les applications accésibles par les utilisateurs selon leur métier.</p>
      <div className='separator' />
      <table className='table_container'>
        <tr>
          <th>Métier</th>
          <th>Applications</th>
          <th>Modifier</th>
        </tr>
        {metiers.map((userProp) => {
          return (
            <tr>
              <td>{userProp.metier_name}</td>
              <td>{userProp.metier_id}</td>  {/* //C'est temporaire */}
              <td><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8.5" cy="8.5" r="8.5" fill="#D9D9D9" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46949 8.50138C3.74082 7.37479 3.8352 5.93857 4.59089 4.83531L6.53295 7.83791L8.96609 6.26417L7.02411 3.26168C8.34013 3.02505 9.68856 3.52797 10.4172 4.65447C11.1458 5.78101 11.0515 7.21715 10.2959 8.32039L12.6697 11.9905L10.2365 13.5642L7.86273 9.89413C6.54665 10.1308 5.19813 9.62793 4.46949 8.50138Z" fill="white" />
              </svg>
              </td>
            </tr>
          )
        })}
      </table>

    </div>
  )
}
