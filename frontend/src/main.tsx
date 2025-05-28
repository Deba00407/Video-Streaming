
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromChildren, RouterProvider, Route } from 'react-router-dom'
import { Room, Home, Landing, Layout } from "./index.ts"


const router = createBrowserRouter(
  createRoutesFromChildren((
    <Route path='/' element={<Layout />}>
      <Route index element={<Landing />} />
      <Route path='stream' element={<Home />} />
      <Route path='video/:name' element={<Room />} />
    </Route>
  ))
)

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
