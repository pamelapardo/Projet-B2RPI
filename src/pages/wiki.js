import React from 'react'
import NavbarWiki from '../components/componentWiki/navbarWiki'
import WikiCard from '../components/componentWiki/wikiCard'
import WikiSearchBar from '../components/wikiSearchBar'

const articleList = [
  { appTitle:'Application 1', articleTitle:'This is my articles title', articleDescription:'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',articleLastEdit:'10/10/2023'},
  { appTitle:'AppCaatalist', articleTitle:'Article title', articleDescription:'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',articleLastEdit:'14/10/2023'},
  { appTitle:'Larees V', articleTitle:'How to solve this problem', articleDescription:'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',articleLastEdit:'14/10/2023'},
  { appTitle:'Lorem Ipsum', articleTitle:'This problem', articleDescription:'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',articleLastEdit:'16/10/2023'},
  { appTitle:'App Test 1', articleTitle:'Solution to this problem', articleDescription:'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',articleLastEdit:'16/10/2023'},
  { appTitle:'TMG Postes', articleTitle:'This article documents this', articleDescription:'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',articleLastEdit:'17/10/2023'},
  { appTitle:'Teams', articleTitle:'This article says how', articleDescription:'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',articleLastEdit:'17/10/2023'},
  { appTitle:'RH Space', articleTitle:'Heres how', articleDescription:'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',articleLastEdit:'17/10/2023'},
  { appTitle:'IT ToolSet', articleTitle:'Which is the best way', articleDescription:'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',articleLastEdit:'17/10/2023'},
  { appTitle:'One', articleTitle:'Problem solved', articleDescription:'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',articleLastEdit:'22/10/2023'},
  { appTitle:'Notion', articleTitle:'This title says everyting', articleDescription:'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',articleLastEdit:'22/10/2023'},
  { appTitle:'Economks', articleTitle:'This is a resume', articleDescription:'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',articleLastEdit:'24/10/2023'},
  { appTitle:'Directory', articleTitle:'Procedure to do this', articleDescription:'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',articleLastEdit:'26/10/2023'},
  { appTitle:'LAPS', articleTitle:'How to get around that', articleDescription:'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',articleLastEdit:'26/10/2023'},
  { appTitle:'PuTTY', articleTitle:'This is my experience', articleDescription:'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',articleLastEdit:'28/10/2023'},
  { appTitle:'Application 2', articleTitle:'This is the way', articleDescription:'This is a copytext loren ipsum text dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',articleLastEdit:'29/10/2023'}
]

export default function Wiki() {
  return (
    <div className='wiki_page_container'>
      <NavbarWiki/>
      <div className='wiki_content_space masked-overflow'>
        <div>
          <WikiSearchBar/>
        </div>
        <div className='wiki_total_articles_container'>
          {articleList.map((articleSrc, index) =>{
            return <WikiCard
            key={index}
            appTitle={articleSrc.appTitle}
            articleTitle={articleSrc.articleTitle}
            articleDescription={articleSrc.articleDescription}
            articleLastEdit={articleSrc.articleLastEdit}
            />
          })}          
        </div>

      </div>
    </div>
  )
}
