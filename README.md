# Next.js 15 Hydration Mismatch Error

This repository demonstrates a common hydration mismatch error in Next.js 15 applications.  The error occurs when dynamic content on a page differs between the server-side render and the client-side hydration.  The example uses a simple date object, but the principle applies to any dynamically generated content.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project_directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Reproducing the Error

Navigate to the `/about` page. You should see a hydration mismatch error in your browser's console.

## Solution

See `about.js` for the solution.

## Solution Explanation

The issue is resolved by ensuring consistent rendering between the server and client.  Instead of directly rendering a dynamic `Date` object, which will likely vary slightly, we now fetch the date data on the server and pass it as a prop to the client-side component.