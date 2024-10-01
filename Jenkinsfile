pipeline {
  agent any
  stages {
    stage('check git') {
      agent any
      steps {
        sh '''echo "check git"
'''
        git(url: 'git@github.com:dunotek/jenkinsDemo.git', branch: 'develop', changelog: true, poll: true, credentialsId: '902fc8b3-3ba8-48ba-85b5-85eb72b3ecfc')
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