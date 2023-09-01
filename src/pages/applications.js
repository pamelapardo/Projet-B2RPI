import { React, useState, useEffect } from 'react'
import '../components/componentApplications/appCard.scss'
import AppCard from '../components/componentApplications/appCard'
import AppSearchBar from '../components/componentApplications/appSearchBar'
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";

// const appList = [
//   { logo: 'logo', title: 'Application 1', description: 'This is my app description in a few words.' },
//   { logo: 'logo', title: 'Application 2', description: 'This is my app description in a few words.' },
//   { logo: 'logo', title: 'Application 3', description: 'This is my app description in a few words.' },
//   { logo: 'logo', title: 'Application 4', description: 'This is my app description in a few words.' },
//   { logo: 'logo', title: 'Application 5', description: 'This is my app description in a few words.' },
//   { logo: 'logo', title: 'Application 6', description: 'This is my app description in a few words.' },
// ]

export default function Applications() {

  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "Apps")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setPosts(newData);
      console.log(posts, newData);
    })
  }

  useEffect(() => {
    fetchPost();
  }, [])


  
  return (
    <div className='app_page_container'>
      <div className='app_page_searchBar_container'>
        <AppSearchBar />
      </div>
      <div className='app_wrapper'>

        {posts.map((todo, index) => {
          return <AppCard
            key={index}
            title={todo.appname}
            description={todo.appdescription}
          />
        })}

      </div>
    </div>
  )
}
