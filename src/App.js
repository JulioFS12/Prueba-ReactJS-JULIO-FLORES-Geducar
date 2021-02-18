import './App.scss';
import AppRouter from './router/AppRouter';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={ store }>
      <AppRouter/>
    </Provider>
  )
}

export default App;
