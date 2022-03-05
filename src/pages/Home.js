import { useState } from "react";

import Header from './../components/Header';

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  console.log(currentDate);

  const headText = `${currentDate.getFullYear()}. ${currentDate.getMonth() + 1}.`

  return (
    <div>
      <Header headText={headText} />
    </div>
  );
};

export default Home;
