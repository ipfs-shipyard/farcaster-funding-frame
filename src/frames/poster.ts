import { FrameActionDataParsed } from "frames.js";
const html = String.raw;

export default {
    name: 'poster',
    logic: (message: FrameActionDataParsed) => {
        if (message.buttonIndex == 1) {
            return `count`
        }
    },
    content: () => html`
        <frame-image src="/images/ipshipyard-rocket-logo_230x230.jpg" />
        <frame-button action="link" target="https://ipshipyard.gitwallet.co">
          Donate Now!
        </frame-button>
        <frame-button action="link" target="https://ipshipyard.com/contact-us">
            Contact Us
        </frame-button>
    `
};
