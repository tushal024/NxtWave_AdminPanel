import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { hiren } from './Redux/Store'
import Box from './Component/Box.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={hiren}>
<BrowserRouter>
    <App />
    {/* <Box/> */}
</BrowserRouter>
</Provider>
)
