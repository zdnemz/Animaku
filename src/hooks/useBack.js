import { useNavigate } from "react-router-dom";

const useBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return goBack;
};

export default useBack;
