# Mike Kozelsky’s website

A static résumé website using HTML, CSS, and plain JavaScript. Vue 3 renders the résumé from a JavaScript data file directly in the browser. There is no npm install, Vite, TypeScript, bundler, or build step.

## Local preview

From the repository directory, run:

```sh
python3 -m http.server 4175 --bind 127.0.0.1
```

Open http://127.0.0.1:4175/. Any static HTTP server works. Serve the files over HTTP rather than opening `index.html` with `file://`, because the site uses JavaScript modules. Refresh after editing; this server does not provide hot reload. If port 4175 is already in use, use the running preview or choose another port.

## Files and content

- `scripts/resume.js`: résumé data, including contact information, work history, skills, interests, and education. Dates use `YYYY-MM-DD`; a missing end date displays as “Present.” Set a job’s `includeInPrint` to control whether it appears in the printed résumé.
- `index.html`: shared markup for the screen and printed résumé, Vue bindings, and static metadata for search/social sharing.
- `scripts/app.js`: Vue initialization, reactive page title, Show More/Less behavior, short date formatting, and card positioning.
- `scripts/date.js`: long date formatting through `Intl.DateTimeFormat`, using UTC to avoid timezone-related date shifts.
- `styles/stylesheet.css`: original screen styling plus the small Vue/layout additions described below.
- `styles/print.css`: original print stylesheet, unchanged.
- `styles/OpenSans-*-webfont.woff`: locally hosted Open Sans fonts.
- `images/`: photos, employer logos, and illustrations.
- `buffalo.html`: standalone static Buffalo page with historical content; it does not load Vue.
- `CNAME`: custom domain, currently `www.mikekozelsky.com`.
- `.nojekyll`: empty marker telling GitHub Pages to serve the site without Jekyll processing.

Vue updates `document.title` from `resume.name`. The initial HTML title and other metadata in `index.html` are maintained separately; editing the data file does not update those static tags.

## Browser dependencies

The résumé loads Vue **3.5.43** from jsDelivr through the version-pinned import in `scripts/app.js`. It uses `vue.esm-browser.prod.js`, the production browser build with the template compiler. To upgrade Vue, update that import URL and check the site. There is no local `vendor/` directory.

The original appearance uses Bootstrap **3.2.0** CSS from MaxCDN and Font Awesome **6.4.2** CSS from cdnjs. The Buffalo page retains its original Font Awesome **4.2.0** CSS link. These CDN assets require a network connection. AngularJS, jQuery, Bootstrap JavaScript, and the Masonry library are not loaded.

The résumé requires JavaScript. Readers that do not execute it will not receive the full résumé, and there is no pre-rendering. PDFs saved from the rendered page contain the printed content. No Google Analytics tracking is currently configured.

## Layout behavior

A small JavaScript routine positions work-history cards in the shortest available column. `ResizeObserver` schedules layout updates when the grid or cards change size; layout also updates after fonts load, roles expand/collapse, and the print dialog closes. It skips layout work while print media is active. Vue registers these listeners on mount and cleans them up on unmount.

The additions to the original screen stylesheet are:

- `[v-cloak]`: hides unrendered Vue expressions until the app mounts.
- `.work-grid` and `.work-grid .item`: provide the positioning previously supplied by Masonry.
- `.show-more a`: supplies the hand cursor for expansion links.
- `#intro .fa`: restores spacing after contact icons that Vue’s whitespace handling removes.

## Print / Save as PDF

Use the browser’s Print command (Cmd+P / Ctrl+P). Screen and print use the same markup.

The original `print.css` preserves its existing typography, spacing, logos, icons, interests, and page-break rules. It expands collapsed roles, hides Show More/Less controls and technology lists, excludes jobs with `includeInPrint: false`, and hides the footer. The `masonry` attribute remains on the work grid so the original print selectors can undo screen positioning; it does not load the Masonry library.

Use the same paper size, scale, margins, and browser header/footer settings as before when comparing PDFs. 

## GitHub Pages

The repository files are ready to serve directly. In **Settings → Pages**, use **Deploy from a branch**, with `master` and `/ (root)` as the publishing source. Keep the custom domain consistent with `CNAME` and retain the appropriate HTTPS settings.

There is no custom deployment workflow or generated `dist/` directory. No application server is required in production. Actual GitHub Pages settings are managed in GitHub, not by these files.

## Checking changes

There is currently no automated test suite. For a quick JavaScript syntax check, if Node.js is installed:

```sh
node --check scripts/app.js
node --check scripts/date.js
node --check scripts/resume.js
```

Before publishing, use the local preview to check desktop/mobile layout, image loading, Show More/Less, the page title, `/buffalo.html`, and print preview. Check that closing print preview restores the card layout and that the browser console has no errors. Syntax checks alone do not verify browser behavior or PDF pagination.
