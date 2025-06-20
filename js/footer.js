class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer-component>
        <span>[email: <a href="mailto:lyspfan@gmail.com">lyspfan@gmail.com</a>]</span>
        <span>[<a href="https://www.reddit.com/r/TVTooHigh/comments/1anljpv/wughh_guys_do_you_think_the_tv_is_too_high_eughh/">reddit</a>]</span>
        <span>[<a href="about.html#legal-name" target="_blank">gamer stats</a>]</span>
        <span>[<a href="trips.html" target="_blank">trips</a>]</span>
      </footer-component>
    `;
  }
}

customElements.define('footer-component', FooterComponent);