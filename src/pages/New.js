import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `Write New Diary&Blog`;
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;
