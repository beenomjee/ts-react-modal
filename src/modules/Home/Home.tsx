import { Modal } from "../../components";
import styles from "./Home.module.css";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <button onClick={() => setIsOpen(true)}>Slide in alert dialog</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        direction="DOWN"
        duration=".25s"
      >
        <div className={styles.modal}>
          <h2>Use Google's location service?</h2>
          <p>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </p>
          <div className={styles.actions}>
            <button onClick={() => setIsOpen(false)}>Disagree</button>
            <button onClick={() => setIsOpen(false)}>Agree</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
