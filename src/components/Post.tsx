import styles from "./Post.module.css";

export const Post = () => (
  <div>
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
          adipisci minima autem ut quos enim ullam hic earum tempore, placeat
          quo voluptates molestias! Cupiditate harum, consectetur illum tenetur
          nisi ad!
        </p>
        <p>👌</p>
        <p>
          <a href="">#lorem</a>
        </p>
      </div>
    </article>
  </div>
);
