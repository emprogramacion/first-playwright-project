pipeline {
    agent any
    
    options {
        ansiColor('xterm') // habilita colores ANSI
    }

    stages {
        stage("Verificando Jenkinsfile"){
            steps {
                echo "\u001B[32m✅ Pipeline ejecutándose correctamente desde el Jenkinsfile.\u001B[0m"
                echo "\u001B[33m⚙️ Preparando entorno...\u001B[0m"
            }
        }
        stage("Clonar repositorio") {
            steps {
                git (
                    url: "https://github.com/emprogramacion/first-playwright-project.git",
                    credentialsId: 'token-jenkins',
                    branch: 'main'
                    )
            }
        }
        stage("Instalar dependencias"){
            steps{
                //Mandar sh si es Linux o bat si es Windows dependiendo del SO local
                //Jenkins se configuró para correr en local
                bat 'npm install --force'
                bat 'npx playwright install'
            }
        }
        stage("Ejecutar las pruebas"){
            steps{
                bat 'npx playwright test'
            }
        }
        stage("Publicar reporte"){
            steps{
                publishHTML([
                    reportName : "Playwright Tests",
                    reportDir : "playwright-report",
                    reportFiles : "index.html",
                    keepAll : true,
                    alwaysLinkToLastBuild : true,
                    allowMissing : false
                    ])
            }
        }
    }
}
