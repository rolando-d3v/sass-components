import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LayoutYoutube from './components/youtube/layout/LayoutYoutube';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/youtube' component={LayoutYoutube} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
