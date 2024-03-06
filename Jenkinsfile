pipeline {
    agent any

    parameters {
        choice(name: 'BROWSER', choices: ['chrome', 'edge'], description: 'Choose browser to run scripts')
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

        stage('Run Cypress Tests') {
            steps {
                // Wait for the UI to start before running Cypress tests
                script {
                    echo 'Waiting for UI to start...'
                    waitUntil {
                        return bat(script: 'curl --silent --fail http://localhost:4200', returnStatus: true) == 0
                    }
                    echo 'UI is ready for Cypress tests.'
                }

                // Run Cypress Tests
                bat "npx cypress run --browser ${params.BROWSER}" // Use 'bat' for Windows command
                echo 'Cypress tests completed'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/reports/**', allowEmptyArchive: true
        }
    }
}
