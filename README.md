## Login with SSH Key on  AWS
    sudo apt update

## This is the Debian package repository of jenkins to automate intallation and upgrade. To use this repository, first add the key to your system

    curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
    /usr/share/keyrings/jenkins-keyring.asc > /dev/null

## Then add a jenkins apt repository entry:

    echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
    https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
    /etc/apt/sources.list.d/jenkins.list > /dev/null

## Installation of Java

    sudo apt update
    sudo apt install openjdk-17-jre
    java -version

## update your local package index, then finally install jenkins

    sudo apt-get update
    sudo apt-get install jenkins

#### https://www.jenkins.io/doc/book/installing/linux/#debianubuntu

#### https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04

## install NodeJS on Ubuntu

    sudo apt-get install curl
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    source ~/.bashrc

    nvm install v18.16.1
    sudo apt-get update
    node -v

## not Requard Reboot but maybe some service working if we will not reboot

    sudo reboot

## Need to be check jenkins is Run or not

    systemctl status jenkins
    // active running

## create admin password for jenkins

    cd /
    cd /var/lib/jenkins
    sudo nano secrets/initialAdminPassword

## go to server and enter credential

    username
    password

## install suggested plugin

## server update

    sudo apt-get update

## setup jenking

    1: go to server url like ip:8080 // http://13.231.114.104:8080
    2: create Jenkins First Admin user
    3: save & continue
    4: Start using jenkins

## install Docker

    sudo apt-get install docker.io


