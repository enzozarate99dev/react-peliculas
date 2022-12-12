import { Route, Switch, } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Menu from './utilidades/Menu';
import rutas from './routes-config'
import configValidaciones from './validaciones';
import { useEffect, useState } from 'react';
import { claim } from './auth/auth.model';
import AutenticacionContext from './auth/AutenticacionContext'
import { obtenerClaims } from './auth/manejadorJWT';
import configurarInterceptor from './utilidades/interceptores';

configValidaciones()
configurarInterceptor()


function App() {

  const [claims, setClaims] = useState<claim[]>([])

  useEffect(() => {
    setClaims(obtenerClaims())
  }, [])

  function actualizar(claims: claim[]) {
    setClaims(claims)
  }

  function esAdmin() {
    return claims.findIndex(claim => claim.nombre === 'role' && claim.valor === 'admin') > -1;
  }

  return (
    <>
      <BrowserRouter>
        <AutenticacionContext.Provider value={{ claims, actualizar }}>
          <Menu />
          <div className='container'>

            <Switch>
              {rutas.map((ruta) => <Route key={ruta.path} path={ruta.path}
                exact={ruta.exact}>
                {ruta.esAdmin && !esAdmin() ? <>
                  No tiene acceso al componente
                </> : <ruta.componente />}
              </Route>)}
            </Switch>
          </div >
        </AutenticacionContext.Provider>

      </BrowserRouter>
    </>
  );
}

export default App;
