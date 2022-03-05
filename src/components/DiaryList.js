import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const sortOptionList = [
  {
    value: 'latest',
    name: 'latest'
  },
  {
    value: 'oldest',
    name: 'oldest'
  }
];

const filterOptionList = [
  {
    value: 'all',
    name: 'show all'
  },
  {
    value: 'good',
    name: 'only good moods'
  },
  {
    value: 'bad',
    name: 'only bad moods'
  }
];

const ControlMenu = ({value, onChange, optionList}) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
        ))}
    </select>
  );
}

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState('lastest');
  const [filter, setFilter] = useState('all');

  const getProcessedDiaryList = () => {
    const filterCallBack = (item) => {
      if (filter === 'good') {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    }

    const compare = (a, b) => {
      if (sortType === 'latest') {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    }

    const copyList = JSON.parse(JSON.stringify(diaryList));

    const filteredList =
      filter === 'all' ? copyList : copyList.filter((it) => filterCallBack(it));

    const sortedList = filteredList.sort(compare);
    return sortedList;
  }

  return (
    <div className="DiaryList">
      <div className="menu_container">
        <div className="left_col">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>
        <div className="right_col">
          <Button
            type={'positive'}
            text={'New diary'}
            onClick={() => navigate('/new')}
          />
        </div>
      </div>
      {getProcessedDiaryList().map((it) => (
        <div key={it.id}>
          {it.content} {it.emotion}
        </div>
      ))}
    </div>
  );
}

DiaryList.defaultProps = {
  diaryList: []
};

export default DiaryList;
