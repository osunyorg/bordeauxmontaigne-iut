// eslint-disable-next-line no-undef
module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: [
                './themes/**/*.html',
                'layouts/**/*.html'
            ],
            safelist: [
                'show',
                'active',
                'collapsed',
                'nav-level-1',
                'nav-level-2',
                'nav-level-3',
                /^is-/,
                /^has-/,
                /^js-/
            ]
        },
        autoprefixer: {},
        cssnano: {
            preset: 'default'
        }
    }
};
