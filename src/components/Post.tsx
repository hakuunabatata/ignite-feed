import { useState } from 'react'
import { Avatar, Comment } from '.'
import { IPost } from '../types'
import { dateDifToText, formatDate } from '../utils'
import styles from './Post.module.css'

interface PostProps {
  post: IPost
}

export const Post = ({ post }: PostProps) => {
  const [comments, setComments] = useState(['A', 'B', 'C'])

  const createNewComment = () => {
    event?.preventDefault()

    console.log('hoho')

    setComments([...comments, 'A'])
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder
            source={post.author.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time dateTime={formatDate(post.publishedAt)}>
          Publicado {dateDifToText(post.publishedAt)}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map(({ text, type }) =>
          type === 'link' ? (
            <a
              href='#'
              key={`${text}-${type}`}
            >
              {text}
            </a>
          ) : (
            <p key={`${text}-${type}`}>{text}</p>
          )
        )}
      </div>
      <form
        onSubmit={createNewComment}
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((_, index) => (
          <Comment key={index} />
        ))}
      </div>
    </article>
  )
}
