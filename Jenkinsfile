// @charset windows-1252

pipeline {
    agent any
    
    parameters {
        choice(name: 'BROWSER', choices:['chrome'], description: "Choose browser to run scripts")
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    credentialsId: 'e8fd72ce-1dc5-40ee-85ca-3fcb31b0c9bd',
                    url: 'https://github.com/fidelis452/cypress-ci-cd.git'
            }
        }  

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        
        // stage('Build Angular App') {
        //     steps {
        //         bat 'npx ng build'
        //     }
        // }

        stage('Serve Angular App') {
            parallel {
                stage('Serve Angular App') {
                    steps {
                        // Use the full path to http-server binary
                        bat(script: 'start /B ng serve', returnStatus: true)
                    }
                }

                stage('Run Cypress Tests and open report') {
                    steps {
                        bat 'npx cypress run'
                    }
                }
            }
        }
    }

   post {
        always {
            archiveArtifacts artifacts: 'cypress/reports/**', allowEmptyArchive: true
        }
    }
}