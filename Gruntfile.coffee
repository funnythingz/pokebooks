module.exports = (grunt)->

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-compass')

  grunt.registerTask('default', ['compass'])

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    compass:
      dist:
        options:
          config: 'config.rb'

    watch:
      css:
        files: ['scss/**/*.scss']
        tasks: ['compass']
        options:
          atBegin: true
  })
