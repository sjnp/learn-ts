import { ChangeEvent, FocusEvent, useRef, useState } from 'react';
import { MockWelcome } from '@sjnp/ui';

export function App() {
  const maxLength = 20;
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const [clickValue, setClickValue] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;
    if (currentValue.length <= maxLength) {
      setValue(event.target.value);
      setClickValue('');
    }
  };

  const handleOnClick = () => {
    setClickValue(value);
  };

  const handleOnFocus = (event: FocusEvent) => {
    const input = inputRef.current;
    if (!input) {
      return;
    }
    setTimeout(() => {
      input.focus();
      input.setSelectionRange(-1, -1);
      input.scrollLeft = input.scrollWidth;
    }, 0);
  };

  return (
    <div className="pt-20 flex flex-col gap-3 items-center justify-start">
      <input
        className="p-2 border-2 border-blue-500"
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={handleOnFocus}
      />
      <p>
        {value.length}/{maxLength}
      </p>
      <button className="p-2 bg-red-700 text-white" onClick={handleOnClick}>
        Submit
      </button>
      <p>Clicked: {clickValue}</p>
      <MockWelcome />
    </div>
  );
}

export default App;
