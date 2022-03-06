import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Button from "./Button";

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
      </div>
    </div>
  );
};

export default DiaryEditor;
