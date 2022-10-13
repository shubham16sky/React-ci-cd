pipeline{
    agent { label 'marshal' }
     


    stages{
        stage('Git checkout')
        {
            steps{
                git branch: 'main', url: 'https://github.com/shubham16sky/React-ci-cd.git'
            }
        }
        stage('Docker build')
        {
            steps{
                sh 'docker build -t frontend .'
            }
        }
        
        stage('Docker run')
        {
            steps{
                sh './script.sh'
            }
        }
    }
}
