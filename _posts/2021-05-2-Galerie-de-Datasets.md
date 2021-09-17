---
layout: post
title: Galerie de Datasets
---


La **Data Science** requiert l'utilisation de base de données/ datasets pour pouvoir créer des modèles, analyser des tendances, etc. 
Mais la recherche de données est souvent plus compliquée que prévu. 
C'est pour cela que j'ai décidé de rassembler des ressources pour faciliter la recherche.

### Moteurs de recherches

Par exemple, il existe des **moteurs de recherches** spécifiques à certaines catégories de données :

- Pour de la [**Classification**](https://sci2s.ugr.es/keel/category.php?cat=clas)
  &nbsp;
  
- Pour de la [**Regression**](https://sci2s.ugr.es/keel/category.php?cat=reg)
  &nbsp;
  
- Dans le domaine de la [**Physique**](http://opendata.cern.ch/)
  Comme l'étude de la collision des atomes
  &nbsp;
  
- Pour étudier le [**Climat**](https://www.ncdc.noaa.gov/data-access/quick-links)
  Comme étudier les précipitations, les indicateurs climatiques, etc.
  &nbsp;
  
- Pour étudier l'[**Homme**](https://www.humanprogress.org/datasets/)
  Comme étudier l'évolution des transports aériens, la criminalité, les maladies comme les cancers ou encore les technologies et communications
  &nbsp;

### Types de données

Les **types** de ces données peuvent être très variés, et l'importation sous python est donc différente selon ces types.
&nbsp;

Voici quelques exemples :
&nbsp;

- Fichiers nc/nc4
  

```python
import xarray as xr

ds = xr.open_dataset('your/path/dataset.nc4')
df = ds.to_dataframe()
```
&nbsp;

- Fichiers tsv

```python
import pandas as pd

df = pd.read_csv('your/path/dataset.tsv', delimiter="\t")
```
&nbsp;

- Fichiers dat

```python
import numpy as np
# Il faut spécifier le nom des colonnes et choisir le bon séparateur
df = pd.read_table('your/path/dataset.dat', names=['x1','x2','x3'], sep=',' ,encoding='utf-8')
```
&nbsp;

{: .box-note}
**Note:** Le repo Github est disponible [**ici**](https://github.com/antonin-lfv/Gallery-of-Datasets#categories). Vous y trouverez d'autres catégories, et d'autres Datasets.



