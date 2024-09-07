import { useState, useCallback } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_-{}`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const handleCopy = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert("Password copied to clipboard!");
    }
  };

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-6 py-6 my-8 text-orange-500 bg-gray-700 '>
        <h1 className='text-white text-center mb-6 text-xl font-bold'>Password Generator</h1>

        {/* Password Display and Copy Button */}
        <div className='flex shadow rounded-lg overflow-hidden mb-6'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-2 px-3 bg-gray-800 text-white rounded-l-lg'
            placeholder='Generated Password'
            readOnly
          />
          <button
            onClick={handleCopy}
            className='bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors rounded-r-lg'
          >
            Copy
          </button>
        </div>

        {/* Options */}
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <label className="text-white mr-2">Include Numbers</label>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(!numberAllowed)}
              className="h-4 w-4"
            />
          </div>
          <div className="flex items-center">
            <label className="text-white mr-2">Include Symbols</label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed(!charAllowed)}
              className="h-4 w-4"
            />
          </div>
        </div>

        {/* Password Length */}
        <div className="mb-6">
          <label className="block text-white mb-2">Password Length: {length}</label>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Generate Button */}
        <button
          onClick={PasswordGenerator}
          className='w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors'
        >
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
