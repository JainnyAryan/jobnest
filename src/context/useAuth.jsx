const useAuth = () => {
  return JSON.parse(localStorage.getItem('userData'));
}

export default useAuth;
