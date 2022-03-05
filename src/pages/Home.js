import { useState } from "react";

import Header from './../components/Header';
import Button from './../components/Button';

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  console.log(currentDate);

  const headText = `${currentDate.getFullYear()}. ${currentDate.getMonth() + 1}.`

  return (
    <div>
      <Header
        headText={headText}
        leftChild={<Button text={'<'} onClick={() => {}} />}
        rightChild={<Button text={'>'} onClick={() => {}} />}
      />
    </div>
  );
};

export default Home;
