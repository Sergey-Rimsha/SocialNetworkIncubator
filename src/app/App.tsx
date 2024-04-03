import '@/shared/scss/style.scss';
import { FC } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../store/store';

import { Routing } from './Routing/Routing';

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routing />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
