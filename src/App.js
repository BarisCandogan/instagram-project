import React, { useState } from 'react'
import './App.css'
import Post from './Post.js'

function App() {
  const [posts, setPosts] = useState([
    {
      username: 'candoganbaris ',
      caption: 'WOW it works',
      imageURL: 'https://reactjs.org/logo-og.png',
    },
    {
      username: 'kagancandogan ',
      caption: 'Awsome!',
      imageURL:
        'https://www.gstatic.com/devrel-devsite/prod/vd881210f9673d9985aa8864f5fd9cbfbb5e2b56bbc9c6e51f369462d48e84ef9/firebase/images/touchicon-180.png',
    },
    {
      username: 'gulsunn',
      caption: 'That is dope',
      imageURL:
        'https://static2.elcorreo.com/www/multimedia/202002/07/media/cortadas/kobe-bryant-kYzC-U10073264255kQE-624x485@El%20Correo.jpg',
    },
  ])
  return (
    <div className='app'>
      <div className='app__header'>
        <img
          className='app__headerImage'
          src='https://marka-logo.com/wp-content/uploads/2020/04/Instagram-Logo.png'
          alt=''
        />
      </div>
      <h1>asjdnsajkdsan</h1>
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageURL={post.imageURL}
        />
      ))}
    </div>
  )
}

export default App
