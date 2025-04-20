
import {RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './routes/routes'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './util/https'

function App() {


 return <QueryClientProvider client={queryClient}>
    <RouterProvider router={routes}></RouterProvider>
 </QueryClientProvider>
}

export default App
