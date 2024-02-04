pipeline {
    agent any
    tools {nodejs "node"}

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/claudio-bs/testes-mobile/tree/main/testes-mobile-ebac-shop'
            }
        }
    
        stage('Instalar dependencias'){
            steps {
                sh 'npm install'
            }
        }
        stage ('Executar teste'){
            steps{
                sh 'NO_COLOR=1 npm run wdio'
            }
        }
        
    }
}