import './asset/css/style.css';
import Brand from './components/Brand';
import Logo from './components/Logo';
import Staking from './components/Staking';

function App() {
  return (
    <>
      <Brand/>
      <div className='container position-relative'>
        <Logo/>
        <Staking/>
      </div>
    </>
  );
}

export default App;
