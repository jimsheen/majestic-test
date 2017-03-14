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
    'src' : 'src/libs/',
    'dest' : 'min/libs'
}

module.exports = {
    defaults: {
        src: src,
        dest: dest,
        js: js,
        scss: scss,
        watchChanged: false,
        watchEvent: {}
    },
    // foundation: {
    //     src: js.src + 'libs/foundation/js/foundation/',
    //     dest: js.dest + 'libs/',
    //     components: ['accordion', 'dropdown']
    // },
    libs: {
        src: [
                '!' + js.src + 'libs/foundation/**/*.js',
                libs.src + '**/*.scss'
            ],
        dest: `${libs.dest}/libs.css`
    },
    // sass: {
    //   src: [
    //     src + '/**/*.scss'
    //   ],
    //   outputName: 'moondash.css',
    //   dest: dest
    // },
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
