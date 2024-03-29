import { React, useState, useEffect } from 'react'
import '../components/componentApplications/appCard.scss'
import AppCard from '../components/componentApplications/appCard'
import AppSearchBar from '../components/componentApplications/appSearchBar'
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, listAll } from "firebase/storage";
// import { ref, listAll } from "firebase/storage";


export default function Applications() {

  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
    // Fetching data by field ------>
    // const fetchPost = async () => {
    //   const q = query(collection(db,'Apps'), where('app_id', '==', '1'));
    //   await getDocs(q).then((querySnapshot) => {
    //     const mapData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    //     setPosts(mapData);
    //     console.log(posts, mapData);
    //   })
    // }
    await getDocs(collection(db, "Apps")).then((querySnapshot) => {
      const mapData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setPosts(mapData);
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

        {posts.map((app, index) => {
          return <AppCard
            key={index}
            logo={app.img}
            title={app.appname}
            description={app.appdescription}
          />
        })}

      </div>
    </div>
  )
}