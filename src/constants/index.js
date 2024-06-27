import {
  Badges01, badges01CodeSnippet,
  Badges02, badges02CodeSnippet,
  Badges03, badges03CodeSnippet,
} from '../components/application-ui/elements/badges';

import {
  Buttons01, buttons01CodeSnippet,
  Buttons02, buttons02CodeSnippet,
  Buttons03, buttons03CodeSnippet,
  Buttons04, buttons04CodeSnippet
} from '../components/application-ui/elements/buttons';

export const componentData = {
  badge: {
    title: 'Badge Components',
    description: 'Sample badge components.',
    tabs: [
      { component: Badges01, codeSnippet: badges01CodeSnippet, label: 'Default Badge' },
      { component: Badges02, codeSnippet: badges02CodeSnippet, label: 'Badge 02' },
      { component: Badges03, codeSnippet: badges03CodeSnippet, label: 'Badge 03' },
    ]
  },
  button: {
    title: 'Button Components',
    description: 'Sample button component.',
    tabs: [
      { component: Buttons01, codeSnippet: buttons01CodeSnippet, label: 'Button variants' },
      { component: Buttons02, codeSnippet: buttons02CodeSnippet, label: 'Rounded buttons' },
      { component: Buttons03, codeSnippet: buttons03CodeSnippet, label: 'Button with icons' },
      { component: Buttons04, codeSnippet: buttons04CodeSnippet, label: 'Icon buttons' }
    ]
  },
  checkbox: {
    title: 'Checkbox',
    description: 'Sample checkbox component.',
    tabs: [
      { component: Buttons01, codeSnippet: buttons01CodeSnippet, label: 'Button 01' }
    ]
  }
};
