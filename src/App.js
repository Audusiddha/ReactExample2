import logo from './logo.svg';
import './App.css';
//import Garage from './garage';'./garage';
//import Counter from './counter';
//import CounterTwo from './counter2';
import Counter from './counter';
import DefaultProp from './proptypes';
import Songs from './song';
import FruitList from './fruitslist';
import SinglePageApp from './routing';
import UseEffectOne from './useeffectOne';
import Form from './form';
import UseEffectTwo from './useEffectTwo';
import VideoPlayer from './videouseref';
import App1 from './useContextsol';
import UseCallback from './usecallback1';
import UseMemo from './usememo';

function App() {
  return (
    <div className="App-header">
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo'/>

    
      <DefaultProp/>
     
     <Songs/>
     <Counter/>
     <FruitList/>

     <SinglePageApp/>
     <UseEffectOne/>
     <Form/>
     <UseEffectTwo/>
     <VideoPlayer/>
     <App1/>
     <UseCallback/>
     <UseMemo/>

</header>


    </div>
  );
}

export default App;
