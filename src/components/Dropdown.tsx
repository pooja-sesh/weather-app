import { FC, ChangeEvent, useState } from 'react';

interface DropdownProps {
  options: string[];
}

const Dropdown: FC<DropdownProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0])

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value)
  };

  return (
    <select value={selectedOption} onChange={handleSelectChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
