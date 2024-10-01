pipeline {
  agent any
  stages {
    stage('check git') {
      agent any
      steps {
        sh '''echo "check git"
'''
        git(url: 'https://github.com/dunotek/jenkinsDemo.git', branch: 'develop', credentialsId: '902fc8b3-3ba8-48ba-85b5-85eb72b3ecfc')
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