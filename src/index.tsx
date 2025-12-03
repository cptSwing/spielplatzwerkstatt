import { render } from 'preact';
import './styles/index.css';
import App from './components/App.tsx';

const frontendRoot = document.getElementById('frontend-root') as HTMLDivElement;

if (frontendRoot) {
    render(<App />, frontendRoot);
}
