import { useState } from "react";

import Header from './../components/Header';
import Button from './../components/Button';

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const headText = `${currentDate.getFullYear()}. ${currentDate.getMonth() + 1}.`

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
    </div>
  );
};

export default Home;
