import { IPost } from '../types'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

interface PostProps {
  post: IPost
}

export const Post = ({ post }: PostProps) => (
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

      <time dateTime={new Date().toString()}>Publicado há 1h</time>
    </header>

    <div className={styles.content}>
      {post.content.map(({ text, type }) =>
        type === 'link' ? <a href='#'>{text}</a> : <p>{text}</p>
      )}
    </div>
    <form className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>

      <textarea placeholder='Deixe um comentário' />

      <footer>
        <button type='submit'>Publicar</button>
      </footer>
    </form>

    <div className={styles.commentList}>
      <Comment />
      <Comment />
      <Comment />
    </div>
  </article>
)
