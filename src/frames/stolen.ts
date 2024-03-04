const html = String.raw;

export default {
    name: 'poster',
    logic: () => null,
    content: () => html`
        <frame-image src="/images/poster-animated.gif" />
        <frame-button>
            Donate Now!
        </frame-button>
        <frame-button action="link" target="${process.env.STOLEN_REDIRECT_URL}">
            Contact Us
        </frame-button>
    `
};
