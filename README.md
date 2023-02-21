# animated-octo-disco

This project/example is structured as a npm workspace with 3 packages:
- `stencil-library`: the stencil component library (mostly the result of `npm init stencil`)
- `react-library`: the react component library (created following [Stencil Documentation](https://stenciljs.com/docs/react#create-a-react-component-library))
- `my-app`: the NextJS app (mostly the result of `npm init next`)

## Steps to reproduce the issue

1. Run:
```sh
npm i 
npm run build
npm run build -w=stencil-library
mpm run build -w=react-library
npm run dev -w=my-app
```
2. In the browser, assert that on inital load or refresh that "Hello World! I'm" is pink
3. Click Home
4. Assert that "Hello World! I'm" is no longer pink
