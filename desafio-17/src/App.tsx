import { useEffect, useState } from 'react';
import { retrieveTheme, saveTheme } from './utils/Theme';
import { ToggleTheme } from './components/ToggleTheme';
import { Navigation } from './components/Navigation';
import { Calendar } from './components/Calendar';

import dayjs from 'dayjs';
import './styles/App.css';

function App() {
  const [isLightTheme, setIsLightTheme] = useState(retrieveTheme());
  const [today, setToday] = useState(dayjs());
  const [type, setType] = useState<'month' | 'year'>('month');
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    saveTheme(isLightTheme);
    document.body.setAttribute('data-theme', isLightTheme ? 'light' : 'dark');
  }, [isLightTheme]);

  return (
    <>
      <ToggleTheme isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} />
      <div id="Calendar">
        <Navigation today={today} type={type} setToday={setToday} setType={setType} />
        <Calendar today={today} type={type} date={date} setDate={setDate} setToday={setToday} setType={setType}/>
      </div>
      <h2 className="date">{date}</h2>
    </>
  );
}

export default App;
