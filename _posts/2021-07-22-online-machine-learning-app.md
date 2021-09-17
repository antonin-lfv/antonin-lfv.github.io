---
layout: post
title: Machine Learning Web app
---
Cette application web developpée en python et publiée grâce à Streamlit a pour but d'accélérer l'exploration des données, et la mise en place d'algorithmes de machine learning. 
<br>
Elle est basée sur un système multi-pages, qui conserve les widgets entre celles-ci grâce à un système de Session. Le principe est simple, vous déposez votre dataset sous le format csv ou xls sur le volet gauche, puis à partir de là, il faudra se rendre dans la section <b>Dataset</b> pour l'importer, et effectuer des réglages sur celui-ci comme ajouter un séparateur, transformer des colonnes en Time-Series, ou supprimer des symboles qui empêchent un typage en float. 
<br>
Puis, libre à vous de faire votre analyse des données, observer les colonnes, leurs statistiques, les corrélations entre elles. Depuis la <b>section graphiques </b> vous pourrez tracer des graphiques avec des points, des courbes, des histogrammes ou même des coordonnées géographiques et effectuer des regressions linéaires et polynomiales. 
<br>
Enfin, vous avez la possibilité de créer des modèles de machine learning ou de deep learning rapidement.  
Dans la section ML, vous sera possible d'effectuer des KNN, K-Means, SVM, PCA et UMAP. Quant à la section DL, vous avez la possibilité de faire du transfert de style neuronal, avec plusieurs images déjà disponibles. 
<br>
En cas de bug important, veuillez me le signaler pour qu'il puisse être corrigé le plus rapidement possible.

<br>

L'application est disponible [ici](https://share.streamlit.io/antonin-lfv/online_preprocessing_for_ml/main.py).

# Index

1. [Interface](https://antonin-lfv.github.io/2021/07/22/online-machine-learning-app.html#interface)
    - [Accueil](https://antonin-lfv.github.io/2021/07/22/online-machine-learning-app.html#accueil)
    - [Chargement du dataset](https://antonin-lfv.github.io/2021/07/22/online-machine-learning-app.html#chargement-du-dataset)
    - [Analyse des colonnes](https://antonin-lfv.github.io/2021/07/22/online-machine-learning-app.html#analyse-des-colonnes)
    - [Matrice de corrélation](https://antonin-lfv.github.io/2021/07/22/online-machine-learning-app.html#matrice-de-corrélation)
    - [Section graphiques](https://antonin-lfv.github.io/2021/07/22/online-machine-learning-app.html#section-graphiques)
    - [Machine Learning](https://antonin-lfv.github.io/2021/07/22/online-machine-learning-app.html#machine-learning)
        - [k-nearest neighbors](https://antonin-lfv.github.io/2021/07/22/online-machine-learning-app.html#k-nearest-neighbors)
        - [k-Means](https://antonin-lfv.github.io/2021/07/22/online-machine-learning-app.html#k-means)
        - [Support Vector Machine](https://antonin-lfv.github.io/2021/07/22/online-machine-learning-app.html#support-vector-machine)
        - [PCA](https://antonin-lfv.github.io/2021/07/22/online-machine-learning-app.html#pca)
        - [UMAP](https://antonin-lfv.github.io/2021/07/22/online-machine-learning-app.html#umap)
    - [Deep Learning](https://antonin-lfv.github.io/2021/07/22/online-machine-learning-app.html#deep-learning)
        - [Transfert de style neuronal](https://antonin-lfv.github.io/2021/07/22/online-machine-learning-app.html#transfert-de-style-neuronal)
        - [GAN](https://antonin-lfv.github.io/2021/07/22/online-machine-learning-app.html#gan)


<br/>

# Interface

## Accueil

En arrivant sur le DashBoard, vous verrez ceci :
<br/>

<p align="center">
  <img width="1439" alt="Capture d’écran 2021-07-22 à 18 56 51" src="https://user-images.githubusercontent.com/63207451/126678415-b7980d3d-1364-45d2-9b88-4b73aae43ca6.png">
</p>

<br/>

<br/>
Il vous faut ici choisir un dataset csv ou excel de votre machine, en cliquant sur le bouton <b>Browse files</b>. Une fois cela effectuée, le menu lateral apparaîtra. Pour ensuite pouvoir utiliser votre fichier, il faut vous rendre à la page 2, nommée <b>Chargement du dataset</b>. <br/>

## Chargement du dataset

Sur cette page, plusieurs modifications sont possibles sur le dataset :
- Ajout d'un séparateur si besoin
- Conversion de colonnes en Time-Series
- Conversion de colonnes contenant des symboles monétaires en float
- Conversion de colonnes de strings de nombres à virgules en float <br/>

De plus, les caractéristiques principales de ce dataset sont affichées sur le coté.<br/>

<br/>
<br/>

<p align="center">
  <img width="1439" alt="Capture d’écran 2021-07-22 à 18 57 47" src="https://user-images.githubusercontent.com/63207451/126678557-f687704b-535d-47bf-801b-3008c926e1ef.png">
</p>

<br/>

## Analyse des colonnes

<br/>
<p align="center">
  <img width="1439" alt="Capture d’écran 2021-07-22 à 18 58 24" src="https://user-images.githubusercontent.com/63207451/126678641-70c74b1d-0bde-4215-91ce-28ec5d9e5ac7.png">
</p>

<br/>

## Matrice de corrélation

<br/>
<p align="center">
  <img width="1439" alt="Capture d’écran 2021-07-22 à 18 59 36" src="https://user-images.githubusercontent.com/63207451/126678828-a2d20126-694c-4c9b-9613-ee1d6a3ef466.png">
</p>

<br/>


## Section graphiques

<br/>
<p align="center">
<img width="1439" alt="Capture d’écran 2021-07-22 à 19 02 28" src="https://user-images.githubusercontent.com/63207451/126679232-d2968749-9b57-40ba-9543-5410342abd3c.png">
</p>

<br/>

## Machine Learning

<br/>

### k-nearest neighbors

<br/>
<p align="center">
<img width="1439" alt="Capture d’écran 2021-07-22 à 19 13 06" src="https://user-images.githubusercontent.com/63207451/126680576-11993544-5da2-4755-b235-ed513c0aa9a3.png">
</p>

<br/>

### k-Means

<br/>
<p align="center">
<img width="1439" alt="Capture d’écran 2021-07-22 à 19 13 58" src="https://user-images.githubusercontent.com/63207451/126680672-2e178b35-d8fc-49e5-b179-a4fdd30402c0.png">
</p>

<br/>

### Support Vector Machine

<br/>
<p align="center">
<img width="1439" alt="Capture d’écran 2021-07-22 à 19 15 01" src="https://user-images.githubusercontent.com/63207451/126680798-816687fd-eac9-4d4f-a817-25f9ee9876d1.png">
</p>

<br/>

### PCA

<br/>
<p align="center">
<img width="1439" alt="Capture d’écran 2021-07-22 à 19 16 15" src="https://user-images.githubusercontent.com/63207451/126680981-247d81d6-49f4-45e9-8c40-01526a237e58.png">
</p>

<br/>

### UMAP

<br/>
<p align="center">
<img width="1439" alt="Capture d’écran 2021-07-22 à 19 16 40" src="https://user-images.githubusercontent.com/63207451/126681039-aa71207a-96ae-4110-80e2-9ab8a4e59b2e.png">
</p>

<br/>

## Deep Learning

<br/>

### Transfert de style neuronal

<br/>
<p align="center">
<img width="1439" alt="Capture d’écran 2021-07-22 à 19 17 12" src="https://user-images.githubusercontent.com/63207451/126681123-f05da0b5-e0d8-496c-8c92-ef8ae10caccb.png">
</p>

<br/>

### GAN

<br/>

Cette section est en développement.

<p align="center">
<img width="1439" alt="Capture d’écran 2021-07-22 à 19 17 34" src="https://user-images.githubusercontent.com/63207451/126681154-fa50acbe-766b-44a1-89a6-43288f06d6f6.png">
</p>

<br/>



