pipeline {
    agent any

    stage('Processing') {
        steps {
            script {
                // Determine the branch name
                def branchName = env.BRANCH_NAME
                echo "Branch Name: ${branchName}"

                // Decide which environment to deploy based on the branch name
                if (branchName == 'main') {
                    echo 'deploying to production'
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
                                            bat(script: 'start /B ng serve', returnStatus: true)
                                            echo 'UI script completed successfully'
                                        }
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
                        }
                    }
                    post {
                        always {
                            archiveArtifacts artifacts: 'cypress/reports/**', allowEmptyArchive: true
                        }
                    }
                            } else if (branchName == 'dev') {
                    echo 'deploying to development now'
                    stages {
                        stage('Checkout Code') {
                            steps {
                                git branch: 'dev',
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
                                            bat(script: 'start /B ng serve', returnStatus: true)
                                            echo 'UI script completed successfully'
                                        }
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
                        }
                    }
                    post {
                        always {
                            archiveArtifacts artifacts: 'cypress/reports/**', allowEmptyArchive: true
                        }
                    }
                            } else if (branchName == 'QA') {
                    echo 'deploying to QA now'
                    stages {
                        stage('Checkout Code') {
                            steps {
                                git branch: 'QA',
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
                                            bat(script: 'start /B ng serve', returnStatus: true)
                                            echo 'UI script completed successfully'
                                        }
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
                        }
                    }
                    post {
                        always {
                            archiveArtifacts artifacts: 'cypress/reports/**', allowEmptyArchive: true
                        }
                    }
                }
            }
        }
    }
}
