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
sh JenkinBuild.sh'''
      }
    }

    stage('') {
      steps {
        echo 'finish'
      }
    }

  }
}