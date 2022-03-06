import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Button from "./Button";
import EmotionItem from "./EmotionItem";

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
    emotion_descript: 'Fantastic'
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
    emotion_descript: 'Good'
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
    emotion_descript: 'So So'
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
    emotion_descript: 'Bad'
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
    emotion_descript: 'Terrible'
  }
];

const getStrDate = (date) => {
  return date.toISOString().slice(0, 10);
}

const DiaryEditor = () => {
  const [date, setDate] = useState(getStrDate(new Date()));

  const navigate = useNavigate();

  return (
    <div className="DiaryEditor">
      <Header
        headText={'Write a new diary'}
        leftChild={
          <Button text={'< back'} onClick={() => navigate(-1)} />
        }
      />
      <div>
        <section>
          <h4>What date is it today?</h4>
          <div className="input_box">
            <input
              className="input_date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type='date'
            />
          </div>
        </section>
        <section>
          <h4>Today's Feeling</h4>
          <div className="input_box emotion_list_container">
            {emotionList.map((it) => (
              <EmotionItem key={it.emotion_id} {...it} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
