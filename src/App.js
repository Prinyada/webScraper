import './App.css';
import Button from './components/button'
import { BUTTON_TYPES } from './data/button';

const App = () =>{
  return (
    <div className="App">
      <div className="content">
        <h1>Online Bulletin Board</h1>
        <h5>for KMUTNB Community</h5>
      </div>
      <div className="button-wrapper">
        <Button type={BUTTON_TYPES.PRIMARY} buttonText="ประกาศของหาย"/>
        <Button type={BUTTON_TYPES.SECONDARY} buttonText="ประกาศของมือสอง"/>
      </div>
    </div>
  );
}

export default App;
