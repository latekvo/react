# `react-devtools-radon-ide`

## Overview

This package provides components and functionalities from React DevTools, specifically adapted for integration with the Radon IDE.

It is based on the `react-devtools-inline` package but only exports the **Headless Frontend** part. This includes the React DevTools frontend logic, stripped of its UI components, designed to run in a Node.js environment as required by Radon IDE.

Key features:
*   Runs React DevTools frontend headlessly in Node.js.
*   Includes additional methods for importing and exporting React DevTools profiling data.

## Usage with Radon IDE

To use this package with the Radon IDE:

1.  Check out the `radon-ide` branch from the Software Mansion fork: `https://github.com/software-mansion-labs/react/`.
2.  Navigate to the `packages/react-devtools-radon-ide` directory.
3.  Run the build command: `npm run build`
4.  Copy the contents of the generated `dist/` folder into the Radon IDE's `third-party/react-devtools/` directory under `vscode-extension` package.

