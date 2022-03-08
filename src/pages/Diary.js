import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert('This diary does not exist.');
        navigate('/', {replace: true});
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      <h1>Diary</h1>
      <p>This is Diary page.</p>
    </div>
  );
};

export default Diary;
