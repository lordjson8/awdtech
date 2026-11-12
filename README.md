# AWDTech — corporate website

Corporate website of AWD Sarl, a software company based in Douala, Cameroon. Live at [awdtech.org](https://awdtech.org).

It presents the company's services and projects and includes a contact form that emails enquiries to the team.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) with React 19 and TypeScript
- Tailwind CSS v4 and Radix UI primitives
- `next-intl` for internationalised routes and copy (`messages/`)
- Framer Motion for entrance animations
- React Hook Form + Zod for form validation
- Nodemailer for the contact form (SMTP)

## Getting started

```sh
git clone https://github.com/lordjson8/awdtech.git
cd awdtech
npm install
npm run dev
```

Then open http://localhost:3000.

### Environment variables

The contact form needs SMTP credentials. Create a `.env` file at the project root:

```
SMTP_HOST="smtp.example.com"
SMTP_PORT="587"
SMTP_SECURE="false"
SMTP_USER="user@example.com"
SMTP_PASSWORD="your-password"
SMTP_FROM="noreply@example.com"
ADMIN_EMAIL="admin@example.com"
```

## Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm start` | Serve the production build with `server.js` |
| `npm run lint` | Run ESLint |

## Project structure

```
app/          routes (App Router)
components/   UI and section components
constants/    static configuration
data/         page content
i18n/         next-intl configuration
messages/     translations
lib/          helpers
public/       static assets
```
