
import './App.css'

import UseFocus from './components/CustomHooks/useFocus'
import UseDelay from './components/CustomHooks/useDelay'
import UseWindowSize from './components/CustomHooks/useWindowSize'
import UseOnClickOutSide from './components/CustomHooks/useOnClickOutside'
import UseFormUpdate from './components/CustomHooks/useFormUpdate'
import UseFetch  from './components/CustomHooks/useFetch'
import UseDebounce  from './components/CustomHooks/useDebounce'
import UseLocalStorage from './components/CustomHooks/useLocalStorage'
import UseMediaQuery from './components/CustomHooks/useMediaQuery'
import UseToggle from './components/CustomHooks/useToggle'

function App() {


  return (
 <div>

  <h2>Custom Hooks</h2>
  <UseFocus />
  <UseDelay />
  <UseWindowSize />
  <UseOnClickOutSide />
  <UseFormUpdate />
  <UseFetch />
  <UseDebounce />
  <UseLocalStorage />
  <UseMediaQuery />
  <UseToggle />
 </div>
  )
}

export default App
