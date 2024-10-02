pipeline {
  agent any
  stages {
    stage('check git') {
      agent any
      steps {
        sh '''echo "check git"
'''
        git(credentialsId: '902fc8b3-3ba8-48ba-85b5-85eb72b3ecfc', branch: 'develop', changelog: true, poll: true, url: 'git@github.com:dunotek/jenkinsDemo.git')
      }
    }

    stage('build') {
      steps {
        sh '''pwd
chmod +x ./JenkinBuild.sh 
sh ./JenkinBuild.sh'''
      }
    }

    stage('deloy') {
      steps {
        echo 'finish'
      }
    }

  }
}