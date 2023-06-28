import styles from "./Avatar.module.css";

interface AvatarProps {
  source: string;
  hasBorder?: boolean;
}

export const Avatar = ({ source, hasBorder }: AvatarProps) => {
  return (
    <img
      className={styles[hasBorder ? "avatarWithBorder" : "avatar"]}
      src={source}
    />
  );
};
