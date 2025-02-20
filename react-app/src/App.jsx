// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

//PROVIDER COPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = creatContext();
// 3. <MyContext.Provider value={value}>
//      <child />
//    </MyContext.Provider>

//CONSUMER COMPONENTS
// 1. import {useContext} from 'react';
//    import {MyContext} from './ComponentA';
// 2. const value = useContext(MyContext);


import ComponentA from "./ComponentA"

function App() {

  return (
  <ComponentA />
  )
}

export default App
