class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("Custom move-handling logic here.");
    this.innerHTML = `
      <span>[<a href="about.html">about me</a>]</span>
      <span>[<a href="https://www.reddit.com/r/TVTooHigh/comments/1anljpv/wughh_guys_do_you_think_the_tv_is_too_high_eughh/" target="_blank">reddit</a>]</span>
      <span>[<a href="trips.html">trips</a>]</span>
      <span>[email: <a href="mailto:lyspfan@gmail.com">lyspfan@gmail.com</a>]</span>
    `;
  }
}

customElements.define('footer-component', FooterComponent);