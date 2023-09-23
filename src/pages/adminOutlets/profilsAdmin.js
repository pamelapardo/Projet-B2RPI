import React, { useState, useEffect } from 'react'
import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";
import { Link } from 'react-router-dom';

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
            <div className='admin_link'>
                <Link className='md_editor_btn' to="/admin-Tableau-de-bord/*/gestion-de-utilisateurs">Revenir en arrière</Link>
            </div>
            <div className='admin_link'>
                <Link className='md_editor_btn' to="/admin-Tableau-de-bord/*/gestion-de-utilisateurs">Revenir en arrière</Link>
            </div>
            <div className='profil_container'>
                <div className='profile_photo_admin_container'>
                    <div className='profilePicAdmin' />
                    <div className='info_user'>
                        <strong>Jean</strong>
                        <strong>DUPONT</strong>
                    </div>
                </div>



                <div className='list_info_user'>
                    <div className='detail_info_user'>
                        <div className='profil_admin_infos'>
                            <div className='administration_form_container'>
                                <label className='label_style'>Prénom</label>
                                <p className='name_admin'>Jean</p>
                            </div>
                            <div className='modif-profil right-align-center'>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8.5" cy="8.5" r="8.5" fill="#D9D9D9" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46949 8.50138C3.74082 7.37479 3.8352 5.93857 4.59089 4.83531L6.53295 7.83791L8.96609 6.26417L7.02411 3.26168C8.34013 3.02505 9.68856 3.52797 10.4172 4.65447C11.1458 5.78101 11.0515 7.21715 10.2959 8.32039L12.6697 11.9905L10.2365 13.5642L7.86273 9.89413C6.54665 10.1308 5.19813 9.62793 4.46949 8.50138Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div className='profil_admin_infos'>
                            <div className='administration_form_container'>
                                <label className='label_style'>Nom</label>
                                <p className='name_admin'>DUPONT</p>
                            </div>
                            <div className='modif-profil right-align-center'>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8.5" cy="8.5" r="8.5" fill="#D9D9D9" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46949 8.50138C3.74082 7.37479 3.8352 5.93857 4.59089 4.83531L6.53295 7.83791L8.96609 6.26417L7.02411 3.26168C8.34013 3.02505 9.68856 3.52797 10.4172 4.65447C11.1458 5.78101 11.0515 7.21715 10.2959 8.32039L12.6697 11.9905L10.2365 13.5642L7.86273 9.89413C6.54665 10.1308 5.19813 9.62793 4.46949 8.50138Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div className='profil_admin_infos'>
                            <div className='administration_form_container'>
                                <label className='label_style'>Mail</label>
                                <p className='name_admin'>jean.DUPONT@mail.com</p>
                            </div>
                            <div className='modif-profil right-align-center'>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8.5" cy="8.5" r="8.5" fill="#D9D9D9" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46949 8.50138C3.74082 7.37479 3.8352 5.93857 4.59089 4.83531L6.53295 7.83791L8.96609 6.26417L7.02411 3.26168C8.34013 3.02505 9.68856 3.52797 10.4172 4.65447C11.1458 5.78101 11.0515 7.21715 10.2959 8.32039L12.6697 11.9905L10.2365 13.5642L7.86273 9.89413C6.54665 10.1308 5.19813 9.62793 4.46949 8.50138Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div className='profil_admin_infos'>
                            <div className='administration_form_container'>
                                <label className='label_style'>Mot de passe</label>
                                <p className='name_admin'>...........</p>
                            </div>
                            <div className='modif-profil right-align-center'>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8.5" cy="8.5" r="8.5" fill="#D9D9D9" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46949 8.50138C3.74082 7.37479 3.8352 5.93857 4.59089 4.83531L6.53295 7.83791L8.96609 6.26417L7.02411 3.26168C8.34013 3.02505 9.68856 3.52797 10.4172 4.65447C11.1458 5.78101 11.0515 7.21715 10.2959 8.32039L12.6697 11.9905L10.2365 13.5642L7.86273 9.89413C6.54665 10.1308 5.19813 9.62793 4.46949 8.50138Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div className='profil_admin_infos'>
                            <div className='administration_form_container'>
                                <label className='label_style'>Métier</label>
                                <p className='name_admin'>Service Technique d’Assistance à Proximité <br />
                                    Utilisateur générique<br />
                                    Administrateur IML<br />
                                    Sécurité & Habilitations du CSA
                                </p>
                            </div>
                            <div className='modif-profil right-align-center'>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8.5" cy="8.5" r="8.5" fill="#D9D9D9" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46949 8.50138C3.74082 7.37479 3.8352 5.93857 4.59089 4.83531L6.53295 7.83791L8.96609 6.26417L7.02411 3.26168C8.34013 3.02505 9.68856 3.52797 10.4172 4.65447C11.1458 5.78101 11.0515 7.21715 10.2959 8.32039L12.6697 11.9905L10.2365 13.5642L7.86273 9.89413C6.54665 10.1308 5.19813 9.62793 4.46949 8.50138Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>



                    <div className='detail_info_user'>
                        <div className='profil_admin_infos'>
                            <div className='administration_form_container'>
                                <label className='label_style'>ID</label>
                                <p className='name_admin'>29</p>
                            </div>
                            <div className='modif-profil right-align-center'>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8.5" cy="8.5" r="8.5" fill="#D9D9D9" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46949 8.50138C3.74082 7.37479 3.8352 5.93857 4.59089 4.83531L6.53295 7.83791L8.96609 6.26417L7.02411 3.26168C8.34013 3.02505 9.68856 3.52797 10.4172 4.65447C11.1458 5.78101 11.0515 7.21715 10.2959 8.32039L12.6697 11.9905L10.2365 13.5642L7.86273 9.89413C6.54665 10.1308 5.19813 9.62793 4.46949 8.50138Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div className='profil_admin_infos'>
                            <div className='administration_form_container'>
                                <label className='label_style'>Code agent</label>
                                <p className='name_admin'>USER25162</p>
                            </div>
                            <div className='modif-profil right-align-center'>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8.5" cy="8.5" r="8.5" fill="#D9D9D9" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46949 8.50138C3.74082 7.37479 3.8352 5.93857 4.59089 4.83531L6.53295 7.83791L8.96609 6.26417L7.02411 3.26168C8.34013 3.02505 9.68856 3.52797 10.4172 4.65447C11.1458 5.78101 11.0515 7.21715 10.2959 8.32039L12.6697 11.9905L10.2365 13.5642L7.86273 9.89413C6.54665 10.1308 5.19813 9.62793 4.46949 8.50138Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div className='profil_admin_infos'>
                            <div className='administration_form_container'>
                                <label className='label_style'>Articles</label>
                                <p className='name_admin'>8</p>
                            </div>
                            <div className='modif-profil right-align-center'>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8.5" cy="8.5" r="8.5" fill="#D9D9D9" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46949 8.50138C3.74082 7.37479 3.8352 5.93857 4.59089 4.83531L6.53295 7.83791L8.96609 6.26417L7.02411 3.26168C8.34013 3.02505 9.68856 3.52797 10.4172 4.65447C11.1458 5.78101 11.0515 7.21715 10.2959 8.32039L12.6697 11.9905L10.2365 13.5642L7.86273 9.89413C6.54665 10.1308 5.19813 9.62793 4.46949 8.50138Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div className='profil_admin_infos'>
                            <div className='administration_form_container'>
                                <label className='label_style'>Dernière connexion</label>
                                <p className='name_admin'>19/02/2023</p>
                            </div>
                            <div className='modif-profil right-align-center'>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8.5" cy="8.5" r="8.5" fill="#D9D9D9" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46949 8.50138C3.74082 7.37479 3.8352 5.93857 4.59089 4.83531L6.53295 7.83791L8.96609 6.26417L7.02411 3.26168C8.34013 3.02505 9.68856 3.52797 10.4172 4.65447C11.1458 5.78101 11.0515 7.21715 10.2959 8.32039L12.6697 11.9905L10.2365 13.5642L7.86273 9.89413C6.54665 10.1308 5.19813 9.62793 4.46949 8.50138Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div className='profil_admin_infos'>
                            <div className='administration_form_container'>
                                <label className='label_style'>Rôle</label>
                                <p className='name_admin'>Rédacteur</p>
                            </div>
                            <div className='modif-profil right-align-center'>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8.5" cy="8.5" r="8.5" fill="#D9D9D9" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46949 8.50138C3.74082 7.37479 3.8352 5.93857 4.59089 4.83531L6.53295 7.83791L8.96609 6.26417L7.02411 3.26168C8.34013 3.02505 9.68856 3.52797 10.4172 4.65447C11.1458 5.78101 11.0515 7.21715 10.2959 8.32039L12.6697 11.9905L10.2365 13.5642L7.86273 9.89413C6.54665 10.1308 5.19813 9.62793 4.46949 8.50138Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='btn_supp_user'>
                <button className='btn_admin'>Supprimer</button>
            </div>
        </div>
    )
}
