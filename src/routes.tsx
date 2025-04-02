import { RouteObject } from 'react-router-dom'
import HomePage from '@/pages/HomePage/HomePage'
import Root from '@/pages/Root'
import { RouteName } from './constants/RouteName'
import MRO from '@/pages/mro/mro'
import Defense from './pages/defense/defense'
import Aviation from './pages/aviation/aviation'

export const routes: RouteObject[] = [
  {
    path: RouteName.HOME,
    element: <Root />,
    children: [
      {
        path: RouteName.HOME,
        element: <HomePage />
      },
      {
        path: RouteName.MRO,
        element: <MRO />
      },
      {
        path: RouteName.DEFENSE,
        element: <Defense />
      },
      {
        path: RouteName.AVIATION,
        element: <Aviation />
      }
    ]
  }
]
