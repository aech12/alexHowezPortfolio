Hello, I'm Alex! This is my portfolio page made with Gatsby.

Todo
- Use gatsby image on portfolio images



-----------

## Original Theme
[Gatsby-theme-portfolio](https://github.com/smakosh/gatsby-theme-portfolio)
Project on [Behance](https://www.behance.net/gallery/74172961/Free-Gatsby-portfolio-for-developers)

## Features
- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- PWA (desktop & mobile)
- Easy to customize
- Nice project structure
- Amazing illustrations by Undraw.co
- Tablet & mobile friendly
- Continuous deployment with Netlify
- A contact form protected by Google Recaptcha
- Can be deployed with one click
- Functional components with Recompose React Hooks! ready to migrate to React hooks!
- Fetches your Github pinned projects with most stars (You could customize this if you wish)

## Structure
```bash
.
├── data
│   └── config              # SEO related tags
├── src
│   ├── components          # Components
│   │   │── common          # Common components
│   │   │── landing         # Components used on the landing page
│   │   └── theme           # Header & Footer
│   └── pages               # Pages
└── static                  # Icons, favicon & SVG illustrations
```

## Prerequisites

[Yarn](https://yarnpkg.com/en/)

Please create a new file `.env.development` and put this env variable with your GitHub token

> If you're building locally, you will have to create a new file `.env.production` and put the same env variable

```bash
GITHUB_TOKEN=xxxxxxxxxx
```

Don't forget to edit your site's data on `data/config.js` file with your Google Recaptcha public key

When deploying on Netlify, you will have to set the private key as well

```bash
SITE_RECAPTCHA_KEY=xxxxx

SITE_RECAPTCHA_SECRET=xxxxx
```

I highly recommend you check this [repository](https://github.com/imorente/gatsby-netlify-form-example) for more details about the Google Recaptcha and Netlify forms

## Built with
- Adobe XD
- Gatsby
- React & GraphQL
- VSCode
- And these useful of JavaScript libraries & Gatsby plugins [package.json](package.json)