import styles from "../../styles/authentication/Login.module.scss";
import svgSrc from "../../assets/authenticationBG.svg";
import sideSvg from "../../assets/loginSvg.svg";
import {
  InputContainer,
  InputLabel,
  InputField,
  Button,
  SignInLink,
} from "../../components/_styled/AuthenticationPage";
import { useForm } from "react-hook-form";
import { LoginData } from "../../types/Authentication";
import { useToast } from "../../utils/hooks/useToast";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";
import Header from "../../components/_general/Header";
import { api } from "../../utils/api";
import Image from "next/image";

const LogInPage = () => {
  const { register, handleSubmit } = useForm<LoginData>();
  const { success, error } = useToast();
  const navigate = useRouter();
  const { mutate: Login } = api.authRouter.login.useMutation({
    onSuccess() {
      success("Successfully logged in");
      navigate.push("/conversations");
    },
    onError(err) {
      error("Oops something went wrong");
      console.log("Login Page: ", err);
    },
  });
  const onSubmit = async (data: LoginData) => Login(data);

  return (
    <div className={styles.main__wrapper}>
      <Header title="Chat O Cord | Login" />
      <div className={styles.innerWrapper}>
        <Image height={300} src={sideSvg} alt="login-svg" />
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.login__heading}>
            <strong>
              <span>Hey,</span> welcome back.
            </strong>
          </div>
          <div className={styles.innerFormContainer}>
            <div className={styles.field__wrapper}>
              <InputContainer backGroundcolor="transparent">
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField
                  type="email"
                  id="email"
                  autoFocus
                  bottomLine={true}
                  {...register("email", {
                    required: "Email is required!",
                  })}
                />
              </InputContainer>
            </div>
            <div className={styles.field__wrapper}>
              <InputContainer backGroundcolor="transparent">
                <InputLabel htmlFor="passw">Password</InputLabel>
                <InputField
                  type="password"
                  id="passw"
                  bottomLine={true}
                  {...register("password", {
                    required: "Without password huh???",
                    minLength: 8,
                  })}
                />
              </InputContainer>
            </div>

            <Button type="submit">Log In</Button>

            <div className={styles.login__link}>
              <span>Need an account?</span>
              <SignInLink href="/auth/register">
                Create account
                <MdOutlineKeyboardArrowRight />
              </SignInLink>
            </div>
          </div>
        </form>
      </div>
      <Image fill src={svgSrc} alt="backrgound-img" />
    </div>
  );
};

export default LogInPage;
