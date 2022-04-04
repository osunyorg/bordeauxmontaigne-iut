/* eslint-disable no-undef */
var devPlugins = {},
    productionPlugins = {
        autoprefixer: {},
        cssnano: {
            preset: 'default'
        },
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
                    /^splide_/,
                    /^is-/,
                    /^has-/,
                    /^js-/,

                    // Glightbox
                    'wait-autoplay',
                    'gfadeIn',
                    'gfadeOut',
                    'gslideOutLeft',
                    'gslideInLeft',
                    'gslideOutRight',
                    'gslideInRight',
                    'gzoomIn',
                    'gzoomOut'
                ],
                deep: [
                    // Glightbox
                    /^glightbox/,
                    /^gslide/,
                    /^desc-top/,
                    /^desc-left/,
                    /^ginlined/,
                    /^zoomed/,
                    /^gdesc-/,
                    /^gabsolute/,
                    /^grelative/,
                    /^gloader/,
                    /^goverlay/,
                    /^gprev/,
                    /^gnext/,
                    /^gclose/,
                    /^gbtn/,
                    /^gcontainer/
                ],
                greedy: [
                    /__home/,
                    /__page/,
                    /__section/,
                    /__term/
                ]
            }
        }
    };

module.exports = {
    plugins: process.env.HUGO_ENVIRONMENT === 'production' ? productionPlugins : devPlugins
};
