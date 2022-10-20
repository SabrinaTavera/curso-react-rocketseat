import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from "./App.module.css"
import "./global.css"

// author: { avatar_url: "", name: "", role:""}
// publishedAt: Date 
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1630091003936-aea522c1e8c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50",
      name: "Sabrina Tavera",
      role: "CTO @ Rocketseat",
    },
    content: [
      { type: 'paragrapg', content: 'Fala galeraa 👋' },
      { type: 'paragrapg', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },

    ],
    publishedAt: new Date('2022-05-03 20:00:00')

  },
  {
    id: 2,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1630091003936-aea522c1e8c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50",
      name: "Larissa Tavera",
      role: "Educadora @ Rocketseat",
    },
    content: [
      { type: 'paragrapg', content: 'Fala galeraa 👋' },
      { type: 'paragrapg', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },

    ],
    publishedAt: new Date('2022-07-09 09:00:00')

  },
];

function App() {
  return (
    <h1>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </h1>
  )
}


export default App
