import { useContext } from "react";
import { modeChange } from "../context/MyContext";

const ThemeChange = () => {
  const { isDark, toggleTheme } = useContext(modeChange);

  return (
    <div className={`bg-${isDark === "light" ? "white" : "gray-900"} text-${isDark === "light" ? "black" : "white"} p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out flex flex-col items-center justify-center space-y-4 w-screen`}>
      <button className={`bg-${isDark === "light" ? "blue-500" : "white"} text-${isDark === "light" ? "white ": "black"} px-4 py-2 rounded-md shadow-md focus:outline-none`} onClick={toggleTheme}>
        {isDark === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
      <p className="text-lg">{isDark === "light" ? "Light Mode" : "Dark Mode"} is currently active.</p>
      <div className="flex items-center space-x-2">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span>Custom icon or additional content here</span>
      </div>

      {/* Additional content */}
      <div className="flex flex-col items-center space-y-8">
        <div className="border border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Additional Content Section 1</h2>
          <p>This is some additional content to demonstrate how you can extend the component.</p>
          <div className="mt-4">
            <input type="text" placeholder="Enter something..." className="border border-gray-400 p-2 rounded-md focus:outline-none" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md ml-2 hover:bg-blue-600 focus:outline-none">Submit</button>
          </div>
        </div>

        <div className="border border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Additional Content Section 2</h2>
          <p>This is another section of additional content.</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        
        <div className="border border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Additional Content Section 3</h2>
          <p>This is a third section of additional content.</p>
          <div className="mt-4">
            <img src="https://via.placeholder.com/150" alt="Placeholder" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeChange;
