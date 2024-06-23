import React from 'react';
import Tab from './Tab';

const Interface = ({ title, description, previewContent, codeSnippet }) => {
  return (
    <div>
      <h1 className='text-[5rem] leading-none text-gray-600 font-black'>{title}</h1>
      <p className='text-gray-800'>{description}</p>
      <Tab
        previewContent={previewContent}
        codeSnippet={codeSnippet}
      />
    </div>
  );
}

export default Interface;
