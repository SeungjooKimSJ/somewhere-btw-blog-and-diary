import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import Button from "../components/Button";
import Header from "../components/Header";
import { getStrDate } from '../lib/date';

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

  if (!data) {
    return (
      <div className="DiaryPage">
        Loading...
      </div>
    );
  } else {
    return (
      <div className="DiaryPage">
        <Header
          headText={`A Diary of ${getStrDate(new Date(data.date))}`}
          leftChild={
            <Button
              text={'< Back'}
              onClick={() => navigate(-1)}
            />
          }
          rightChild={
            <Button
              text={'Edit'}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
      </div>
    );
  }
};

export default Diary;
