/* eslint-disable no-undef */
module.exports = {
    plugins: {
        autoprefixer: {},
        cssnano: {
            preset: 'default'
        },
        '@fullhuman/postcss-purgecss': {
            content: [
                // './hugo_stats.json',
                './themes/**/*.html',
                'layouts/**/*.html'
            ],
            // defaultExtractor: (content) => {
            //     let els = JSON.parse(content).htmlElements;
            //     return els.tags.concat(els.classes, els.ids);
            // },
            safelist: {
                standard: [
                    'show',
                    'active',
                    'collapsed',
                    'h1',
                    'h2',
                    'h3',
                    'h4',
                    'h5',
                    'h6',
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
                    /block-/,
                    /ratio/,
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
                    /__term/,
                    /__taxonomy/,
                    /posts/,
                    /block-timeline/,
                    /call_to_action/,
                    /association/,
                    /pleas/,
                    /posts/,
                    /challenges/,
                    /point-de-vue/,
                    /publications/,
                    /actualites/,
                    /agir-soutenir/
                ]
            }
        }
    }
};
