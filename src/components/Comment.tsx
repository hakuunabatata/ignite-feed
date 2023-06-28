import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export const Comment = () => (
  <div className={styles.comment}>
    <img src="https://github.com/hakuunabatata.png" />

    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>User</strong>

            <time dateTime={new Date().toString()}>Publicado há 1h</time>
          </div>

          <button title="Deletar comentário">
            <Trash size={20} />
          </button>
        </header>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque fuga
          nostrum amet cumque aliquam, rerum harum, similique reprehenderit
          voluptatem doloremque quas. A facere sunt quisquam dignissimos sequi
          in et quas?
        </p>
      </div>

      <footer>
        <button>
          <ThumbsUp />
          Aplaudir <span> 20</span>
        </button>
      </footer>
    </div>
  </div>
);
