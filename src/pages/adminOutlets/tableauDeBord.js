import React from 'react'

export default function TableauDeBord() {
  return (
    <div>
      <h1>Tableaud de bord</h1>
      <p className='tdb_card_p'>Dans ce tableau de bord vous pouvez visualiser la vie de votre application.</p>
      <div className='separator' />
      <div>
        <h4>Articles</h4>
        <div className='tdb_card_section'>
          <div className='tdb_card_container'>
            <p className='chiffre blue'>26</p>
            <div className='tdb_card_items'>
              <h4 className='tdb_card_titles'>Articles</h4>
              <p className='tdb_card_p'>Nombre d’articles rédigés<br /> le mois dernier</p>
            </div>
          </div>

          <div className='tdb_card_container'>
            <p className='chiffre orange'>26</p>
            <div className='tdb_card_items'>
              <h4 className='tdb_card_titles'>Brouillons</h4>
              <p className='tdb_card_p'>Nombre de brouillons<br/> rédigés ce mois</p>
            </div>
          </div>
        </div>
        <h4>Utilisateurs</h4>
        <div className='tdb_card_section'>
          <div className='tdb_card_container'>
            <p className='chiffre babyBlue'>26</p>
            <div className='tdb_card_items'>
              <h4 className='tdb_card_titles'>Nouveaux</h4>
              <p className='tdb_card_p'>Nombre d’utilisateurs<br />ajoutés le mois dernier</p>
            </div>
          </div>

          <div className='tdb_card_container'>
            <p className='chiffre green'>26</p>
            <div className='tdb_card_items'>
              <h4 className='tdb_card_titles'>Partis</h4>
              <p className='tdb_card_p'>Nombre d’d’utilisateurs<br />supprimés le mois dernier</p>
            </div>
          </div>
        </div>




      </div>
    </div>
  )
}
