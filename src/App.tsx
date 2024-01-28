import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import { RoutesComponent } from './data/routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          RoutesComponent.map((route, index) => (
            <Route 
              key={index}
              path={route.path}
              element={route.component}
            />
          ))
        } 
      </Routes>
    </BrowserRouter>
  )
}

export default App
