import React from 'react'
import WikiCard from '../../components/componentWiki/wikiCard'

const articleList = [
  { appTitle: 'Application 1', articleTitle: 'This is my articles title', articleDescription: 'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', articleLastEdit: '10/10/2023' },
  { appTitle: 'AppCaatalist', articleTitle: 'Article title', articleDescription: 'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', articleLastEdit: '14/10/2023' },
  { appTitle: 'Larees V', articleTitle: 'How to solve this problem', articleDescription: 'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', articleLastEdit: '14/10/2023' },
  { appTitle: 'Lorem Ipsum', articleTitle: 'This problem', articleDescription: 'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', articleLastEdit: '16/10/2023' },
  { appTitle: 'App Test 1', articleTitle: 'Solution to this problem', articleDescription: 'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', articleLastEdit: '16/10/2023' }
]

export default function WikiContent() {
  return (
    <>
      <div className='wiki_total_articles_container masked_overflow'>
        {articleList.map((articleSrc, index) => {
          return <WikiCard
            key={index}
            appTitle={articleSrc.appTitle}
            articleTitle={articleSrc.articleTitle}
            articleDescription={articleSrc.articleDescription}
            articleLastEdit={articleSrc.articleLastEdit}
          />
        })}
      </div>
    </>
  )
}
