import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySuccess = (message: JSX.Element) =>
  toast(message, {
    position: "top-center",
    autoClose: 300,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const notifyError = (email: string) => {
  toast.error(`Error! User with email ${email} already registered`, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
