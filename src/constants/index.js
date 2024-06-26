// Alert Imports
import {
  Alert01, alert01CodeSnippet,
  Alert02, alert02CodeSnippet,
  Alert03, alert03CodeSnippet,
  Alert04, alert04CodeSnippet,
} from '../components/application-ui/elements/alerts';

// Badge Imports
import {
  Badges01, badges01CodeSnippet,
  Badges02, badges02CodeSnippet,
  Badges03, badges03CodeSnippet,
  Badges04, badges04CodeSnippet,
  Badges05, badges05CodeSnippet,
  Badges06, badges06CodeSnippet,
} from '../components/application-ui/elements/badges';

// Button Imports
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

// Checbox Imports
import {
  Checkboxes01, checkboxes01CodeSnippet,
  Checkboxes02, checkboxes02CodeSnippet,
} from '../components/application-ui/elements/checkboxes';

export const elementsData = {
  // Alert Component Data
  alert: {
    cardTitle: "Alert",
    cardDescription: "Alert inform users about important events.",
    title: 'Alert Components',
    description: 'Leverage these fmUI alert components to draw attention to important information or actions within your interface, ensuring users are promptly informed of critical updates, warnings, or confirmations.',
    tabs: [
      { component: Alert01, codeSnippet: alert01CodeSnippet, label: 'Default alerts' },
      { component: Alert02, codeSnippet: alert02CodeSnippet, label: 'Alerts with dismiss button' },
      { component: Alert03, codeSnippet: alert03CodeSnippet, label: 'Alerts with title' },
      { component: Alert04, codeSnippet: alert04CodeSnippet, label: 'Alerts with CTA' },
    ]
  },
  // Badge Component Data
  badge: {
    cardTitle: "Badge",
    cardDescription: "Badge are used to inform the user of the status of specific data.",
    title: 'Badge Components',
    description: 'Utilize these fmUI badge components to effectively highlight and categorize information within your interface, providing visual cues and distinctions that enhance the clarity and organization of content.',
    tabs: [
      { component: Badges01, codeSnippet: badges01CodeSnippet, label: 'Default badges' },
      { component: Badges02, codeSnippet: badges02CodeSnippet, label: 'Rounded badges' },
      { component: Badges03, codeSnippet: badges03CodeSnippet, label: 'Badges with icons' },
      { component: Badges04, codeSnippet: badges04CodeSnippet, label: 'Icon badges' },
      { component: Badges05, codeSnippet: badges05CodeSnippet, label: 'Notication badge' },
      { component: Badges06, codeSnippet: badges06CodeSnippet, label: 'Buttons with badge' },
    ]
  },
  // Button Component Data
  button: {
    cardTitle: "Button",
    cardDescription: "Button allows the user take actions or make choieces.",
    title: 'Button Components',
    description: 'Utilize these fmUI button components to clearly present the various actions users can take within your interface, enhancing navigation and interaction by providing intuitive, visually distinct options for different functionalities.',
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
  // Checkbox Component Data
  checkbox: {
    cardTitle: "Checkbox",
    cardDescription: "Checkbox are used to select or deselect a value.",
    title: 'Checkbox Components',
    description: 'Sample checkbox component.',
    tabs: [
      { component: Checkboxes01, codeSnippet: checkboxes01CodeSnippet, label: 'Checkbox states' },
      { component: Checkboxes02, codeSnippet: checkboxes02CodeSnippet, label: 'Checkboxes with accents' },
    ]
  }
};


export const templatesData = {
  // Sign-up form Data
  checkbox: {
    cardTitle: "Sign-up form",
    cardDescription: "Sign-up formare used to select or deselect a value.",
    title: 'Sign-up form',
    description: 'Sample Sign-up form component.',
    tabs: [
      { component: Buttons01, codeSnippet: buttons01CodeSnippet, label: 'Button 01' }
    ]
  }
}
