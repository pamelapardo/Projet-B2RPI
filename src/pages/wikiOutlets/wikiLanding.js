import React from 'react'
import { Link } from 'react-router-dom';

export default function WikiLanding() {
  return (
    <div>
      <Link className='wiki_btn' to="/">Revenir en arrière</Link>
      <div className='wiki_article'>
        <div className='infos_doc'>
          <div className='app_metier'>
            <div className='infos_doc_card'>
              <label className='label_style_wiki'>
                <p className='infos_service'>SERVICE D’ENTREPRISE<br /></p>
                Ressources Humaines<br /><br />
                <p className='infos_service'>AGENTS RESPONSABLES<br /></p>
                Remi DUPONT<br />
                Amelie ROMAIN-BLANC<br />
                Cédric MERLE<br />
              </label>
            </div>
          </div>

          <div className='app_metier'>
            <div className='infos_doc_card'>
              <label className='label_style_wiki'>
                <p className='infos_service'>RÉDIGÉ PAR<br /></p>
                Remi DUPONT<br /><br />
                <p className='infos_service'>ÉDITÉ PAR<br /></p>
                Cédric MERLE<br /><br />
                <p className='infos_service'>DERNIÈRE ÉDITION LE<br /></p>
                02/05/2023<br />
              </label>
            </div>
          </div>

          <div className='app_metier'>
            <div className='infos_doc_card'>
              <label className='label_style_wiki'>
                <p className='infos_service'>Aimés</p>
              </label>
              <button className='btn_aimer'>Aimer</button>
            </div>
          </div>

        </div>




        <div className='infos_article'>
          <div className='article'>
            <h1 className='article_doc'>Documentation</h1>
          </div>
          <p className='app_article'>Application 1 - Lorem ipsum dolor sit amet</p>
          <p className='title_info_article'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor.</p>
          <div className='separator' />
          <p className='title_article'>Titre 1</p>
          <label className='label_style_wiki'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat:<br />
          - Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
          - Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
          </label>
          <div className='separator' />
          <p className='title2_article'>Titre 2</p>
          <label className='label_style_wiki'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br />
          - 🌐 Lorem: Ipsum dolor sit amet<br />
          - 📶 Lorem: Ipsum dolor sit amet<br />
          - 🆘 Lorem: Ipsum dolor sit amet<br />
          </label>

          <div className='separator' />
          <p className='title3_article'>Titre 3</p>
          <label className='label_style_wiki'>
          Sed sed lacinia lectus. Duis sit amet sodales felis.<br />
          </label>
        </div>

        

      </div>


    </div>
  )
}
