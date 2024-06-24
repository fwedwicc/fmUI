import Badges01, { codeSnippet as badges01CodeSnippet } from '../components/application-ui/elements/badges/Badges01';
import Badges02, { codeSnippet as badges02CodeSnippet } from '../components/application-ui/elements/badges/Badges02';
import Badges03, { codeSnippet as badges03CodeSnippet } from '../components/application-ui/elements/badges/Badges03';
import Buttons01, { codeSnippet as buttonsCodeSnippet } from '../components/application-ui/elements/buttons/Buttons01';

export const componentData = {
  badge: {
    title: 'Badge components',
    description: 'Sample badge components.',
    tabs: [
      { component: Badges01, codeSnippet: badges01CodeSnippet, label: 'Default Badge' },
      { component: Badges02, codeSnippet: badges02CodeSnippet, label: 'Badge 02' },
      { component: Badges03, codeSnippet: badges03CodeSnippet, label: 'Badge 03' },
    ]
  },
  button: {
    title: 'Buttons',
    description: 'Sample button component.',
    tabs: [
      { component: Buttons01, codeSnippet: buttonsCodeSnippet, label: 'Button 01' }
    ]
  }
};
