pipeline {
    agent {
        node {
            label 'alpha'
        }
    }

    stages {
        stage('Fetch Code') {
            steps {
                git branch: 'main',
                    credentialsId: 'df4ab154-c415-4d2c-a5cb-0f4dd99339d7',
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
                // Run Cypress Tests
                bat "npx cypress run --browser chrome" // Use 'bat' for Windows command
                // bat "npx cypress run --browser ${params.BROWSER}" // Use 'bat' for Windows command
                echo 'Cypress tests completed'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/reports/**', allowEmptyArchive: true

            // Publish HTML reports
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'cypress/reports',
                reportFiles: 'index.html',
                reportName: 'Cypress Reports'
            ])
        }
    }
}
