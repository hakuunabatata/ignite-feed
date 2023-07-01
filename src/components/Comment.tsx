import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '.'
import styles from './Comment.module.css'

interface CommentProps {
  content: string
}

export const Comment = ({ content }: CommentProps) => (
  <div className={styles.comment}>
    <Avatar source='https://github.com/hakuunabatata.png' />

    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>User</strong>

            <time dateTime={new Date().toString()}>Publicado há 1h</time>
          </div>

          <button title='Deletar comentário'>
            <Trash size={20} />
          </button>
        </header>

        <p>{content}</p>
      </div>

      <footer>
        <button>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </button>
      </footer>
    </div>
  </div>
)
