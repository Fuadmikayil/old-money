import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {routes} from './routes'
import './i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
