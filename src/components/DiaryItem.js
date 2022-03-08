import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        className={[
          "emotion_img_container",
          `emotion_img_container_${emotion}`
        ].join(' ')}
        onClick={goDetail}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>
      <div className="info_container" onClick={goDetail}>
        <div className="diary_date">
          {strDate}
        </div>
        <div className="diary_content_preview">
          {content.slice(0, 30)}
        </div>
      </div>
      <div className="btn_container">
        <Button text={'Edit'} onClick={goEdit} />
      </div>
      <div>

      </div>
    </div>
  );
}

export default React.memo(DiaryItem);
