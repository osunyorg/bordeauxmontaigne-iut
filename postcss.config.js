// eslint-disable-next-line no-undef
module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: [
                './themes/**/*.html',
                'layouts/**/*.html'
            ],
            safelist: {
              standard: [
                'show',
                'active',
                'collapsed',
                /^nav-level-/,
                /^is-/,
                /^has-/,
                /^js-/
              ],
              greedy: [
                /administrators__/,
                /authors__/,
                /categories__/,
                /page__/,
                /pages__/,
                /posts__/,
                /programs__/,
                /teachers__/
              ]
            }
        },
        autoprefixer: {},
        cssnano: {
            preset: 'default'
        }
    }
};
