module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    concat:
      ddd:
        src: ['src/ddd/**/*.js']
        dest: 'build/pokedex.js'

      test:
        src: ['build/pokedex.js', 'tests/**/*.js']
        dest: 'build/pokedex-test.js'

      options:
        separator: ';'

    typescript:
      base:
        src: ['src/**/*.ts', 'tests/**/*.ts']

    compass:
      dist:
        options:
          config: 'config.rb'

    watch:
      ts:
        files: ['src/**/*.ts', 'tests/**/*.ts']
        tasks: ['typescript', 'concat', 'clean', 'copy']
        options:
          atBegin: true

      css:
        files: ['sass/**/*.scss']
        tasks: ['compass']
        options:
          atBegin: true

    clean: ['src/**/*.js', 'tests/**/*.js']

    copy:
      app:
        src:  'build/pokedex.js'
        dest: 'meteor/pokedex.js'

  })

  grunt.loadNpmTasks('grunt-typescript')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-compass')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')

  grunt.registerTask('default', ['typescript', 'concat', 'clean', 'compass', 'copy'])
