import React from 'react'

export default function Administration() {
  return (
    <div className='gestion_heigh'>
      <h1>Administration</h1>
      <p className='tdb_card_p'>Contactez les développeurs pour ajouter des métiers ou des applications.</p>
      <div className='separator' />
      <h3>Qu’est ce que vous voulez nous demander ?</h3>
      <p>Si vous souhaitez ajouter un nouveau métier ou une nouvelle application, nous avons la solution. Selectionez une des boites ci-dessous et laissez nous gérér 😎. </p>

      <div className='administration_card_section'>
        <div className='administrationAdmin_card_container'>
          <h6 className='administrationAdmin_card_title'>Nouveau métier</h6>
          <p className='p_center tdb_card_p'>Vous connaisez le nom du métier<br /> et les applications qui en font partie.</p>
          <div className='administration_form_container'>
            <label for='metier-name' className='label_style'>Nom du métier</label>
            <input id='metier-name' name='metier-name' type='text' placeholder='Responsable des régions' />
            <label for='apps' className='label_style'>Applications</label>
            <textarea className='label_height' id='apps' name='apps' type='textarea' placeholder='Vscode, Postman, ...' />
          </div>
          <button className='deco_btn '>Envoyer</button>
        </div>
        <div className='administrationAdmin_card_container'>
          <h6 className='administrationAdmin_card_title'>Nouvelle application</h6>
          <p className='p_center tdb_card_p'>Vous connaisez le nom de<br/> l’application et sa version</p>
          <div className='administration_form_container'>
            <label for='app_name' className='label_style'>Nom de l'app</label>
            <input id='app_name' name='app_name' type='text' placeholder='Responsable des régions' />
            <label for='app_version' className='label_style'>Version</label>
            <input id='app_version' name='apps_version' type='textarea' placeholder='Vscode, Postman, ...' />
          </div>
          <button className='deco_btn '>Envoyer</button>
        </div>
      </div>
    </div>
  )
}
