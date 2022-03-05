const DiaryItem = ({ id, emotion, content, date }) => {
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
      <div>

      </div>
      <div>

      </div>
    </div>
  );
}

export default DiaryItem;
