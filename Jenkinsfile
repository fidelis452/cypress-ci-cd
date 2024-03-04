// @charset windows-1252

pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: '*/main',
                    credentialsId: 'e8fd72ce-1dc5-40ee-85ca-3fcb31b0c9bd',
                    url: 'https://github.com/fidelis452/cypress-ci-cd.git'
            }
        }     
        
        stage('Install Angular CLI') {
            steps {
                bat 'npm install -g @angular/cli'
            }
        }

        stage('Install http-server') {
            steps {
                bat 'npm install -g http-server'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        
        stage('Build Angular App') {
            steps {
                bat 'npx ng build'
            }
        }

        // stage('Serve Angular App') {
        //     steps {
        //         bat 'http-server -p 4200 -c-1 dist/angular-cypress-cicd'
        //     }
        // }

        stage('Run Cypress Tests and open report') {
            steps {
                bat 'npm run test:mocha-reporter --env baseUrl=http://localhost:4200 && npm open-report'
            }
        }
        
    }
}
