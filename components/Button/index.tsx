import * as React from 'react'

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
