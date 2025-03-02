import Room from './room';
import './style.scss';

function main() {
  requestAnimationFrame(main);
}

requestAnimationFrame(main);
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app')!);
root.render(<Room />);