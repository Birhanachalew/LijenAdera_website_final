# Lijenadera Tutor-Family Connector

A Next.js app for matching families with qualified tutors (in-person or online). Includes animated hero CTAs, Steps & Rules overview, testimonials, and services carousel.

## Key Links
- Tutor registration form: https://forms.gle/1hZCoW3efV6GcYHU8
- Family registration form: https://forms.gle/MoWnertcdxqs7bej6
- Steps & Rules page: /steps-and-rules
- How we work (home anchor): /#how-it-works
- Contact: /contact-us

## Run Locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Project Notes
- Main hero CTA buttons live in app/page.js.
- Navigation bar is in app/components/MainHeader.js.
- Steps & Rules content and animations are in app/steps-and-rules/page.js.
- Global styles and fonts are configured via Tailwind (tailwind.config.js) and app/globals.css.

## Build
```bash
npm run build
npm run start
```This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
