import React, { useState, useEffect } from 'react'
import WikiSearchBar from '../../components/wikiSearchBar'
import WikiCard from '../../components/componentWiki/wikiCard'
import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";
import '../../components/componentApplications/appCard.scss'
import { Link } from 'react-router-dom';

export default function WikiContent() {

  const [articles, setArticles] = useState([]);
  const articleType = {
    Solution: '#A4C069',
    Documentation: '#c096e0',
    Procedure: '#45D7CE',
  };

  const fetchArticle = async () => {
    await getDocs(collection(db, "Articles")).then((querySnapshot) => {
      const mapArticles = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setArticles(mapArticles);
    })
  }

  useEffect(() => {
    fetchArticle();
  }, [])



  return (
    <>
      <WikiSearchBar/>
      <div className='wiki_total_articles_container masked_overflow jhdvkjwdvkwajdh'>
        {articles.map((articleSrc, index) => {
          return (
            <WikiCard
              key={index}
              appTitle={articleSrc.article_app}
              articleTitle={articleSrc.article_title}
              articleDescription={articleSrc.article_desc}
              articleLastEdit={articleSrc.article_lastEdit}
              article_type={articleSrc.article_type}
              articleType={articleType}
            />
          );
        })}
      </div>
    </>
  )
}
