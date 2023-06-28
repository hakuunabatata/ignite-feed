import { Comment } from "./Comment";
import styles from "./Post.module.css";

export const Post = () => (
  <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <img
          className={styles.avatar}
          src="https://github.com/hakuunabatata.png"
        />
        <div className={styles.authorInfo}>
          <strong>User</strong>
          <span>Dev</span>
        </div>
      </div>

      <time dateTime={new Date().toString()}>Publicado há 1h</time>
    </header>

    <div className={styles.content}>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum adipisci
        minima autem ut quos enim ullam hic earum tempore, placeat quo
        voluptates molestias! Cupiditate harum, consectetur illum tenetur nisi
        ad!
      </p>
      <p>
        👌 <a href="">link.com</a>
      </p>
      <p>
        <a href="">#lorem</a> <a href="">#ipsum</a>
      </p>
    </div>
    <form className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>

      <textarea placeholder="Deixe um comentário" />

      <footer>
        <button type="submit">Publicar</button>
      </footer>
    </form>

    <div className={styles.commentList}>
      <Comment />
      <Comment />
      <Comment />
    </div>
  </article>
);
