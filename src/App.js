import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary'

//components
import Button from './components/Button';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h2>Diary Blog</h2>

        <Button
          text={'button'}
          onClick={() => alert('You clicked button')}
          type={'positive'}
        />
        <Button
          text={'button'}
          onClick={() => alert('You clicked button')}
          type={'negative'}
        />
        <Button
          text={'button'}
          onClick={() => alert('You clicked button')}
        />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/diary/:id' element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
