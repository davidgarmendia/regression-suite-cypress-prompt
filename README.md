Overview

This repository represents the third phase of my automated regression testing series. While previous iterations focused on manual standardization and Studio-based augmentation, this suite leverages Cypress Prompt (AI-driven generation) to accelerate test creation while maintaining high-quality regression standards.

Tech Stack
Framework: Cypress

Methodology: AI-Assisted Test Generation (Cypress Prompt)

Type: Functional Regression Testing

Language: JavaScript / ESNext

Evolution Context
regression-suite-standardization: Core manual scripting and framework architecture.

regression-suite-studio-augmentation: Utilizing low-code recorders for rapid prototyping.

regression-suite-cypress-prompt (Current): Utilizing natural language prompts to generate resilient, readable test code.

Project Structure
Plaintext
├── cypress/
│   ├── e2e/            # Regression tests organized by feature
│   ├── fixtures/       # External test data
│   └── support/        # Custom commands & AI-prompt configurations
├── .gitignore          # Environment & dependency protection
└── cypress.config.js   # Main configuration
Naming Conventions
To ensure clarity when using AI-generated code, this project follows a strict naming convention:

Files: [feature]_[action].cy.js (e.g., auth_login-recovery.cy.js)

Prompt Logic: Every test file begins with a comment block detailing the prompt used to generate the initial script for full transparency.
