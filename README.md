# chillyhill.me

This is my personal blog.

## Developing

Install dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

Preview the production build with `npm run preview`.

## Useful development links

- [Deploy to GH Pages](https://github.com/metonym/sveltekit-gh-pages)
  - There is a need to go to the project's `Settings - Actions - General` and select `Allow USER, and select non-USER, actions and reusable workflows`
    - JamesIves/github-pages-deploy-action@v4
    - actions/checkout@v3
    - actions/setup-node@v3
  - In the bottom of the page, in `Workflow permissions` section, it is needed to select `
Read and write permissions`
  - In `Settings -> Pages` we need to specify a branch
- [Using GitHub Pages with a custom domain: Namecheap Edition](https://gist.github.com/plembo/84f80c920bb5ac6f19e53fe6f8db1ff7)
- [SvelteKit MD Blog](https://joyofcode.xyz/sveltekit-markdown-blog#posts-api-endpoint)
