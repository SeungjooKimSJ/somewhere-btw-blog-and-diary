import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";

import Button from "../components/Button";
import Header from "../components/Header";

import { getStrDate } from "../lib/date";
import { emotionList } from "../lib/emotion";

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `Your Diary&Blog - ${id}`;
  }, []);

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
    const currentEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );

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
        <article>
          <section>
            <h4>Today's Feeling</h4>
            <div
              className={[
                "diary_img_container",
                `diary_img_container_${data.emotion}`
              ].join(' ')}
            >
              <img src={currentEmotionData.emotion_img} />
              <div className="emotion_descript">
                {currentEmotionData.emotion_descript}
              </div>
            </div>
          </section>
          <section>
            <h4>Today's Diary</h4>
            <div className="diary_content_container">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;
