import { Route, Switch, } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Menu from './utilidades/Menu';
import rutas from './routes-config'
import configValidaciones from './validaciones';
import { useState } from 'react';
import { claim } from './auth/auth.model';
import AutenticacionContext from './auth/AutenticacionContext'

configValidaciones()


function App() {

  const [claims, setClaims] = useState<claim[]>([])

  function actualizar(claims: claim[]) {
    setClaims(claims)
  }

  return (
    <>
      <BrowserRouter>
        <AutenticacionContext.Provider value={{ claims, actualizar }}>
          <Menu />
          <div className='container'>

            <Switch>
              {rutas.map((ruta) => <Route key={ruta.path} path={ruta.path}
                exact={ruta.exact}><ruta.componente /></Route>)}
            </Switch>
          </div >
        </AutenticacionContext.Provider>

      </BrowserRouter>
    </>
  );
}

export default App;
