import styles from './App.module.css'
import { Header, Post, Sidebar } from './components'
import './global.css'
import { IPost } from './types'

const posts: IPost[] = [
  {
    id: 1,
    author: {
      id: 1,
      name: 'User1',
      avatar: 'https://github.com/hakuunabatata.png',
      role: 'dev',
    },
    content: [
      {
        type: 'paragraph',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum adipisci minima autem ut quos enim ullam hic earum tempore, placeat quo voluptates molestias! Cupiditate harum, consectetur illum tenetur nisi ad!',
      },
      {
        type: 'link',
        text: '👌link.com',
      },
      {
        type: 'link',
        text: '#lorem #ipsum',
      },
    ],
    publishedAt: new Date('2023-06-26'),
  },
  {
    id: 2,
    author: {
      id: 2,
      name: 'User2',
      avatar: 'https://github.com/hakuunabatata.png',
      role: 'dever',
    },
    content: [
      {
        type: 'paragraph',
        text: 'Ta top',
      },
      {
        type: 'link',
        text: '👌link.com',
      },
      {
        type: 'paragraph',
        text: 'hehehe',
      },
    ],
    publishedAt: new Date('2021-12-12'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <div>
          {posts.map(post => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
