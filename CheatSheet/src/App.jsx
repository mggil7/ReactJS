
// https://codedthemes.medium.com/react-js-cheatsheet-dcf7964e732c
import './App.css'
import Components from './components/Components'
import Components1 from './components/Components1'
import Elements from './components/Elements'
import Context from './components/Context'
import UseStateComp from './components/UseStateComp'
import UseEffectComp from './components/useEffectComp'
import UseRefComp from './components/UseRefComp'
import UseContextComp from './components/UseContextComp'
import UserCallbackComp from './components/UseCallBackComp'
import UseMemoComp from './components/UseMemoComp'



function App() {


  return (
  
  <div>
    <h2>React Cheat Sheet</h2>
    <Elements />
    <Components name="Miguel" />
    <Components1>
      <h2>Hello Rita!!</h2>
    </Components1>
    <Context />
    <UseStateComp />
    <UseEffectComp />
    <UseRefComp />
    <UseContextComp />
    <UserCallbackComp />
   
  </div>
  )
}

export default App
