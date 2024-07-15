// Alert Imports
import {
  Alert01, alert01CodeSnippet,
  Alert02, alert02CodeSnippet,
  Alert03, alert03CodeSnippet,
  Alert04, alert04CodeSnippet,
} from '../components/application-ui/elements/alerts';

// Avatar Imports
import {
  Avatar01, avatar01CodeSnippet,
  Avatar02, avatar02CodeSnippet,
  Avatar03, avatar03CodeSnippet,
  Avatar04, avatar04CodeSnippet,
} from '../components/application-ui/elements/avatar';

// Badge Imports
import {
  Badges01, badges01CodeSnippet,
  Badges02, badges02CodeSnippet,
  Badges03, badges03CodeSnippet,
  Badges04, badges04CodeSnippet,
  Badges05, badges05CodeSnippet,
  Badges06, badges06CodeSnippet,
} from '../components/application-ui/elements/badges';

// Breadcrumbs Imports
import {
  Breadcrumbs01, breadcrumbs01CodeSnippet,
  Breadcrumbs02, breadcrumbs02CodeSnippet,
  Breadcrumbs03, breadcrumbs03CodeSnippet,
} from '../components/application-ui/elements/breadcrumbs';

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
  Checkboxes03, checkboxes03CodeSnippet,
  Checkboxes04, checkboxes04CodeSnippet,
  Checkboxes05, checkboxes05CodeSnippet,
} from '../components/application-ui/elements/checkboxes';

// Input Imports
import {
  Inputs01, inputs01CodeSnippet,
  Inputs02, inputs02CodeSnippet,
  Inputs03, inputs03CodeSnippet,
  Inputs04, inputs04CodeSnippet,
  Inputs05, inputs05CodeSnippet,
  Inputs06, inputs06CodeSnippet,

} from '../components/application-ui/elements/input-fields';

// Toggle Imports
import {
  Toggles01, toggles01CodeSnippet,
  Toggles02, toggles02CodeSnippet,
  Toggles03, toggles03CodeSnippet,
  Toggles04, toggles04CodeSnippet,
} from '../components/application-ui/elements/toggles';

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
  // Avatar Component Data
  avatar: {
    cardTitle: "Avatar",
    cardDescription: "Avatars visually represent users with images or icons.",
    title: 'Avatar Components',
    description: 'Utilize these fmUI Avatar components to provide visual representations of users, enhancing personalization and recognition within your interface by displaying user images or icons effectively.',
    tabs: [
      { component: Avatar01, codeSnippet: avatar01CodeSnippet, label: 'Default avatars' },
      { component: Avatar02, codeSnippet: avatar02CodeSnippet, label: 'Avatar with initial placeholder' },
      { component: Avatar03, codeSnippet: avatar03CodeSnippet, label: 'Avatar with ring variants' },
      { component: Avatar04, codeSnippet: avatar04CodeSnippet, label: 'Avatar with inidicator' },
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
  // Breadcrumbs Component Data
  breadcrumbs: {
    cardTitle: "Breadcrumbs",
    cardDescription: "Breadcrumbs help users navigate through the hierarchy of your site's structure.",
    title: 'Breadcrumbs Components',
    description: "Leverage these fmUI Breadcrumb components to provide intuitive navigation paths within your interface, enhancing user experience by clearly indicating the current page's location and allowing easy movement between hierarchical levels of content.",
    tabs: [
      { component: Breadcrumbs01, codeSnippet: breadcrumbs01CodeSnippet, label: 'Default Breadcrumbs (Chevrons)' },
      { component: Breadcrumbs02, codeSnippet: breadcrumbs02CodeSnippet, label: 'Default Breadcrumbs (Slashes)' },
      { component: Breadcrumbs03, codeSnippet: breadcrumbs03CodeSnippet, label: 'Breadcrumbs with icons' },
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
    description: 'Utilize these fmUI checkbox components to allow users to select one or more options from a set, enhancing interactivity and enabling straightforward, multiple-choice selections within your interface.',
    tabs: [
      { component: Checkboxes01, codeSnippet: checkboxes01CodeSnippet, label: 'Checkbox states' },
      { component: Checkboxes02, codeSnippet: checkboxes02CodeSnippet, label: 'Checkboxes with accents' },
      { component: Checkboxes03, codeSnippet: checkboxes03CodeSnippet, label: 'List of checkbox with label' },
      { component: Checkboxes04, codeSnippet: checkboxes04CodeSnippet, label: 'Grouped checkbox with label and description' },
      { component: Checkboxes05, codeSnippet: checkboxes05CodeSnippet, label: 'Advanced grouped checkboxes' },
    ]
  },
  // Input Field Component Data
  inputField: {
    cardTitle: "Input Field",
    cardDescription: "Input fields enabling users to input non-standardized responses.",
    title: 'Input Field Components',
    description: 'Utilize these fmUI input field components to allow users to enter and edit text, offering a straightforward way to gather user information and feedback within your interface.',
    tabs: [
      { component: Inputs01, codeSnippet: inputs01CodeSnippet, label: 'Input field states' },
      { component: Inputs02, codeSnippet: inputs02CodeSnippet, label: 'Input field with label' },
      { component: Inputs03, codeSnippet: inputs03CodeSnippet, label: 'Input field with icons' },
      { component: Inputs04, codeSnippet: inputs04CodeSnippet, label: 'Input field sizes' },
      { component: Inputs05, codeSnippet: inputs05CodeSnippet, label: 'Input field with validations' },
      { component: Inputs06, codeSnippet: inputs06CodeSnippet, label: 'Input field with floating label' },
    ]
  },
  // Toggle Component Data
  toggle: {
    cardTitle: "Toggle",
    cardDescription: "Toggle is a checkbox that is styled to look like a switch button.",
    title: 'Toggle Components',
    description: 'Employ these fmUI toggle components to enable users to switch between two states, providing an intuitive way to control settings and preferences within your interface.',
    tabs: [
      { component: Toggles01, codeSnippet: toggles01CodeSnippet, label: 'Toggle states' },
      { component: Toggles02, codeSnippet: toggles02CodeSnippet, label: 'Toggle with accents' },
      { component: Toggles03, codeSnippet: toggles03CodeSnippet, label: 'Toggle with labels' },
      { component: Toggles04, codeSnippet: toggles04CodeSnippet, label: 'Toggle sizes' },
    ]
  },
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
