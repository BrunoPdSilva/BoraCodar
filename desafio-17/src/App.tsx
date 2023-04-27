import { Navigation } from './components/Navigation';
import { Calendar } from './components/Calendar';

import { generateDate } from './utils/calendar';

import './styles/App.css';

function App() {
  console.log(generateDate())

  return (
    <div id="App">
      <Navigation />
      <Calendar />
    </div>
  );
}

export default App;
