import './App.css'
import CloudIcon from '@mui/icons-material/Cloud'
import { Autocomplete, AutocompleteItem } from "@nextui-org/react"

function App() {
  const cities = [
    { label: 'Sydney', value: 'sydney' },
    { label: 'Melbourne', value: 'melbourne' },
    { label: 'Paris', value: 'paris' },
  ]
  return (
    <>
      <div className='flex justify-center'>
        <div className='pt-2 pr-4'>
          <CloudIcon viewBox='0 0 24 24' fontSize='large'/>
        </div>
        <h1 className='font-thin text-4xl tracking-wide'>weather app</h1>
      </div>
      <div className='mt-4'>
        <Autocomplete
          allowsCustomValue
          label="search for a city"
          variant="bordered"
          className="max-w-ws font-light"
          defaultItems={cities}
        >
          {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
        </Autocomplete>
      </div>
    </>
  )
}

export default App
