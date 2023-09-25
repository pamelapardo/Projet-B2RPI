import React, { useState, useEffect } from 'react'
import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";
import { Link } from 'react-router-dom';

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
            <div className='admin_container'>
                <Link className='md_editor_btn' to="/admin-Tableau-de-bord/*/metiers">Revenir en arrière</Link>
                <p className='title_admin_metier'>Service Technique d’Assistance à Proximité</p>
            </div>
            <div className='list_admin_metier'>
                <div className='app_metier'>
                    <div className='profil_admin_infos'>
                        <label className='label_style'>LAPS<br/>
                            KeyPass3b<br/>
                            Gestion - RH<br/>
                            Adobe Photoshop<br/>
                            Edge<br/>
                            Google Chrome<br/>
                            AD<br/>
                            Figma<br/>
                            Kasm<br/>
                            Cisco VPN connect<br/>
                            Guardian - Gestion batiment<br/>
                            ASO v4<br/>
                            VS Code<br/>
                            Visual Studio<br/>
                            Teams<br/>
                            Outlook<br/>
                            VM Horizon<br/>
                        </label>
                    </div>
                </div>

                <div className='app_metier'>
                    <div className='btn_princip'>
                    <button className='btn_admin'>Ajouter</button>
                    <button className='btn_admin'>Supprimer</button>
                    </div>
                </div>


                <div className='app_metier'>
                    <div className='profil_admin_infos'>
                        <label className='label_style'>
                            LAPS<br/>
                            KeyPass3<br/>
                            Gestion - RH<br/>
                            Adobe Photoshop<br/>
                            Edge<br/>
                            Google Chrome<br/>
                            AD<br/>
                            Figma<br/>
                            Kasm<br/>
                            Cisco VPN connect<br/>
                            Guardian - Gestion batiment<br/>
                            ASO v4<br/>
                            VS Code<br/>
                            Visual Studio<br/>
                            Teams<br/>
                            Outlook<br/>
                            VM Horizon<br/>
                            AD<br/>
                            Figma<br/>
                            Kasm<br/>
                            Cisco VPN connect<br/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}