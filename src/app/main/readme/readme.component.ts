import { Component } from '@angular/core';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.scss']
})
export class ReadmeComponent {
  sections = [
    {
      heading: 'Introduction',
      content: `
This portfolio project is designed with a **VS Code theme** in mind, providing a familiar environment for developers. Built using **Angular 16**, the project is fully responsive and compatible across multiple browsers. No external libraries were used, ensuring a lightweight and dependency-free application.
      `
    },
    {
      heading: 'Features',
      content: `
- **Fully Responsive:** Adapts seamlessly to different screen sizes.
- **Cross-Browser Compatibility:** Tested across major browsers.
- **Component-Based Architecture:** Each section of the portfolio is built as a separate Angular component.
- **Custom Styling:** The design closely mimics the look and feel of Visual Studio Code.
      `
    },
//     {
//       heading: 'Technology Stack',
//       content: `
// \`\`\`plaintext
// - Angular 16
// - TypeScript
// - HTML5
// - SCSS
// \`\`\`
//       `
//     },
//     {
//       heading: 'Installation',
//       content: `
// \`\`\`bash
// # Clone the repository
// git clone https://github.com/your-repo/portfolio.git

// # Navigate into the directory
// cd portfolio

// # Install dependencies
// npm install

// # Run the application
// ng serve
// \`\`\`
//       `
//     },
//     {
//       heading: 'Usage',
//       content: `
// Simply navigate through the portfolio sections using the sidebar navigation. Each section is independently managed, reflecting a specific component in Angular.
//       `
//     },
//     {
//       heading: 'Contributing',
//       content: `
// If you'd like to contribute to this project, feel free to fork the repository, create a new branch, and submit a pull request.
//       `
//     },
//     {
//       heading: 'License',
//       content: `
// This project is licensed under the MIT License - see the \`LICENSE.md\` file for details.
//       `
//     }
  ];
}
