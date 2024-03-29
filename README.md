# Projet Architecture des Applications - Polytech REVA 2019/20 - Jerome L. - Mathilde M. - Ana-Maria T.

## Version 1.0 : 
### Objectif : 
Récupérer et diffuser UN flux radio en ligne. Pour généraliser à plusieurs flux, il faudra d'abord collecter - automatiquement - les flux du web en utilisant par exemple Scrapy et Selenium (voir ci-dessous).

Lien pour un flux : [par Google Sites](https://sites.google.com/view/j-lab-10/accueil)

Lien venant d'un fichier HTML du projet actuel : [ici](https://htmlpreview.github.io/?https://github.com/Xajer28/Poly_REVA_Archi/blob/master/Version%201.0/index.html)

### Tutoriel : 
[Lien contenant les flux radios](https://www.linuxpedia.fr/doku.php/flux_radio)

#### Selenium (Linux) : 
- Installer le moteur Geckodriver dans usr/bin
```code
wget https://github.com/mozilla/geckodriver/releases/download/v0.23.0/geckodriver-v0.23.0-linux64.tar.gz
sudo sh -c 'tar -x geckodriver -zf geckodriver-v0.23.0-linux64.tar.gz -O > /usr/bin/geckodriver'
sudo chmod +x /usr/bin/geckodriver
rm geckodriver-v0.23.0-linux64.tar.gz
```
- Executer le script :
```code
cd ./Version_1.1/Selenium_Drafts
python3 firefox_draft.py
```
- Résultats de la récupération dans `radios.json`

#### Scrapy + Selenium
- Installer Selenium (voir ci-dessus)
- Installer Scrapy : `pip install Scrapy`
- Executer la spider (Mettre a jour le JSON): 
```code
cd ./Version_1.1/Scrapy_Drafts
scrapy crawl radio-spyder -o radios.json && cp ./output.json ../Site
```

- [Lien du site résultant](https://htmlpreview.github.io/?https://github.com/Xajer28/Poly_REVA_Archi/blob/master/Version_1.1/Site/index.html)

#### Support VLC (Lire le flux depuis un port diffusé par VLC)

- Se situer dans ```Version_1.1/VLC-Server/```
- Lancer la commande ```node server```
- Sélectionner une radio dans le menu déroulant
- Attendre que le flux arrive dans le lecteur
- Profitez ! :)

## Version 2.0
### getUserMedia
On récupère le flux video de la webcam du client.

## Dépendances :
- [Scrapy](https://scrapy.org/)
- [Selenium](https://selenium.dev/)
- [Geckodriver](https://github.com/mozilla/geckodriver/releases) (Moteur Firefox)
- [Python3](https://www.python.org/)
- [NodeJS](https://nodejs.org)
- [WecRTC](https://webrtc.org/)