import { bottomButton, leftButton, rightButton } from '../assets/buttons';
import { NavButton } from './NavButton';

export function Navigation() {
  return (
    <nav>
      <NavButton svg={leftButton} />
      <button>Abril 2023{bottomButton}</button>
      <NavButton svg={rightButton} />
    </nav>
  );
}
