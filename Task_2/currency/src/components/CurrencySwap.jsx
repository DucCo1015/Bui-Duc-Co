import { GoArrowSwitch } from "react-icons/go";
import ConverterForm from "./ConverterForm";
import { useState } from "react";

const CurrencySwap = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("VND");
  const [inputValue, setInputValue] = useState('');

  // Swap the values of fromCurrency and toCurrency
  const handelSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // check if the input value is valid
  const checkNumber = (e) => {
    const number = e.target.value;

    if(number < 0){
     alert("Error: Please enter a positive number!")
    }
    else{
      setInputValue(number)
    }
  }
  
  return (
    <div className="bg-white max-w-[510px] mx-auto my-[10%] py-[40px] px-[20px] rounded-md">
      <h2 className="text-3xl font-semibold text-center pt-5">Currency Swap</h2>

      <form className="mt-5 p-5">
        <div className="flex flex-col gap-2">
          <label className="font-semibold"> Enter Amount</label>
          <input
          value={inputValue}
            onChange={checkNumber}
            type="number"
            required
            className="outline-none border-2 border-solid border-green p-2"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="mt-5">
            <h3 className="text-md font-semibold">From</h3>
            <ConverterForm
              selectedCurrency={fromCurrency}
              handelCurrency={(e) => setFromCurrency(e.target.value)}
            />
          </div>

          <div
            className="mt-[50px] text-xl border-2 border-solid border-green p-2 rounded-full"
            onClick={handelSwapCurrencies}
          >
            <GoArrowSwitch />
          </div>

          <div className="mt-5">
            <h3 className="text-md font-semibold">To</h3>
            <ConverterForm
              selectedCurrency={toCurrency}
              handelCurrency={(e) => setToCurrency(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-end mt-4">
          <p className="text-green-500 font-semibold text-md">
            Converted Amount: 100.000 VND
          </p>
        </div>

        <button
          type="submit"
          className="bg-[#665af5] text-white px-3 py-2 w-full mt-4 rounded-lg hover:bg-[#776cec]"
        >
          Get Exchange Rate
        </button>
      </form>
    </div>
  );
};

export default CurrencySwap;
