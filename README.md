# Karma-React-Component-Headless-Example

> Testing React TypeScript Components with Karma、Puppeteer、Enzyme In Circle CI

## Installation

```bash
$ git clone git@github.com:Army-U/karma-react-component-headless-example.git
$ cd karma-react-component-headless-example && yarn && yarn test
```

## Why ?

```tsx
export default class Example extends React.Component<{ text: string }> {
  render () {
    return (
      <button className="example">{this.props.text}</button>
    )
  }

  componentDidMount () {
    console.log(IntersectionObserver) // Does'not exited in JSDOM
  }
}
```

Jest / Enzyme is using JSDOM to test the UI Library, But JSDOM lacks many feature support, such as `IntersectionObserver` API. So we use karma-chrome-driver to test our React UI Library. Use your Chrome browser in local development mode without downloading Chromium. Using headless browser provided by CI in CI environment, or some docker images provided like [puppeteer-nvm](https://github.com/Army-U/puppeteer-nvm).

## Docker

https://hub.docker.com/r/verycool/puppeteer-nvm
