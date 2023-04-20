import Main from '../ContextComponents/Main';
import Alert from '../Alert/Alert';
import { AlertProvider } from '../Alert/AlertContext';


function UseContextHook() {
  return (
    <AlertProvider>
      <Alert />
      <Main />
    </AlertProvider>
  )
}

export default UseContextHook;