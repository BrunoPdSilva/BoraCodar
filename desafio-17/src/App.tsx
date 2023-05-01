import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { ToggleTheme } from './components/ToggleTheme';
import { Navigation } from './components/Navigation';
import { Calendar } from './components/Calendar';

import './styles/App.css';

const saveTheme = (isLightTheme: boolean) => {
  localStorage.setItem('isLightTheme', JSON.stringify(isLightTheme));
};

const retrieveTheme = () => {
  const isLightTheme = localStorage.getItem('isLightTheme');
  return isLightTheme ? JSON.parse(isLightTheme) : {};
};

function App() {
  const currentDate = dayjs();
  const [type, setType] = useState<"month" | "year">('month');
  const [today, setToday] = useState(currentDate);

  const [isLightTheme, setIsLightTheme] = useState(retrieveTheme());

  useEffect(() => {
    saveTheme(isLightTheme);

    document.body.setAttribute('data-theme', isLightTheme ? 'light' : 'dark');
  }, [isLightTheme]);


  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column" }}>
      <ToggleTheme isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} />
      <div id="App">
        <Navigation today={today} setToday={setToday} type={type} setType={setType} />
        <Calendar today={today} />
      </div>
    </div>
  );
}

export default App;
