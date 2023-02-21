import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化放最上面
import 'reset-css'
// ui框架样式
// 全局样式
import '@/assets/style/global.scss'
// 组件样式
import App from './App'
// history模式
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>  <App /></BrowserRouter>
  
  </React.StrictMode>
)
