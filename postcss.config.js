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
                /^dropdown/,
                /^nav-level-/,
                /^is-/,
                /^has-/,
                /^js-/
              ],
              greedy: [
                /__home/,
                /__page/,
                /__section/,
                /__term/
              ]
            }
        },
        autoprefixer: {},
        cssnano: {
            preset: 'default'
        }
    }
};
