import { useState } from 'react';
import dayjs from 'dayjs';

import { Navigation } from './components/Navigation';
import { Calendar } from './components/Calendar';

import './styles/App.css';

function App() {
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);

  return (
    <div id="App">
      <Navigation today={today} setToday={setToday} />
      <Calendar today={today} setToday={setToday} />
    </div>
  );
}

export default App;
