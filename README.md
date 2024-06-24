# Next.js Project with Google NextAuth Authentication

This project is a [Next.js](https://nextjs.org/) application that uses [NextAuth.js](https://next-auth.js.org/) for authentication with Google.

## Getting Started

### Prerequisites

- Node.js (version X.X.X)
- npm (version X.X.X)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Create a .env file in the root of your project and add your environment variables:

   ```env
   NEXTAUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   NEXTAUTH_SECRET= auth-secret
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
```
