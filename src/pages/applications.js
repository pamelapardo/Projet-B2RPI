import React from 'react'
import '../components/comp_applications/app_card.scss'
import App_card from '../components/comp_applications/app_card'

const appList = [
  {logo:'logo', title:'Application 1', description:'This is my app description in a few words.'},
  {logo:'logo', title:'Application 2', description:'This is my app description in a few words.'},
  {logo:'logo', title:'Application 3', description:'This is my app description in a few words.'},
  {logo:'logo', title:'Application 4', description:'This is my app description in a few words.'},
  {logo:'logo', title:'Application 5', description:'This is my app description in a few words.'},
  {logo:'logo', title:'Application 6', description:'This is my app description in a few words.'},
]


export default function Applications() {
  return (
    <div className='ph100'>
      <div className='app_page_container'>
        <div className='app_wrapper'>

        {appList.map((appSrc, index) => {
          return <App_card 
          key={index}
          title={appSrc.title}
          description={appSrc.description}
          />
        })}

        </div>
      </div>
    </div>
  )
}
