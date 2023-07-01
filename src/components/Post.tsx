import { FormEvent, useState } from 'react'
import { Avatar, Comment } from '.'
import { IPost } from '../types'
import { dateDifToText, formatDate } from '../utils'
import styles from './Post.module.css'

interface PostProps {
  post: IPost
}

export const Post = ({ post }: PostProps) => {
  const [comments, setComments] = useState(['Post Top!'])
  const [newComment, setNewComment] = useState('')

  const saveNewCommentValue = (event: FormEvent) => {
    const element = event.target as HTMLTextAreaElement
    setNewComment(element.value)
  }

  const createNewComment = (event: FormEvent) => {
    event?.preventDefault()

    setComments([...comments, newComment])
    setNewComment('')
  }

  function deleteComment(content: string) {
    setComments(comments.filter(comment => content !== comment))
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
        {post.content.map(({ text, type }, index) => (
          <p key={index}>{type === 'link' ? <a href=''>{text}</a> : text}</p>
        ))}
      </div>
      <form
        name='content'
        onSubmit={createNewComment}
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
          value={newComment}
          onChange={saveNewCommentValue}
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            content={comment}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}
