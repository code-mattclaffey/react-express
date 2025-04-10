# ⚛️ React Express

This project is a React project built to get you up and running with a component library within minutes.

## Getting started

Please use node version 16 or above but below version 22

To install the dependencies, run:

```bash
# install deps using package-lock

npm ci

npm run build:web-components // To build the web component script

npm run dev // starts storybook
```

## Usage

To use the React modules in other applications, build the project using Webpack:

```bash
npm run build
```

This will generate a package that can be installed in your other applications.

## Development

### Project Structure

- **src/components**: Contains the React components.

- **storybook**: Contains the Storybook configuration and stories.

### Scripts

- `npm dev`: Start the storybook

- `npm run build`: Build the React modules using Vite.

- `npm run storybook`: Start the Storybook server.

- `npm run build-storybook`: Build the Storybook documentation.

- `npm run test`: Run the Jest tests.

- `npm run prettier-check`: Run the prettier checks.

- `npm run lint`: Run the eslint checks

### Guidance for components

#### Creating your own component

To make your own component following the standards of other components we have introduced a script which will do all the boiler plate for you.

```
npm run create:component -- ComponentName
```

This will do:

- Create the component folder in src/components
  - Setup your storybook instance
  - Setup your test suite
- Add it to the barrel file in src/components/index.ts
- Add itself to the web components bundler which is web-components/index.tsx

What it won't update is the props in the web-components when you add new ones, the command is purely to get you up and running.

## Testing

This project uses Jest for testing. Currently, Jest is only set up for React components, not for web components. To run the tests, use:

```bash
npm  run  test
```

## Storybook documentation

When you create a component with the script (see [Creating your own component](#creating-your-own-component) ), it will create a `.mdx` file within the `stories` folder which is the documentation for storybook.

If `Markdown` is required, it will need to be added to the import at the top of the `.mdx` file within the `@storybook/blocks` import

Usage:

```
<Markdown></Markdown>
```

To create a table:

```
<Markdown>
  {`
| Heading1 | Heading2    |
| -------- | ----------- |
| test     | test        |
| test     | test        |
| test     | test        |
`}
</Markdown>
```
