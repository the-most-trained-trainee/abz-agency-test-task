import styles from "./RegistationSuccess.module.scss";
import RegistrationImage from "../../images/success-image.svg";

const RegistationSuccess: React.FC = () => {
  return (
    <div className={styles.success_container}>
      <h2 className={styles.success_heading}>User successfully registered</h2>
      <img src={RegistrationImage} alt="" className={styles.success_image} />
    </div>
  );
};

export default RegistationSuccess;
