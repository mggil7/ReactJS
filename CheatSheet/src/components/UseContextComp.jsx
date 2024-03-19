
//To adapt our previous example using the useContext hook:
import { createContext, useContext } from 'react';


const NameContext = createContext('');

const UseContextComp = () => {
  return (
    
    <NameContext.Provider value="Miguel Gil">
      <Body />
    </NameContext.Provider>
  );
} 
function Body() {
  return <Greeting />;
} 
function Greeting() {
  const name = useContext(NameContext);
  return (
    <div>
    <h2>UseContext Comp</h2>
    <h1>Welcome, {name}</h1>
    </div>
  );
}

export default UseContextComp