import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'my-other-component',
  styleUrl: 'my-other-component.css',
  shadow: false,
})
export class MyOtherComponent {
  render() {
    return <Host></Host>;
  }
}
