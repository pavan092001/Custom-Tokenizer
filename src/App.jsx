import { useState } from "react";
import { tokenize, decodeTokens, splitText, getTokenMap } from "./tokenizer";
import "./App.css";


function App() {
  const [inputText, setInputText] = useState("");
  const [tokens, setTokens] = useState([]);
  const [tokenPairs, setTokenPairs] = useState([]);
  const [tokenMap, setTokenMap] = useState({});

  // Decode states
  const [decodeInput, setDecodeInput] = useState("");
  const [decodedText, setDecodedText] = useState("");

  // Encode handler
  const handleEncode = () => {
    const words = splitText(inputText);
    const tokenized = tokenize(words);
    // setTokens(updatedToken);
    console.log(tokenized);

    setTokens(tokenized);
    const map = getTokenMap();
    setTokenMap(map);
    const updatedToken = tokenized.flat();

    // Create array of { token, id }
    const pairs = updatedToken.map((id) => {
      const token = Object.keys(map).find((key) => map[key] === id) || "<UNK>";
      return { token, id };
    });
    setTokenPairs(pairs);
  };

  // Decode handler
const handleDecode = () => {
  try {
    console.log("2D Array Raw Input:", decodeInput);

    // Convert string input to actual array
    const tokenArray = JSON.parse(decodeInput);

    if (!Array.isArray(tokenArray)) {
      throw new Error("Input must be an array");
    }

    // Decode in one go using your decodeTokens function
    const finalDecodedText = decodeTokens(tokenArray);

    console.log("Final Decoded:", finalDecodedText);
    setDecodedText(finalDecodedText);

  } catch (e) {
    console.error(e);
    alert(
      "Invalid token array format. Must be JSON like: [[75, 61], [76, 37, 49], 129]"
    );
  }
};





  return (
    <div className="min-h-screen flex flex-col items-center w-full bg-gray-900 text-white p-6 font-sans">
      <div className="flex justify-around">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-400">
        Custom Tokenizer
      </h1>
      <a target="blank" href="https://github.com/pavan092001/Custom-Tokenizer" className="ml-5 mb-8 text-center text-blue-400"><img
        src="./github.png"
        alt="GitHub Logo"
        className="w-8 h-8"
      /> </a>

      </div>
      {/* Encode Section */}
      <section className="mb-12 bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 w-3/4 max-w-4xl">
        <h2 className="text-xl font-semibold mb-4 text-green-400">
          Encode (Text → Tokens)
        </h2>
        <textarea
          value={inputText}
          placeholder="Enter the text"
          onChange={(e) => setInputText(e.target.value)}
          rows="4"
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-500 text-white"
        />
        <button
          onClick={handleEncode}
          className="mt-4 px-5 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition"
        >
          Encode
        </button>

        {tokens.length > 0 && (
          <>
            <h3 className="mt-6 text-lg font-semibold text-purple-300">
              Raw Token IDs
            </h3>
            <div className="bg-gray-700 p-3 rounded-lg w-full text-purple-200 font-mono">
              {JSON.stringify(tokens, null, 2)}
            </div>

            <h3 className="mt-6 text-lg font-semibold text-purple-300">
              Token Map
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-600">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="border border-gray-600 px-4 py-2">Token</th>
                    <th className="border border-gray-600 px-4 py-2">
                      Token ID
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(tokenMap).map(([token, id], index) => (
                    <tr key={index} className="hover:bg-gray-600">
                      <td className="border border-gray-600 px-4 py-2">
                        {token}
                      </td>
                      <td className="border border-gray-600 px-4 py-2">{id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>

      {/* Decode Section */}
      <section className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 w-3/4 max-w-4xl">
        <h2 className="text-xl font-semibold mb-4 text-yellow-400">
          Decode (Tokens → Text)
        </h2>
        <textarea
          value={decodeInput}
          onChange={(e) => setDecodeInput(e.target.value)}
          placeholder="Enter token array like: [89, 90, [37, 38]]"
          rows="4"
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-500 text-white"
        />
        <button
          onClick={handleDecode}
          className="mt-4 px-5 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-white font-semibold transition"
        >
          Decode
        </button>

        {decodedText && (
          <>
            <h3 className="mt-6 text-lg font-semibold text-pink-300">
              Decoded Text
            </h3>
            <p className="bg-gray-700 p-3 rounded-lg w-full">{decodedText}</p>
          </>
        )}
      </section>
    </div>
  );
}

export default App;
