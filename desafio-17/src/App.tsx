import { bottomButton, leftButton, rightButton} from './assets/buttons';
import { NavButton } from './components/NavButton';

import './styles/Calendar.css'

function App() {

  return (
    <div id="Calendar">
      <nav>
        <NavButton svg={leftButton} category="sideNavigation" />
        <div>
          <h1>Abril 2023</h1>
          <NavButton svg={bottomButton} />
        </div>
        <NavButton svg={rightButton} category="sideNavigation" />
      </nav>
    </div>
  )
}

export default App
