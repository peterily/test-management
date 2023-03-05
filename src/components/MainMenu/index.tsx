import type { MenuProps } from 'antd';
import { useNavigate, Outlet,useLocation } from 'react-router-dom'
import { useState } from 'react';
import { Menu,theme } from 'antd';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
  

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
    getItem('Option 1', '/home/page1', <PieChartOutlined />),
    getItem('Option 2', '/home/page2', <DesktopOutlined />),
    getItem('User', 'page3', <UserOutlined />, [
      getItem('301', '/home/page3/page301'),
      getItem('302', '/home/page3/page302'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];
  
const MainMenu: React.FC = () => {
  const navigateTo = useNavigate()
  const currentRoute = useLocation()
    const {
      token: { colorBgContainer },
    } = theme.useToken();
  
    const menuClick = (e) => {
      // 点击要跳转到对应的路由 
      console.log(e.key)
      navigateTo(e.key)
  }

  
  // 是否展开
  const firstOpenKey:string[]=[]
  const getIsOpenPath = () => {
    const tempPath = structuredClone(currentRoute.pathname)
    const position = tempPath.split('/')
    firstOpenKey.push(position[position.length-2])
    
   
  }
  getIsOpenPath()
    const [openkeys,setOpenkeys]=useState(firstOpenKey)
  const handleChange = (key: string[]) => {
    console.log('open',openkeys)
    const tempKey = []
    tempKey.push(key[key.length-1])
    setOpenkeys(tempKey)

      
  } 
    return (
        <Menu theme="dark" defaultSelectedKeys={[currentRoute.pathname]} mode="inline" items={items} onClick={menuClick} onOpenChange={handleChange} openKeys={openkeys} />
    );
}

export default MainMenu;