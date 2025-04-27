/* import * as React from 'react';
import {Home} from './src/screens';
export default function App() {
  return <Home />;
} */

/* import * as React from 'react';
import {ItemKomunitas} from './src/screens';
export default function App() {
  return <ItemKomunitas />;
}   */

/*   import * as React from 'react';
  import {Akun} from './src/screens';
  export default function App() {
    return <Akun />;
  } */

    import * as React from 'react';
    import { NavigationContainer } from '@react-navigation/native';
    import Router from './src/navigation/Router';
    export default function App() {
      return (
        <NavigationContainer>
         <Router/>
        </NavigationContainer>
      );
    }
    