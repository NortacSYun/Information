![image](https://github.com/user-attachments/assets/8130ac41-1694-4926-a6cc-6bc8644d5de5)


practice one : useContext


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