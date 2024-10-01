pipeline {
  agent any
  stages {
    stage('start') {
      steps {
        sh 'echo "hello"'
      }
    }

    stage('deploy') {
      steps {
        sh '''pwd
sh buildCmd/JenkinBuild.sh'''
      }
    }

    stage('error') {
      steps {
        echo 'finish'
      }
    }

  }
}