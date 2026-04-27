# seeyouyou-site

Static site for [seeyouyou.app](https://seeyouyou.app), hosting:

- A minimal landing page
- The SeeYouYou Privacy Policy (v1.2) at `/privacy/`
- The SeeYouYou Terms of Service (v1.2) at `/terms/`

The legal text on this site is rendered word-for-word from the source
Markdown bundled inside the SeeYouYou Android app, so the in-app version
and the public version stay aligned.

## Stack

Plain HTML and CSS. No build step, no dependencies, no JavaScript.
Hosted on GitHub Pages with a custom domain via the `CNAME` file.

## Local preview

From the repo root:

```
python -m http.server 8000
```

Then open http://localhost:8000/.

## About

SeeYouYou is operated by Avamelia, sole proprietor, Denmark.
Contact: Geekeez@gmail.com
