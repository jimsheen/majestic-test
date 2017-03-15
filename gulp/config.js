var src = 'src/',
    dest = 'min/'

var js = {
    'src': 'src/js/',
    'dest': 'min/js/',
}
var scss = {
    'src': 'src/scss/',
    'dest': 'min/css/'
}

var libs = {
    'src': 'src/libs/',
    'dest': 'min/libs'
}

module.exports = {
    defaults: {
        src: src,
        dest: dest,
        js: js,
        scss: scss,
        watchChanged: false,
        watchEvent: {},
        isProd : (process.env.NODE_ENV === 'production') ? true : false
    },
    globalScripts: {
        src: [
            `${js.src}global.js`,
            `${js.src}global/**/*.js`
        ],
        dest: js.dest,
        outputName : 'global.js'
    },
    libs: {
        sass: {
            src: [
                `${libs.src}**/*.scss`
            ],
            dest: `${libs.dest}/css`
        },
        js: {
            src: [
                'src/libs/jquery/**/*.js',
                'src/libs/foundation/**/foundation.js',
                'src/libs/foundation/**/*.js'
            ],
            dest: `${libs.dest}`
        }

    },
    sass: {
      src: [
        `${scss.src}**/*.scss`
      ],
      dest: scss.dest
    },
    scriptCompiler: {
        home: {
            deps: [
                'libs/bxslider-4',
                'components/slider',
                'components/accordion',
                'components/ajaxBlogPosts',
                'components/productList'
            ]
        },
        blog: {
            deps: [
                'components/slider',
                'components/accordion'
            ]
        },
        test: {
            deps: [
                'components/slider',
                'components/accordion'
            ]
        }
    }
};
