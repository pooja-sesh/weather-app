import './App.css'
import Dropdown from './Dropdown'

function App() {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <>
      <div>
        <h1 className='text-blue-400'>Weather App</h1>
        <Dropdown options={options} />
      </div>
    </>
  )
}

export default App
