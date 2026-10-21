# CSI Trivandrum Chapter website (csitvm.in)

Static site for the Computer Society of India, Trivandrum Chapter. Plain HTML, CSS and JavaScript. There is no build step and nothing is loaded from a CDN. It works when served from GitHub Pages or opened straight from a folder.

## Folder structure

```
index.html, about.html, membership.html, office-bearers.html,
chapter-election.html, events.html, publications.html, awards.html,
contact.html, 404.html        Pages (root page is index.html)
assets/css/site.css           All styling; colours and spacing are tokens at the top
assets/js/theme-init.js       Sets the saved theme before first paint (light is default)
assets/js/site.js             Header, footer, theme toggle and data-driven blocks
assets/img, assets/docs       Images and PDFs
data/site.js                  Navigation, address, phone, email, social and related links
data/content.js               Membership forms, newsletters, events, awards
data/office-bearers.js        Roll of honour table
CNAME, .nojekyll, robots.txt, sitemap.xml
CLAUDE.md                     Notes for future editing sessions
```

## Common edits

| To do this | Edit |
| --- | --- |
| Change address, phone, email, social links, footer links, menu items | `data/site.js` |
| Add an event | `data/content.js`, `events` list (add the poster to `assets/img`) |
| Add a newsletter or form | `data/content.js`, `newsletters` or `forms` list (add the PDF to `assets/docs`) |
| Add office bearers for a new year | `data/office-bearers.js`, add a row at the END |
| Change colours, fonts, spacing | Tokens at the top of `assets/css/site.css` |
| Add a page | Copy `contact.html`, change title, description, canonical URL and the content; add it to `data/site.js` `nav` and to `sitemap.xml` |

## Deploy on GitHub Pages with csitvm.in

1. Create a GitHub repository named `csitvm` and push the contents of this folder (`csitvm/`) to the root of its `main` branch, so `index.html` is at the repository root.
2. In the `csitvm` repository, open Settings, then Pages. Under "Build and deployment" choose "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Under "Custom domain" enter `csitvm.in` and save. The `CNAME` file in this folder already holds that value. Tick "Enforce HTTPS" once the certificate is issued.
4. At the domain registrar's DNS settings, add these records:
   - `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` pointing to `<your-github-username>.github.io`

   Check these addresses against GitHub's current "Managing a custom domain" documentation before you apply them. DNS changes can take several hours to take effect.

## Notes

- Paths are relative so the site works from any folder. The exception is `404.html`, which uses root-relative paths because it can be served from any URL depth.
- Data lives in `.js` files, not JSON, so pages work when opened with a double click (browsers block `fetch` of local files).
- `site.js` builds the header and footer on every page. Pages include a `noscript` fallback menu.
- Light is the default theme. The visitor's explicit choice is saved in `localStorage` under `csitvm-theme`.
