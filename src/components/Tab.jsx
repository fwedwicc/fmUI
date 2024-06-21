import React, { useState } from 'react';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('preview');

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div className="flex border-b border-gray-300">
        <button
          className={`flex-1 py-2 text-center ${activeTab === 'preview' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
            }`}
          onClick={() => setActiveTab('preview')}
        >
          Preview
        </button>
        <button
          className={`flex-1 py-2 text-center ${activeTab === 'code' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
            }`}
          onClick={() => setActiveTab('code')}
        >
          Code
        </button>
      </div>
      <div className="p-4">
        {activeTab === 'preview' ? (
          <div>
            <h2 className="text-lg font-semibold">Preview Content</h2>
            <p>This is where the preview content will be displayed.</p>
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-semibold">Code Content</h2>
            <pre className="bg-gray-100 p-4 rounded">
              <code>
                {`const exampleCode = () => {
  console.log('Hello, World!');
};`}
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;
