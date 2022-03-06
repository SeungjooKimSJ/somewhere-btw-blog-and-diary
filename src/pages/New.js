import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";

const New = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header
        headText={'Write a new diary'}
        leftChild={
          <Button text={'< back'} onClick={() => navigate(-1)} />
        }
      />
    </div>
  );
};

export default New;
