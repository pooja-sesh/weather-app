import '../App.css'
import CloudIcon from '@mui/icons-material/Cloud'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Autocomplete, AutocompleteItem } from "@nextui-org/react"
import { Button } from "@nextui-org/react"
import { useState } from 'react'
import { Link } from '@tanstack/react-router'

function LandingPage() {
    const cities = [
        { label: 'Sydney', value: 'sydney' },
        { label: 'Melbourne', value: 'melbourne' },
        { label: 'Brisbane', value: 'brisbane' },
        { label: 'Adelaide', value: 'adelaide' },
        { label: 'Perth', value: 'perth' },
        { label: 'Canberra', value: 'canberra' },
    ]
    const [selectedCity, setSelectedCity] = useState('')

    return (
        <>
            <div className='mt-64'>
                <div className='flex justify-center'>
                    <div className='pt-2 pr-4'>
                        <CloudIcon viewBox='0 0 24 24' fontSize='large' />
                    </div>
                    <h1 className='font-thin text-4xl tracking-wide'>weather app</h1>
                </div>
                <div className='mt-4 flex space-x-2'>
                    <Autocomplete
                        allowsCustomValue
                        label="search for a city"
                        variant="bordered"
                        className="max-w-ws font-light"
                        defaultItems={cities}
                        onSelectionChange={(item) => setSelectedCity(item?.toString() || '')}
                    >
                        {(item) => <AutocompleteItem key={item.value}>{item.label.toLocaleLowerCase()}</AutocompleteItem>}
                    </Autocomplete>
                    <div className='pt-3'>
                        <Link to="/weather/$city" params={{ city: selectedCity }} disabled={!selectedCity}>
                            <button style={{ color: selectedCity ? 'black' : 'grey' }}  disabled={!selectedCity}><ArrowForwardIcon /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage
