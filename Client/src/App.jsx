
import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './components/Messenger'
import AccountProvider from './Context/AccountProvider.jsx';


const App = () => {
   const clientId ="805846572786-dhh7gfuitg23ote6drvodnuq9q8n7pci.apps.googleusercontent.com"
  return (
    <GoogleOAuthProvider  clientId={clientId}>
      <AccountProvider> 
          <Messenger/>
      </AccountProvider>
   
  </GoogleOAuthProvider>
  )
}

export default App
