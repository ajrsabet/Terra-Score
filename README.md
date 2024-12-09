# Terra Score Website

## Overview
The Terra Score website is designed to inform visitors about the Terra Score mission, raise funds for the initiative, and share sustainability-related insights. The site is built using Node.js, Express, EJS, and a custom CSS stylesheet.

## Features
- Informative pages about Terra Score’s mission, goals, and team.
- Interactive donation page with tiered options.
- Blog section for updates and sustainability tips.
- Responsive design for a seamless user experience across devices.
- Modular structure with reusable EJS partials for the header and footer.

## File Structure
```
project-directory/
├── views/
│   ├── layout/
│   │   ├── layout.ejs
│   ├── partials/
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   ├── index.ejs
│   ├── about.ejs
│   ├── mission.ejs
│   ├── donate.ejs
│   ├── blog.ejs
│   ├── contact.ejs
├── public/
│   ├── styles.css
│   ├── images/  # Placeholder for images
├── app.js       # Server setup and routes
├── package.json # Dependencies and project metadata
├── README.md    # Project overview (this file)
```

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) for managing dependencies.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/terra-score.git
   ```
2. Navigate to the project directory:
   ```bash
   cd terra-score
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   node app.js
   ```
5. Open your browser and navigate to `http://localhost:3000` to view the site.

## Usage
- Customize the content in the `views/` directory to fit your specific needs.
- Update `public/styles.css` to adjust the design and branding.
- Add images to the `public/images` folder and link them in your EJS templates.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with any improvements or fixes.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
For questions or collaboration, please contact:
- Adam Sabet
- [terrascore.org](https://terrascore.org)

