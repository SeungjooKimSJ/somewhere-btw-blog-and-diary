import React, { useEffect, useReducer, useRef } from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { convertStrToDate } from './lib/date';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary'

const reducer = (state, action) => {
  let newState = [];
  switch(action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      newState = [action.data, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case 'EDIT': {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }

  localStorage.setItem('diary', JSON.stringify(newState));
  return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

// const dummyData = [
//   {
//     id: 1,
//     emotion: 1,
//     content: 'this is the first diary',
//     date: 1646708252007
//   },
//   {
//     id: 2,
//     emotion: 2,
//     content: 'this is the second diary',
//     date: 1646708252008
//   },
//   {
//     id: 3,
//     emotion: 3,
//     content: 'this is the third diary',
//     date: 1646708252009
//   },
//   {
//     id: 4,
//     emotion: 4,
//     content: 'this is the fourth diary',
//     date: 1646708252010
//   },
//   {
//     id: 5,
//     emotion: 5,
//     content: 'this is the fifth diary',
//     date: 1646708252011
//   }
// ];

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const localData = localStorage.getItem('diary');
    if (localData) {
      const diaryList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );

      if (diaryList.length >= 1) {
        dataId.current = parseInt(diaryList[0].id) + 1;

        dispatch({
          type: 'INIT',
          data: diaryList
        });
      }
    }
  }, []);

  const dataId = useRef(0);

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: dataId.current,
        date: convertStrToDate(date).getTime(),
        content,
        emotion
      },
    });
    dataId.current += 1;
  };

  const onRemove = (targetId) => {
    dispatch({
      type: "REMOVE",
      targetId
    });
  };

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: convertStrToDate(date).getTime(),
        content,
        emotion
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onEdit,
          onRemove
        }}
      >
        <BrowserRouter>
          <div className='App'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/new' element={<New />} />
              <Route path='/edit/:id' element={<Edit />} />
              <Route path='/diary/:id' element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
