import './components/global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { router } from './routes/routes'
import { ThemeProvider } from './components/theme/theme-provider'

export function App() {
  return (
    <HelmetProvider>
     
        <Helmet titleTemplate="%s | pizza.shop" />
         <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
           <Toaster richColors/>
          <RouterProvider router={router} />
         </ThemeProvider>
    </HelmetProvider>
  )
}