pipeline {
    agent any

    // parameters {
    //     choice(name: 'BROWSER', choices: ['chrome', 'edge'], description: 'Choose browser to run scripts')
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
        }
    }
}
