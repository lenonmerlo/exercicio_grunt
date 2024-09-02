module.exports = function (grunt) {

    // Configuração das tarefas
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Configuração do LESS
        less: {
            development: {
                files: {
                    'css/styles.css': 'less/styles.less' // Caminho de origem e destino
                }
            }
        },

        // Configuração da compressão de JavaScript
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                    'js/scripts.min.js': ['js/scripts.js'] // Caminho de origem e destino
                }
            }
        }
    });

    // Carregar os plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Definir as tarefas padrão
    grunt.registerTask('default', ['less', 'uglify']);
};
