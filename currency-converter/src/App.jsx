import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyinfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundColor: '#333',
      }}
      
    >
      <div className="w-full max-w-md mx-auto p-5 backdrop-blur-md bg-white/30 rounded-lg shadow-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          {/* Swap Button */}
          <div className="relative w-full text-center my-4">
            <button
              type="button"
              className="bg-blue-600 text-white rounded-full px-4 py-2 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400"
              onClick={swap}
            >
              ↔️ Swap
            </button>
          </div>

          <div className="w-full mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          {/* Convert Button */}
          <button
            type="submit"
            disabled={amount <= 0}
            className={`w-full px-4 py-3 rounded-lg text-white transition-all ${
              amount > 0 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400'
            }`}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>

          {/* Conversion Result */}
          {convertedAmount > 0 && (
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-white">
                {amount} {from.toUpperCase()} = {convertedAmount.toFixed(2)}{' '}
                {to.toUpperCase()}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
