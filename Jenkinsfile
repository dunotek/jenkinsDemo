pipeline {
  agent any
  stages {
    stage('check git') {
      agent any
      steps {
        sh '''echo "check git"
'''
      }
    }

    stage('deploy') {
      steps {
        sh '''pwd
cd buildCmd/
chmod +x ./JenkinBuild.sh 
sh ./JenkinBuild.sh'''
      }
    }

    stage('error') {
      steps {
        echo 'finish'
      }
    }

  }
}