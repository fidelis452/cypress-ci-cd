pipeline {
    agent any

    parameters {
        choice(name: 'BROWSER', choices:['chrome','edge'], description: "Choose browser to run scripts")
    }

    // options {
    //     buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '10'))
    // }

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

        stage('Run UI and Cypress Tests in Parallel') {
            parallel {
                stage('Run UI') {
                    steps {
                       script {
                            // run the UI
                            bat(script: 'ng serve', returnStatus: true)
                            echo 'UI script completed successfully'                           
                        }
                    }
                }
                stage('Run Cypress Tests') {
                    steps {
                            // Run Cypress Tests
                            bat "npx cypress run --browser ${params.BROWSER}" // Use 'bat' for Windows command
                            echo 'Cypress tests completed'                        
                    }
                }
            }
        }
        stage("artifacts") {
            steps {
                archiveArtifacts artifacts: 'cypress/reports/**', allowEmptyArchive: true
            }
        }
        stage("Stop UI") {
            steps {
                script {
                    // Stop the UI gracefully (you may need to adjust this based on your needs)
                    bat 'taskkill /IM ng.exe /F'
                }
            }
        }
    }

}