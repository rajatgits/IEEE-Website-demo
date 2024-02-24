import styles from "./register.module.css";
import RegisterForm from "@/components/registerForm/registerForm";

export const metadata = {
  title: "Register page",
  description: "This is the register page of IEEE HIT SB",
};

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
