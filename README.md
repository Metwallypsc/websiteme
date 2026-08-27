# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/f74b113c-d3d6-4a04-a641-69c3675085a2

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/f74b113c-d3d6-4a04-a641-69c3675085a2) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/f74b113c-d3d6-4a04-a641-69c3675085a2) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Environment variables

Copy `.env.example` to `.env` for local development, or add the same keys
under Vercel's Project -> Settings -> Environment Variables for deployment.
Never commit a real `.env` file.

| Variable | Used for |
| --- | --- |
| `DATABASE_URL` | Admin panel visitor counter (Neon Postgres) |
| `ADMIN_USERNAME` / `ADMIN_PASSWORD` | `/admin` login |
| `ADMIN_SESSION_SECRET` | Signs the admin session cookie |
| `VITE_CALENDLY_URL` | "Book a call" popup + inline embed on `/contact` |
| `RESEND_API_KEY` | Sends the contact form's email notification |
| `RESEND_FROM_EMAIL` | Optional - sender address once a domain is verified with Resend |
| `VITE_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | Contact form spam protection (Cloudflare Turnstile) |

### Testing the contact form + booking locally

The client (`npm run dev`) runs fine without a backend, but the `/api/*`
serverless functions only run on Vercel - `npm run dev` alone can't execute
them. To test the contact form's actual submission and the admin panel
locally, use the Vercel CLI instead:

```sh
npm i -g vercel
vercel link      # first time only, links this folder to your Vercel project
vercel env pull .env.local
vercel dev
```

Without a backend running, the contact form and booking button still work
for everything except the final submit/email step (booking, validation, and
the honeypot/captcha UI all run client-side).
