import React from "react";
import styles from "./WelcomeMessge.module.css";
import { MdEmojiEmotions } from "react-icons/md";

const WelcomeMessge = () => {
  return (
    <div className={styles.welcome}>
      Enjoy Your Day!! No Pending Work<MdEmojiEmotions />
    </div>
  );
};

export default WelcomeMessge;
