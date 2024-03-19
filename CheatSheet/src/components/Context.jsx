import { createContext } from 'react';
const NameContext = createContext('');

const Context = () => {
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
  return (
    <NameContext.Consumer>
      {name => <h1>Welcome, {name}</h1>}
    </NameContext.Consumer>
  );
}

export default Context;