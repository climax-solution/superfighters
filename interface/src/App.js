import './asset/css/style.css';
import Brand from './components/Brand';
import Logo from './components/Logo';
import Baking from './components/Bake';

import "awesome-notifications/src/styles/style.scss";
import 'react-loading-skeleton/dist/skeleton.css';

function App() {
  return (
    <>
      <Brand/>
      <div className='container position-relative'>
        <Logo/>
        <Baking/>
      </div>
    </>
  );
}

export default App;
