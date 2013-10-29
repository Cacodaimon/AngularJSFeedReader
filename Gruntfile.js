module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['uglify:prod', 'htmlmin:prod', 'cssmin:prod']);
  grunt.registerTask('cleanup', ['clean']);

  grunt.initConfig({
    uglify: {
      prod: {
        options: {
          'beautify': false,
          'mangle':   false,
          'report':   'min'
        },
        files: {
          'scripts/app.min.js': ['dev/scripts/**/*.js']
        }
      }
    },
    htmlmin: {                                     
      prod: {                                      
        options: {                                 
          removeComments:            true,
          collapseWhitespace:        true,
          removeRedundantAttributes: true,
          removeEmptyAttributes:     true,
          removeOptionalTags:        true,
          removeAttributeQuotes:     true,
          collapseBooleanAttributes: true,

        },
        files: {       
          'index.html':             ['dev/index.html'],                           
          'views/item.html':        ['dev/views/item.html'],
          'views/list.html':        ['dev/views/list.html'],
          'views/manage/add.html':  ['dev/views/manage/add.html'],
          'views/manage/list.html': ['dev/views/manage/list.html']
        }
      },
    },
    cssmin: {
      prod: {
        cwd: '',
        src: ['dev/css/*.css', '!*.min.css'],
        dest: 'css/app.min.css'
      }
    },
    clean: ['index.html', 'css', 'views', 'scripts']
  });
};

/*
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-htmlmin --save-dev
npm install grunt-contrib-cssmin --save-dev
npm install grunt-contrib-clean --save-dev*/