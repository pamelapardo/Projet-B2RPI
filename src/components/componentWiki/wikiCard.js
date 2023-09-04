import React from 'react'
import './wikiCard.scss'
import '../../components/componentApplications/appCard.scss'

export default function WikiCard(articleSrc) {
  const cardStyle = {
    backgroundColor: articleSrc.articleType[articleSrc.article_type], // Assuming article_type is the field that holds the type information
  };

  return (
    <div className='wikiCard_container'>
      <div className='tout' style={cardStyle}></div>
      <div className='wikiCard_card_items'>
        <div className='wikiCard_titles'>
          <h3 className='card_app_title bottom_top_title_space'>{articleSrc.appTitle}</h3> <p className='card_app_title space_title'> - </p> <h3 className='card_app_title article_title_style'>{articleSrc.articleTitle}</h3>
        </div>
        <p className='wikiCard_app_description'>{articleSrc.articleDescription}</p>
        <div className='wikiCard_date_items'>
          <p className='wikiCard_edition'>Dernière édition:</p> <p>{articleSrc.articleLastEdit}</p>
        </div>
      </div>
    </div>
  )
}
