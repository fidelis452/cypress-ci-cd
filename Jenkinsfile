// @charset windows-1252

pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    credentialsId: 'e8fd72ce-1dc5-40ee-85ca-3fcb31b0c9bd',
                    url: 'https://github.com/fidelis452/cypress-ci-cd.git'
            }
        }
        
        stage("install ng") {
            steps{
                bat 'npm install -g @angular/cli'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install -g node'
            }
        }
        
        stage('Serve the Angular App') {
            steps {
                bat 'npx ng serve open'
                
                // Wait for Angular application to be available
                script {
                    def appUrl = 'http://localhost:4200/'
                    echo "Waiting for the Angular application at $appUrl to be available..."
                    waitUntil {
                        return bat(script: "curl --silent --fail $appUrl", returnStatus: true) == 0
                    }
                    echo "Angular application is available."
                }
            }
        }
        

        stage('Run Cypress Tests and open report') {
            steps {
                bat 'npm run test:mocha-reporter --env baseUrl=http://localhost:4200 && npm open-report'
            }
        }
        
    }
}
