import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/actions";
import styles from "./login.module.css";
import Image from "next/image";

export const metadata = {
  title: "Login page",
  description: "This is the login page of IEEE HIT SB",
};

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialLogin}>
          <form className={styles.google}>
            <button>
              <Image
                src="/google.png"
                alt="Google image"
                width={20}
                height={20}
              />
            </button>
          </form>
          <form action={handleGithubLogin} className={styles.github}>
            <button>
              <Image
                src="/github.png"
                alt="Github image"
                width={20}
                height={20}
              />
            </button>
          </form>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
