import { Button } from 'antd';
import router from './router'
import {useRoutes,Link}from 'react-router-dom'
function App() {
 const outlet= useRoutes(router)
  return (
    <div className="App">
      {/* <Link to='/home'>home</Link>
      <Link to='/about'>about</Link> */}
     {outlet}
    </div>
  )
}

export default App
