import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "./../App";

import Header from "./Header";
import Button from "./Button";
import EmotionItem from "./EmotionItem";

import { getStrDate } from "../lib/date";
import { emotionList } from "../lib/emotion";

const DiaryEditor = ({ isEdit, originData }) => {
  const contentRef = useRef();
  const [content, setContent] = useState('');
  const [emotion, setEmotion] = useState(3);
  const [date, setDate] = useState(getStrDate(new Date()));

  const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContext);

  const handleClickEmotion = (emotion) => {
    setEmotion(emotion);
  }

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (
      window.confirm(
        isEdit ? 'Do you want to edit your diary?' : 'Do you want to write a new diary?'
      )
    ) {
      if (!isEdit) {
        onCreate(date, content, emotion);
      } else {
        onEdit(originData.id, date, content, emotion);
      }
    }

    navigate('/', { replace: true });
  };

  const handleRemove = () => {
    if (window.confirm('Do you really want to delete it?')) {
      onRemove(originData.id);
      navigate('/', {replace: true});
    }
  }

  useEffect(() => {
    if (isEdit) {
      setDate(getStrDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <div className="DiaryEditor">
      <Header
        headText={isEdit ? 'Edit Diary' : 'Write a New Diary'}
        leftChild={
          <Button text={'< Back'} onClick={() => navigate(-1)} />
        }
        rightChild={
          isEdit && (
            <Button
              text={'Delete'}
              type={'negative'}
              onClick={handleRemove}
            />
          )
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
              <EmotionItem
                key={it.emotion_id} {...it}
                onClick={handleClickEmotion}
                isSelected={it.emotion_id === emotion}
              />
            ))}
          </div>
        </section>
        <section>
          <h4>Today's diary</h4>
          <div className="input_box text_container">
            <textarea
              placeholder="How was your day?"
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </section>
        <section>
          <div className="control_box">
            <Button
              text={'Cancel'}
              onClick={() => navigate(-1)}
            />
            <Button
              text={'Save'}
              type={'positive'}
              onClick={handleSubmit}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
