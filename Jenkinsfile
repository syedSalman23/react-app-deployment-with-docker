pipeline {
    agent any

    stages {
        stage ('Changing the file permission') {
            steps {
                sh 'chmod +x ${WORKSPACE}/build.sh'
            }
        }

        stage ('Executing the file') {
            steps {
                sh '${WORKSPACE}/build.sh'
            }
        }
    }
}
