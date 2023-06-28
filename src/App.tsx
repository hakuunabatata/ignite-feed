import styles from "./App.module.css";
import { Header, Post, Sidebar } from "./components";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <div>
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}
