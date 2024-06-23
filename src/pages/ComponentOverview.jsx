import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../components';
import Badges01, { codeSnippet as badges01CodeSnippet } from '../components/application-ui/elements/badges/Badges01';
import Badges02, { codeSnippet as badges02CodeSnippet } from '../components/application-ui/elements/badges/Badges02';
import Badges03, { codeSnippet as badges03CodeSnippet } from '../components/application-ui/elements/badges/Badges03';
import Buttons01, { codeSnippet as buttonsCodeSnippet } from '../components/application-ui/elements/buttons/Buttons01';

const ComponentOverview = () => {
  const { type } = useParams();

  const getComponentData = (type) => {
    switch (type) {
      case 'badge':
        return {
          title: 'Badges',
          description: 'Sample badge components.',
          tabs: [
            { previewContent: <Badges01 />, codeSnippet: badges01CodeSnippet, label: 'Badge 01' },
            { previewContent: <Badges02 />, codeSnippet: badges02CodeSnippet, label: 'Badge 02' },
            { previewContent: <Badges03 />, codeSnippet: badges03CodeSnippet, label: 'Badge 03' }
          ]
        };
      case 'button':
        return {
          title: 'Buttons',
          description: 'Sample button component.',
          tabs: [
            { previewContent: <Buttons01 />, codeSnippet: buttonsCodeSnippet, label: 'Button 01' }
          ]
        };
      default:
        return {
          title: 'Unknown Component',
          description: 'No component found for this type.',
          tabs: []
        };
    }
  };

  const { title, description, tabs } = getComponentData(type);

  return (
    <div>
      <h1 className='text-[5rem] leading-none text-gray-600 font-black'>{title}</h1>
      <p className='text-gray-800'>{description}</p>
      {tabs.map((tab, index) => (
        <div key={index} className='mb-8'>
          <h2 className='text-[3rem] leading-none text-gray-600 font-bold'>{tab.label}</h2>
          <Tab
            previewContent={tab.previewContent}
            codeSnippet={tab.codeSnippet}
          />
        </div>
      ))}
    </div>
  );
};

export default ComponentOverview;
