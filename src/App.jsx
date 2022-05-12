import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Homepage } from './pages'
import './styles/index.scss'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
