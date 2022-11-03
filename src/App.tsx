import { Route, Switch, } from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import Menu from './utilidades/Menu';
import rutas from './routes-config'
import configValidaciones from './validaciones';

configValidaciones()


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className='container'>

          <Switch>
            {rutas.map((ruta) => <Route key={ruta.path} path={ruta.path} 
            exact={ruta.exact}><ruta.componente /></Route>)}
          </Switch>
        </div >
      </BrowserRouter>
    </>
  );
}

export default App;
