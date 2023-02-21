import Home from '@/views/Home'
// import About from '@/views/About'
import { Navigate } from 'react-router-dom';
// 懒加载
import React ,{lazy}from 'react'
const About = lazy(() => import('@/views/About'))
const Page1 = lazy(() => import('@/views/Page1'))
const Page2=lazy(() => import('@/views/Page2'))
const withLoadingComponent = (comp:JSX.Element):JSX.Element => {
    return (<React.Suspense fallback={<div>loading...</div>}>
        {comp}
    </React.Suspense>)
}

const routes = [
    {
        path: '/',
        element: <Navigate to='/home'></Navigate>,
    },
    {
        path: '/home',
        element: withLoadingComponent(<Home />),
        children: [
            {
                path: 'page1',
                element:withLoadingComponent(<Page1></Page1>)
            },
            {
                path: 'page2',
                element:withLoadingComponent(<Page2></Page2>)
            }
        ]
    },
    {
        path: '/about',
        // element:<About></About>
        element:withLoadingComponent(<About/>)
    },
    // 嵌套路由 结束-------------------
// 访问其余的都直接到首页：
{
    path:"*",
    element:<Navigate to="/home/page1"/>
    },
]
export default routes;