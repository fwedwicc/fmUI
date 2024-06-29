import {
  Badges01, badges01CodeSnippet,
  Badges02, badges02CodeSnippet,
  Badges03, badges03CodeSnippet,
} from '../components/application-ui/elements/badges';

import {
  Buttons01, buttons01CodeSnippet,
  Buttons02, buttons02CodeSnippet,
  Buttons03, buttons03CodeSnippet,
  Buttons04, buttons04CodeSnippet,
  Buttons05, buttons05CodeSnippet,
  Buttons06, buttons06CodeSnippet,
  Buttons07, buttons07CodeSnippet,
  Buttons08, buttons08CodeSnippet,
  Buttons09, buttons09CodeSnippet,
} from '../components/application-ui/elements/buttons';

export const componentData = {
  badge: {
    title: 'Badge Components',
    description: 'Sample badge components.',
    tabs: [
      { component: Badges01, codeSnippet: badges01CodeSnippet, label: 'Default Badges' },
      { component: Badges02, codeSnippet: badges02CodeSnippet, label: 'Badge 02' },
      { component: Badges03, codeSnippet: badges03CodeSnippet, label: 'Badge 03' },
    ]
  },
  button: {
    title: 'Button Components',
    description: 'Sample button component.',
    tabs: [
      { component: Buttons01, codeSnippet: buttons01CodeSnippet, label: 'Default button variants' },
      { component: Buttons02, codeSnippet: buttons02CodeSnippet, label: 'Rounded buttons' },
      { component: Buttons03, codeSnippet: buttons03CodeSnippet, label: 'Button with icons' },
      { component: Buttons04, codeSnippet: buttons04CodeSnippet, label: 'Icon buttons' },
      { component: Buttons05, codeSnippet: buttons05CodeSnippet, label: 'Loading buttons' },
      { component: Buttons06, codeSnippet: buttons06CodeSnippet, label: 'Disabled buttons' },
      { component: Buttons07, codeSnippet: buttons07CodeSnippet, label: 'Button sizes' },
      { component: Buttons08, codeSnippet: buttons08CodeSnippet, label: 'Buttons with state colors' },
      { component: Buttons09, codeSnippet: buttons09CodeSnippet, label: 'Gradient border buttons' },
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
