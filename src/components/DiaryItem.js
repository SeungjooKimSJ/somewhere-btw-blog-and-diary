import Button from "./Button";

const DiaryItem = ({ id, emotion, content, date }) => {
  const strDate = new Date(parseInt(date)).toLocaleDateString();

  return (
    <div className="DiaryItem">
      <div
        className={[
          "emotion_img_container",
          `emotion_img_container_${emotion}`
        ].join(' ')}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>
      <div className="info_container">
        <div className="diary_date">
          {strDate}
        </div>
        <div className="diary_content_preview">
          {content.slice(0, 25)}
        </div>
      </div>
      <div className="btn_container">
        <Button text={'Edit'} />
      </div>
      <div>

      </div>
    </div>
  );
}

export default DiaryItem;
