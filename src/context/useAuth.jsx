import secureLocalStorage from "react-secure-storage";

const useAuth = () => {
  return JSON.parse(secureLocalStorage.getItem('userData'));
}

export default useAuth;
