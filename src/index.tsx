import ReactDOM from 'react-dom';
import App from './App';
import MenuContextProvider from './MenuContext';

ReactDOM.render(
  <MenuContextProvider>
    <App />
  </MenuContextProvider>,
  document.getElementById('root')
);