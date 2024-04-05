import '@/shared/scss/style.scss';
import { FC, Suspense } from 'react';

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from '../store/store';

import { router } from '@/app/router.tsx';
import { Preloader } from '@/shared/ui';

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Suspense fallback={<Preloader />}>
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </Provider>
  );
};

export default App;
