import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";

import Header from './../components/Header';
import Button from './../components/Button';
import DiaryList from "../components/DiaryList";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const headText = `${currentDate.getFullYear()}. ${currentDate.getMonth() + 1}.`

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      ).getTime();

      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [diaryList, currentDate]);


  useEffect(() => {
    console.log(data);
  }, [data])

  const increaseMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate())
    );
  }

  const decreaseMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate())
    );
  }

  return (
    <div>
      <Header
        headText={headText}
        leftChild={<Button text={'<'} onClick={decreaseMonth} />}
        rightChild={<Button text={'>'} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
