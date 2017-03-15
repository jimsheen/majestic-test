# Modular JS and SASS Boilerplate with Gulp

A useful boilerplate for modular web development which compiles and outputs template specific JS and CSS files so only relevant code and styles are loaded onto a particular page, dramatically increasing page load speed.

## Installation

To install this repo, run the following:

```
$ git clone https://github.com/jimsheen/modular-gulp-js-and-sass-boilerplate.git
$ npm install
```

NOTE: I have included the Foundation framework and jQuery as default bower packages in bower.json


## Getting Started

npm install will install bower packages and move necessary bower files to the "src" folder and then compile the project.

The development task compiles all scripts and sass into the min folder with sourcemaps

```
$ gulp dev
```

The build task compiles all scripts and sass to the min folder but also runs:
	- uglify
	- strip debug
	- css minification

```
$ gulp build
```

And watch task to watch for changes in both JS and SASS files

```
$ gulp watch
```


## The config file

During development you will need to update the config file regularly. Think of this as a custom dependency configuration file for your JavaScript files.

```
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
        }
    }
```

Here we have definied that we want to output two JS files:
	- home
	- blog

These will be compiled along with their dependencies into a single JS file of the same name. e.g. home.js, blog.js

I have left the bxslider-4 library as an example of how you can include libraries for specific pages/templates.

It's good practice to include libraries at the top of the dependency chain.
