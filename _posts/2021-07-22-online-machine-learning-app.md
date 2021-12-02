---
layout: post
title: Machine Learning Web app ⭐️
---

<p align="center">
  La <b>No-code AI platform</b> est un site développé avec <b>Python</b> et déployé avec <b>Streamlit</b>, qui permet de faire du Machine/Deep Learning sans écrire de code. La partie analyse et Machine Learning repose sur l'utilisation d'un dataset, qui peut être soit un dataset déjà disponible sur le site (les iris, ou les penguins), soit un dataset de votre choix que vous aurez uploadé, et avec qui vous pourrez effectuer du preprocessing directement depuis la page d'upload (Attention à bien re télécharger le dataset modifié et de le re uploader). Une fois le dataset choisi, vous pouvez l'utiliser pour alimenter des algorithmes tels que des SVM, des K-Means, des KNN ou encore des réductions de dimension.
Enfin, la partie Deep Learning peut être traitée indépendamment, elle contient deux modèles, un transfert de style neuronal et un modèle de détection d'objets sur une image, où des images sont déjà disponibles.
</p>

<br/>

L'application est disponible [**ici**](https://share.streamlit.io/antonin-lfv/online_preprocessing_for_ml/main.py).

# Index

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
     - [Détection d'objets](https://antonin-lfv.github.io/2021/07/22/online-machine-learning-app.html#detection-dobjets)


<br/>


# Accueil

<br/>

<p align="center">
<img src="https://user-images.githubusercontent.com/63207451/144222004-d9721f6e-1618-4713-8096-1e4b5e4ae060.png" height="400">
</p>
  <br/>

# Dataset

<br/>

Vous voici sur la page dataset, là où vous allez choisir vos données.
Initialement la page est comme ceci :

<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/63207451/144222112-65e16ab0-3443-4cbe-a9f2-8ba3c97ab89f.png" height="400">
</p>
<br/>

Soit vous choisisez un dataset déjà prêt :

<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/63207451/144223120-b5d65c93-82ec-4798-850e-2ab10e8a099d.png" height="400">
</p>
<br/>

Soit vous choisissez le votre :

<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/63207451/144223225-2f868156-9007-4c96-9863-6ceaa6d07ea5.png" height="400">
</p>

<br/>

# Analyse des colonnes

<br/>
Vous pouvez choisir les colonnes à analyser :

<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/63207451/144224164-8d696e66-77f1-4273-bd55-39df5daa813e.png" height="400">
</p>

<br/>

# Matrice de corrélation

<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/63207451/144224328-55713f47-c89e-4563-9337-a90e5f4faa7e.png" height="400">
</p>

<br/>

# Section graphiques

<br/>
Ici vous pouvez analyser des paires de features et effectuer des regressions :

<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/63207451/144224423-caee36c6-627b-4fcc-8d8b-85006decbd61.png" height="400">
</p>

<br/>

# Machine Learning

## k-nearest neighbors

<br/>
Création d'un modèle de KNN :

<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/63207451/144224690-3fdf5872-7966-4c88-8acb-2844f6f2750d.png" height="400">
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/63207451/144224707-d749f5fb-fe78-4623-939b-13eeb400042b.png" height="400">
</p>

<br/>

## k-Means

<br/>
Création d'un modèle de K-Means :

<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/63207451/144233663-c81215a4-4aee-4a08-95ee-40f5f605c62a.png" height="400">
</p>

<br/>

## Support Vector Machine

<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/63207451/144233818-415e234a-edfc-4cdf-a699-c20169a56407.png" height="400">
</p>

<br/>

## PCA

<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/63207451/144234084-74882cad-752f-4f1c-812c-3c5f093221b3.png" height="400">
</p>

<br/>

## UMAP

<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/63207451/144234174-c3618a43-86e8-44d0-95dd-8715d0342932.png" height="400">
</p>

<br/>

# Deep Learning

## Transfert de style neuronal

<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/63207451/144234295-ad263879-86e5-4c07-b434-da5d1a0d8586.png" height="400">
</p>

<br/>

## Détection d'objets

<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/63207451/144234420-278d664e-ae63-415a-88d2-89113304d660.png" height="400">
</p>




