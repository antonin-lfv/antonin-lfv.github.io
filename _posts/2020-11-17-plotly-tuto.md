---
layout: post
title: Plotly - Tutoriel
---
Ce tutoriel à pour objectif de présenter le module <b>Plotly</b> qui est l'un des modules les plus utilisés pour faire de la visualisation de données avec Python. <br>
Plotly étant le plus compliqué mais également le plus interactif. Il est construit sur 3 composantes principales, à savoir <b>plotly.express</b> qui est basé sur l'utilisation des dataframes pandas, et qui est simple et rapide, et <b>plotly.graph_objects</b> qui est beaucoup plus puissant, et beaucoup plus personnalisable, il est basé sur la POO et <b>plotly.figure_factory</b> qui est dédiée à la création de figure spécifiques qui seraient trop compliqué à developper avec les 2 autres composantes. <br>
Dans ce <b>Tuto</b> toutes les fonctions seront accompagnées du résultat. Le code complet se trouve dans les fichiers du [**Repository**](https://github.com/antonin-lfv/Plotly_tutorial) sous le nom <b>plotly_ex.py</b> .


<br>

# Index

- [Plotly.Express](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#plotlyexpress)
    - [Scatter plot](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#scatter-plot)
        - [Exemple simple](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#exemple-simple)
        - [Superposition de figures](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#superposition-de-figures)
        - [Subplots](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#subplots)
        - [Animations](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#animations)
        - [Range Slider](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#range-slider)
        - [Rectangles et lignes](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#rectangles-et-lignes)
        - [Marges statistiques](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#marges-statistiques)
        - [Curseurs](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#curseurs)
        - [Plot 3D](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#plot-3d)
    - [Bar chart](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#bar-chart)
        - [Premier exemple](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#premier-exemple)
        - [Indicateurs marginaux](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#indicateurs-marginaux)
    - [Pie chart](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#pie-chart)
        - [Exemple basique](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#exemple-basique)
    - [Polar bar charts](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#polar-bar-charts)
    - [Machine Learning](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#machine-learning)
        - [Regression linéaire](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#regression-linéaire)
        - [UMAP](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#umap)
        - [t-SNE](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#t-sne)
    - [Graphique de corrélation](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#graphique-de-corrélation)

<br/>

- [Plotly.Graph_Objects](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#plotlygraph_objects)
    - [Subplots](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#subplots-Go)
    - [Scatter](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#scatter)
        - [Scatter basique](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#scatter-basique)
        - [Annotations](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#annotations)
        - [Droite et plage de valeurs](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#droite-et-plage-de-valeurs)
        - [Interpolation](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#interpolation)
    - [Financial Chart](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#financial-chart)
    - [Pie chart](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#pie-chart-go)
    - [Violin chart](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#violin-chart)
    - [Histogramme/Bar](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#histogrammebar)
    - [Graphiques en 3D](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#graphiques-en-3d)
        - [Surface](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#surface)
        - [Nuage de points](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#nuage-de-points)
    - [Réseau de neurones](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#réseau-de-neurones)
    - [Regression surfacique en 3D](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#regression-surfacique-en-3d)
    - [Maps](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#maps)
        - [Ligne entre Miami et Chicago](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#ligne-entre-miami-et-chicago)
        - [Aire colorée sur une carte, triangle des bermudes](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#aire-colorée-sur-une-carte-triangle-des-bermudes)
        - [Scatter sur une map](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#scatter-sur-une-map)
        - [Scatter avec ensemble de points](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#scatter-avec-ensemble-de-points)

<br/>

- [Plotly.figure_factory](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#plotlyfigure_factory)
    - [Heatmap avec annotations](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#heatmap-avec-annotations)
    - [Dendrogrames](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#dendrogrames)
    - [Champ vectoriel](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#champ-vectoriel)
    - [Lignes de flux](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#lignes-de-flux)
    - [Création d'un tableau](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#création-dun-tableau)
        - [À la main avec LaTex](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#à-la-main-avec-LaTex)
        - [À partir d'un dataframe pandas](https://antonin-lfv.github.io/2020/11/17/plotly-tuto.html#à-partir-dun-dataframe-pandas)

<br/>

# Installation
<br/>
Installation : <br/>
<br/>


```py
pip install plotly
```

<br/>

Documentation [**Plotly**](https://plotly.com/python/) .
<br/>

# Importations

<br/>

```py
from plotly.offline import plot  # pour travailler en offline!
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import pandas as pd
import numpy as np
import statsmodels.api as sm
from sklearn.datasets import load_digits
from umap import UMAP # pip install umap-learn
from sklearn.manifold import TSNE
import networkx as nx
```

<br/>

# Plotly.Express

Plotly express, importée en tant que __px__, est la partie de plotly permettant de créer rapidement et simplement n'importe quel graphique en 1 ligne de code. Son interet est notamment basé sur le fait qu'elle marche parfaitement bien avec les __DataFrames__ de Pandas, mais on peut également travailler avec des listes ou tout autre type de données. Son utilisation est limitée notamment dans la conception de subplots. Vous verrez dans cette section quelles sont les fonctions les plus utiles de __plotly express__, et comment les personnaliser au maximum.
<br/>

Voici la syntaxe globale d'un code utilisant plotly express :
```py
fig = px.chart_type(df, parameters)
fig.update_layout("layout_parameters or add annotations")
fig.update_traces("further graph parameters")
fig.update_xaxis() # ou update_yaxis
fig.add_trace() # ajouter une figure avec graph_objects
plot(fig)
```

<br/>

## Scatter plot

### Exemple simple

On personnalise les figures de plotly express suivant ce modèle :

```py
df = px.data.iris()

fig = px.scatter(df, x="sepal_width", # nom de la colonne du dataframe
                 y="sepal_length", # nom de la colonne du dataframe
                 color="species", # nom de la colonne du dataframe
                 )

fig.update_layout(title="Scatter avec px et ajout d'une figure avec Go",
                  font_family="Rockwell")

fig.update_xaxes(title_text='largeur sepales')
fig.update_yaxes(title_text='longueur sepales')

fig.add_trace(
    go.Scatter(
        x=[2, 4],
        y=[4, 8],
        mode="lines",
        marker=dict(color="gray"),
        name="droite",
        showlegend=True) # True par défaut
)

plot(fig)
```
<br/>

{% include plotly_tuto/exemple_simple.html %}

<br/>

### Superposition de figures

Si on veut superposer des courbes avec les données du même dataset on écrit :

```py
df = px.data.iris()
fig = px.line(df, y=["sepal_width", "sepal_length", "petal_width"],
              #text="species_id" # pour ajouter l'id de l'espèce au dessus de chaque point
              color_discrete_map={"sepal_width":"blue", 
	      			  "sepal_length":"black",
				  "petal_width":"green" }, # couleur de chaque ligne
            )
plot(fig)
```

<br/>
{% include plotly_tuto/superposition_fig.html %}
<br/>

### Subplots

On peut aussi séparer les figures en plusieurs, c'est le seul moyen de faire des subplots avec plotly express ! Il y a 2 types de subplots, soit en lignes, soit en colonnes, spécifié par le paramètre facet_col ou facet_row. Partons du code suivant :

```py
df = px.data.iris()
fig = px.line(df, y=["sepal_width", "sepal_length", "petal_width"],
              #text="species_id" on ajoute ici l'id de l'espèce au dessus de chaque point
              color_discrete_map={"sepal_width":"blue", 
	      			  "sepal_length":"black",
				  "petal_width":"green" }, # couleur de chaque ligne
            )
plot(fig)
```

Alors on obtient ces résultats en fonction du paramètre de séparation :

<br/>

| facet_col="species" | facet_row="species" |
|---------------------|---------------------|
|{% include plotly_tuto/subplots_px1.html %}|{% include plotly_tuto/subplots_px2 %}|

<br/>

### Animations

On fait bouger les points qui suivent l'évolution des données au fil des années :

```py
df = px.data.gapminder()
df_fr=df[df['country']=='France']
df_us=df[df['country']=='United States']
df = pd.concat([df_fr, df_us])

fig = px.scatter(df,
        y="gdpPercap",
        x="year",
        color="country",
        title="évolution pib france et USA",
        range_x=[1952,2007],
        range_y=[df['gdpPercap'].min(), df['gdpPercap'].max()],
        animation_frame="year")
plot(fig)
```

<br/>
{% include plotly_tuto/animation_px.html %}
<br/>

### Range Slider

Personnalisation des axes avec un range slider visible :

```py
df = px.data.carshare()
fig = px.line(df, y="car_hours",
              #text="species_id" on ajoute ici l'id de l'espèce au dessus de chaque point
              color_discrete_map={"car_hours":"black"}, # couleur de chaque ligne
            )
fig.update_xaxes(rangeslider_visible=True)
plot(fig)
```

<br/>
{% include plotly_tuto/range_slider.html %}
<br/>

### Rectangles et lignes

On peut colorier une plage de valeurs, ou ajouter une ligne :

```py
df = px.data.stocks(indexed=True)
fig = px.line(df, facet_col="company",
              facet_col_wrap=2 # nombre de figure par ligne
              )
fig.add_hline( # ou vline pour verticale avec x=...
              y=1, line_dash="dot",
              annotation_text="1er janvier 2018",
              annotation_position="bottom right")

fig.add_vrect( # ou hrect pour horizontal
              x0="2018-09-24", x1="2018-12-18",
              col=2, # numéro de la colonne (les figures de droites)
              annotation_text="24/09 au 18/12 2018",
              annotation_position="top left",
              fillcolor="red", opacity=0.2, line_width=0.1)

fig.add_hrect( # ou hrect pour horizontal
              y0=1.1, y1=1.7,
              col=1, # numéro de la colonne (les figures de droites)
              annotation_text="1.1 à 1.7",
              annotation_position="top right",
              fillcolor="blue", opacity=0.15, line_width=0.4)

plot(fig)
```

<br/>
{% include plotly_tuto/rectangle_ligne.html %}
<br/>

### Marges statistiques

On ajoute un indicateur statistique sur chacune des variables du scatter :

```py
df = px.data.iris()
fig = px.scatter(df, x="sepal_length", # données
                 color="species", # couleur par expèce
                 marginal_x='box', # marge en boxplot
                 marginal_y='violin', # marge en violon
                 trendline="ols" # courbe de tendances
                 )
plot(fig)
```
<br/>
{% include plotly_tuto/marge_stats.html %}
<br/>

### Curseurs

Curseurs qui apparaissent avec survol de la souris sur un point du graphique :

```py
df = px.data.gapminder().query("continent=='Oceania'")
fig = px.line(df, x="year", y="lifeExp", color="country",
              title="curseurs")
fig.update_traces(mode="markers+lines") # courbe avec ligne et points apparent
fig.update_xaxes(showspikes=True)
fig.update_yaxes(showspikes=True)
plot(fig)
```

<br/>
{% include plotly_tuto/curseur_axe.html %}
<br/>

### Plot 3D

```py
df = px.data.iris()
fig = px.scatter_3d(df, x='sepal_length', y='sepal_width', z='petal_width',
              color='species', size='petal_length', size_max=18,symbol='species', opacity=1)
plot(fig)
```

<br/>
{% include plotly_tuto/3d_px.html %}
<br/>

## Bar chart

### Premier exemple

Simple Barchart, on colorie sur une colonne et on sépare par couleur :

```py
df = px.data.tips()
fig=px.bar(df,
           x="sex",
           y="total_bill",
           color="smoker",
           barmode="group")
fig.update_traces( marker_line_color='rgb(8,48,107)',
                  marker_line_width=1.5, opacity=0.6)
plot(fig)
```

<br/>
{% include plotly_tuto/bar_exemple.html %}
<br/>

### Indicateurs marginaux

On va tester 2 types de marges, violon et boxplot, qu'on ajoute avec le paramètre marginal :

```py
df = px.data.iris()
fig = px.histogram(df, x="sepal_length",
                   nbins=50, # on choisi le nombre de barres
		   marginal=''
                   )
plot(fig)
```

|marginal='violin'|marginal='box'|
|-----------------|--------------|
|{% include plotly_tuto/bar_marge1.html %}|{% include plotly_tuto/bar_marge2.html %}|

<br/>

## Pie chart

### Exemple basique

```py
df = px.data.tips()
fig = px.pie(df, values='tip', # ce qu'on compte
             names='day', # sur quoi on tri
             color='day',
             hole=.3, # donut chart
             color_discrete_map={'Thur':'lightblue', # couleur spécifique par valeur
                                 'Fri':'lightred',
                                 'Sat':'gold',
                                 'Sun':'green'})
plot(fig)
```

<br/>
{% include plotly_tuto/pie_exemple.html %}
<br/>

## Polar bar charts

On va représenter ici la force des vents, sur un diagramme polaire, avec la direction comme angle, et la force en taille :

```py
df = px.data.wind()
fig = px.bar_polar(df, r="frequency", theta="direction", color="strength", 
		template="seaborn", # couleur de fond
                color_discrete_sequence= px.colors.sequential.Plasma_r)
plot(fig)
```

<br/>
{% include plotly_tuto/polar_bar_chart.html %}
<br/>

## Machine Learning


### Regression linéaire

```py
from sklearn.linear_model import LinearRegression

df = px.data.tips()
X = df.total_bill.values.reshape(-1, 1)

model = LinearRegression()
model.fit(X, df.tip)

x_range = np.linspace(X.min(), X.max(), 100)
y_range = model.predict(x_range.reshape(-1, 1))

fig = px.scatter(df, x='total_bill', y='tip', opacity=0.65)
fig.add_traces(go.Scatter(x=x_range, y=y_range, name='Regression Fit'))
fig.show()
```

<br/>
{% include plotly_tuto/reg_line.html %}



### UMAP

```py
digits = load_digits()
umap_2d = UMAP(random_state=0)
umap_2d.fit(digits.data)

projections = umap_2d.transform(digits.data)
fig = px.scatter(
    projections, x=0, y=1,
    color=digits.target.astype(str), labels={'color': 'digit'}
)
plot(fig)
```

<br/>
{% include plotly_tuto/umap.html %}



### t-SNE

```py
df = px.data.iris()
features = df.loc[:, :'petal_width']
tsne = TSNE(n_components=3, random_state=0)
projections = tsne.fit_transform(features, )

fig = px.scatter_3d(
    projections, x=0, y=1, z=2,
    color=df.species, labels={'color': 'species'}
)
fig.update_traces(marker_size=8)
plot(fig)
```

<br/>
{% include plotly_tuto/tsne.html %}


<br/>

## Graphique de corrélation

```py
df = px.data.iris()
fig = px.scatter_matrix(df, dimensions=["sepal_width", "sepal_length", "petal_width", "petal_length"], color="species")
plot(fig)
```
<br/>
{% include plotly_tuto/correlation.html %}

<br/>

# Plotly.Graph_Objects

Plotly __graph_objects__, importée en tant que __go__ est la partie de Plotly utilisant la __POO__, pour créer des graphiques très complets. On va y retrouver la
plupart des fonctions de plotly express.
Vous verrez dans cette section quelles sont les fonctions les plus utiles de plotly __graph_objetcs__ et comment les personnaliser
au maximum.
<br/>

Voici la syntaxe globale d'un code utilisant plotly graph_objects :
```py
fig = go.Figure() # création de la figure, ou alors make_subplots

fig.add_TypeTrace("parameters") # on ajoute des figure avec TypeTrace qui est pie, scatter, surface, etc..
...
fig.add_TypeTrace("parameters")

fig.update_traces("parameters")
fig.update_layout("parameters")
plot(fig)
```

## Subplots Go

Pour un subplots on utilise un autre moyen pour initialiser la figure :

```py
fig = make_subplots(rows=2, cols=2,
                    #column_widths=[0.6, 0.4],
                    #row_heights=[0.3, 0.3, 0.3],
                    subplot_titles=["", "", ""],
                    specs=[[{'type': 'xy'}, {'type': 'domain'}], # 1er ligne
                           [{'type': 'xy', 'colspan': 2}, None]], # 2e ligne, dont la 1er colonne s'etend sur celle de droite
                    # si on s'etend sur une colonne on utilise rowspan
                    # il existe plusieurs type de specs : xy, domain, scene, polar, ternary, mapbox
                    #horizontal_spacing=0.2,
                    #vertical_spacing=0.5
                    )

"Ensuite on ajoute les figure normalement, en indiquant juste l'emplacement du graphique avec les paramètres row et col"
x=np.linspace(-4,4)
# 1er figure
fig.add_scatter(x=np.linspace(-4,4), y=np.tanh(x),
                marker=dict(color='green'),
                row=1, col=1, name="tangente hyperbolique"
                )
# 2e figure
fig.add_pie(labels=['oui', 'non'],
            values=[201902,192981], row=1, col=2)
# 3e figure
fig.add_traces( # je vais ajouter 2 courbes en même temps sur la dernière ligne
    [
        go.Scatter(x=x, y=np.square(x), mode='markers+lines', name='x²'),
        go.Scatter(x=x,y=-np.square(x), name='-x²')
    ],
    rows=2, cols=1
)

plot(fig)
```

<br/>
{% include plotly_tuto/subplots_go.html %}<br/>

## Scatter

### Scatter basique

On pourra utiliser scattergl pour des gros datasets.

```py
x = np.linspace(-2, 2, 100)
y = 1/(1+np.exp(-x))

fig = go.Figure()
# 1ere solution, on ajoute toutes les figures avec le même appel (pour appliquer une seule fois certains parametres)
fig.add_traces([go.Scatter(x=x, y=y, mode='markers', name='sigmoid'),
               go.Scatter(x=x, y=-y, mode='lines', name='negative sigmoid')] )
# 2e solution, on ajoute les figures indépendemment
fig.add_scatter(x=x, y=1+y, mode='markers', name='sigmoid+1')
fig.add_scatter(x=x, y=1-y, mode='lines', name='1-sigmoid')

fig.update_layout(title="sigmoid")
plot(fig)
```

<br/>
{% include plotly_tuto/basic_scatter.html %}<br/>

### Annotations

```py
x = np.linspace(-5, 5, 100)
y = 1/(1+np.exp(-x))

fig = go.Figure()
fig.add_scatter(x=x,y=y,mode='lines',
                name='sigmoid',
                marker=dict(color='green'))
fig.add_annotation(x=0, y=0.5,
                   text='point en x=0',
                   showarrow=True,
                   arrowhead=1,
                   arrowsize=1,
                   arrowwidth=2,
                   arrowcolor='black',
                   bgcolor="orange",
                   borderwidth=1,
                   yshift=10)
plot(fig)
```

<br/>
{% include plotly_tuto/ajout_annotations.html %}<br/>

### Droite et plage de valeurs

```py
x = np.linspace(-5, 5, 100)
y = -1/(1+np.exp(-x))

fig=go.Figure()
fig.add_scatter(x=x, y=y)
fig.add_hline(y=-0.5, line_dash="dot", # vline pour verticale
              annotation_text="0.5",
              annotation_position="bottom right"
              )
fig.add_hrect(y0=-0.85, y1=-0.15, # vrect pour verticale
              annotation_text="-0.15 à -0.85",
              annotation_position="top right",
              fillcolor="blue", opacity=0.15, line_width=0.4)

plot(fig)
```

<br/>
{% include plotly_tuto/plage_valeurs.html %}<br/>

### Interpolation

```py
temps_exec = [0.40251994132995605, 0.014573812484741211, 0.23034405708312988, 0.4499189853668213, 0.8043158054351807, 0.21565508842468262, 0.10195517539978027, 0.35376596450805664, 0.5991549491882324, 0.08605694770812988, 1.1117901802062988, 0.9011919498443604, 0.3789708614349365, 0.8676671981811523, 1.3645083904266357, 0.8764557838439941, 0.13943982124328613, 0.05235695838928223, 0.1372683048248291, 0.29303503036499023]
l = [3.4549849033355713, 5.4536731243133545, 1.2118861675262451, 0.7063937187194824, 4.295026779174805, 11.98727297782898, 1.0320260524749756, 5.288934707641602, 9.74186897277832, 1.484644889831543, 6.555363893508911, 0.8726191520690918, 2.6839470863342285, 9.980525970458984, 0.665977954864502, 4.907128095626831, 2.7749810218811035, 5.096926927566528, 11.398299217224121, 3.3110921382904053]

fig=make_subplots(rows=2, cols=1,
                  subplot_titles=["Courbe bleue", "Courbe rouge"],
                  specs=[[{'type': 'xy'}], [{'type': 'xy'}]],
                  shared_xaxes=True,
                  )

## figures principales en haut ##
# Interpolation linéaire
fig.add_scatter(y=l, mode='lines', opacity=0.4, line=dict(color='royalblue', width=4), line_dash='dot', name='interpolation linéaire',row=1,col=1)
# Interpolation par spline
fig.add_scatter(y=l, mode='lines', line=dict(color='royalblue', width=4), line_shape='spline', name='interpolation par spline',
                          hovertemplate = "<br>%{y:.0f}</br>", row=1,col=1)
fig.update_xaxes(title="x", row=1, col=1)
fig.update_yaxes(title="y", row=1, col=1)

## Titre + axes labels ##
fig.update_layout(title="Interpolation")
## ligne moyenne ##
fig.add_shape(type="line", line_color="firebrick", line_width=2, opacity=1, line_dash="dot",
              x0=0, x1=len(l)-1, y0=np.mean(l), y1=np.mean(l), row=1, col=1)
## fleche moyenne ##
fig.add_annotation(text="Moyenne : {}".format(int(np.mean(l)), grouping=True, monetary=True),
                   x=int(len(l)/5)*4, # arrows' head
                   y=np.mean(l)*1.2,  # arrows' head
                   arrowhead=2, showarrow=True, row=1, col=1)
## layout custom ##
fig.update_xaxes(
        showline=True,
        showgrid=False,
        showticklabels=True,
        linecolor='rgb(204, 204, 204)',
        linewidth=2,
        ticks='outside',
        tickfont=dict(
            family='Arial',
            size=12,
            color='rgb(82, 82, 82)',
        ), row=1,col=1)
fig.update_yaxes(
        showgrid=False,
        zeroline=True,
        showline=True,
        linecolor='rgb(204, 204, 204)',
        linewidth=2,
        ticks='outside',
        tickfont=dict(
            family='Arial',
            size=12,
            color='rgb(82, 82, 82)',
    ), row=1, col=1)


## figures principales en bas ##
# Interpolation linéaire
fig.add_scatter(y=temps_exec, mode='lines', opacity=0.4, line=dict(color='firebrick', width=4), line_dash='dot', name="Interpolation linéaire",
                          row=2,col=1)
# Interpolation par spline
fig.add_scatter(y=temps_exec, mode='lines', line=dict(color='firebrick', width=4), line_shape='spline', name="Interpolation par spline",
                          hovertemplate = "<br>%{y:.3f}</br>", row=2,col=1)
## ligne moyenne ##
fig.add_shape(type="line", line_color="royalblue", line_width=2, opacity=1, line_dash="dot",
              x0=0, x1=len(l)-1, y0=np.mean(temps_exec), y1=np.mean(temps_exec), row=2, col=1)
## fleche moyenne ##
fig.add_annotation(text="Moyenne : {} sec".format(round(np.mean(temps_exec),2), grouping=True, monetary=True),
                   x=int(len(temps_exec)/5)*4, # arrows' head
                   y=np.mean(temps_exec)*1.2,  # arrows' head
                   arrowhead=2, showarrow=True, row=2, col=1)
fig.update_xaxes(title="x", row=2, col=1)
fig.update_yaxes(title="y", row=2, col=1)
## layout custom ##
fig.update_xaxes(
    showline=True,
    showgrid=False,
    showticklabels=True,
    linecolor='rgb(204, 204, 204)',
    linewidth=2,
    ticks='outside',
    tickfont=dict(
        family='Arial',
        size=12,
        color='rgb(82, 82, 82)',
    ), row=2, col=1)
fig.update_yaxes(
    showgrid=False,
    zeroline=True,
    showline=True,
    linecolor='rgb(204, 204, 204)',
    linewidth=2,
    ticks='outside',
    tickfont=dict(
        family='Arial',
        size=12,
        color='rgb(82, 82, 82)',
    ), row=2, col=1)

fig.update_layout(plot_bgcolor='white',
                  hoverlabel_align='right')
plot(fig)
```

<br/>
{% include plotly_tuto/interpolation.html %}<br/>

## Financial Chart

Le dataset et disponible dans les fichiers du repo : "EURUSD_5y.csv"
```py
vert = '#599673'
rouge = '#e95142'
noir = '#000'
df = pd.read_csv('path/EURUSD_5y.csv')

fig = go.Figure()

fig.add_trace(go.Scatter(
    y = df['Close'],
    x = df['Date'],
    line=dict(color=noir, width=1),
    name="",
    hovertemplate=
    "Date: %{x}<br>" +
    "Close: %{y}<br>"
))

fig.add_hline(y=df['Close'].iloc[0],
              line_dash="dot",
              annotation_text="25 mai 2016",
              annotation_position="bottom right",
              line_width=1.5, line=dict(color='black'))

# montée 1

fig.add_vrect(x0='2017-01-01',x1='2018-02-20',
              fillcolor=vert, opacity=0.2, line_width=0.4,
              annotation_text='01-01-2017 au 02-20-2018',
              annotation_position="top left",
              annotation=dict(font=dict(size=8))
              )

fig.add_traces(go.Indicator(
    mode = "number+delta",
    value = 1.239864,
    number={'prefix': "$", 'font_size' : 40},
    delta = {"reference": 1.052698, "valueformat": ".6f", "position" : "bottom"},
    title = {"text": "Eur/USD"},
    domain = {'y': [0, 0.5], 'x': [0.15, 0.4]}))

# descente 1

fig.add_traces(go.Indicator(
    mode = "number+delta",
    value = 1.077702,
    number={'prefix': "$", 'font_size' : 40},
    delta = {"reference": 1.237317, "valueformat": ".6f", "position" : "bottom"},
    title = {"text": "Eur/USD"},
    domain = {'y': [0.5, 0.7], 'x': [0.55, 0.75]}))

fig.add_vrect(x0='2018-04-18',x1='2020-04-24',
              fillcolor=rouge, opacity=0.2, line_width=0.4,
              annotation_text='18-04-2018 au 24-04-2020',
              annotation_position="top right",
              annotation=dict(font=dict(size=8))
              )

fig.update_layout(
    template='simple_white',
    yaxis_title="Euro/USD close",
    title_text="Euro/USD Close"
)

plot(fig)	
```

<br/>
{% include plotly_tuto/financial.html %}<br/>

## Pie chart Go

```py
labels = ['Apple','Samsung','Nokia','Wiko']
values = [4500, 3000, 1053, 500]
fig = go.Figure()
fig.add_pie(labels=labels, # les valeurs sur lesquelles on compte
            values=values, # ce qui sert à faire les pourcentages
            pull=[0, 0, 0, 0.2], # represente une fraction de pi, ici on décale le 4e label
            textposition='inside',
            )
fig.update_traces(hoverinfo='label+percent', # ce qu'on voit avec la souris
                  textinfo='value', # Ce qu'on lit dans le pie
                  textfont_size=20, # taille du texte du pie
                  marker=dict(colors=['gold', 'mediumturquoise', 'darkorange', 'lightgreen']) # couleur des secteurs
                  )
plot(fig)
```

<br/>
{% include plotly_tuto/pie_go.html %}<br/>

## Violin chart

```py
df = px.data.iris()
fig=go.Figure()

fig.add_violin(y=df['sepal_length'],
               points='all', # pour tous les afficher
               box_visible=True,
               meanline_visible=True,
               fillcolor='lightblue',
               opacity=0.7,
	       name="longueur sepale")
fig.update_layout(yaxis_zeroline=False)
plot(fig)
```

<br/>
{% include plotly_tuto/violin_go.html %}<br/>

## Histogramme/Bar

A partir du code suivant, on a 2 types de diagrammes bâtons, qu'on choisi avec fig.add_histogram ou fig.add_bar :

```py
df = px.data.iris()
fig=go.Figure()

fig.add_XXXXXX(x=df['sepal_width'])
plot(fig)
```

|add_histogram|add_bar|
|-------------|-------|
|{% include plotly_tuto/hist_go.html %}|{% include plotly_tuto/bar_go.html %}|

## Graphiques en 3D

<br/>

### Surface

```py
z_data = df = pd.read_csv("https://raw.githubusercontent.com/plotly/datasets/master/volcano.csv")
fig = go.Figure(data=[go.Surface(z=z_data, colorscale='IceFire')]) # Z1 liste de liste
fig.update_layout(title='Mountain')
plot(fig)
```

<br/>
{% include plotly_tuto/surface.html %}
<br/>

### Nuage de points

```py
df = px.data.iris()
fig = px.scatter_3d(df, x='sepal_length', y='sepal_width', z='petal_width',
              color='species', size='petal_length', size_max=18,symbol='species', opacity=0.7)
plot(fig)
```
<br/>
{% include plotly_tuto/nuage_de_points.html %}

<br/>

## réseau de neurones

```py
# liens
edge_x, edge_y = [1.5,3,None,1.5,3,None,1.5,3,None,1.5,3,None,1.5,3,None,1.5,3,None,3,4.5,None,3,4.5,None,3,4.5,None,3,4.5,None,3,4.5,None,3,4.5,None,3,4.5,None,],\
                 [1,0,None,1,2,None,1,4,None,3,0,None,3,2,None,3,4,None,0,1,None,0,1,None,0,3,None,2,1,None,2,3,None,4,1,None,4,3,None,]
# None pour couper la ligne
edge_trace = go.Scatter(
    x=edge_x, y=edge_y,
    line=dict(width=2, color='#000000'),
    hoverinfo='none',
    mode='lines')

# traçage des noeuds
node_x, node_y = [1.5,1.5,3,3,3,4.5,4.5],\
                 [1,3,0,2,4,1,3]
node_trace = go.Scatter(
    x=node_x, y=node_y,
    mode='markers',
    hoverinfo='text',
    marker=dict(
        color='green',
        size=20,
        line_width=1.5))

# affichage
fig = go.Figure(data=[edge_trace, node_trace],
             layout=go.Layout(
                titlefont_size=16,
                showlegend=False,
                hovermode='closest',
                margin=dict(b=20,l=5,r=5,t=40),
                xaxis=dict(showgrid=False, zeroline=False, showticklabels=False),
                yaxis=dict(showgrid=False, zeroline=False, showticklabels=False),
                yaxis_range=[-6,10],
                xaxis_range=[-5,11]
             )
             )
plot(fig)
```

<br/>
{% include plotly_tuto/neurones.html %}

## Regression surfacique en 3D

Le contenu de df_final est disponible dans les fichiers du github.

```py
from sklearn.svm import SVR

mesh_size = .02
margin = 0

df = df_final

X = df[['x', 'y']]
y = df['hauteurs']

# Modele
model = SVR(C=1.)
model.fit(X, y)

# mesh grid 
x_min, x_max = X.x.min() - margin, X.x.max() + margin
y_min, y_max = X.y.min() - margin, X.y.max() + margin
xrange = np.arange(x_min, x_max, mesh_size)
yrange = np.arange(y_min, y_max, mesh_size)
xx, yy = np.meshgrid(xrange, yrange)

# On run le modele
pred = model.predict(np.c_[xx.ravel(), yy.ravel()])
pred = pred.reshape(xx.shape)

# plot
fig = px.scatter_3d(df, x='x', y='y', z='hauteurs')
fig.update_traces(marker=dict(size=5))
fig.add_traces(go.Surface(x=xrange, y=yrange, z=pred, name='pred_surface'))
plot(fig)
```

<br/>
{% include plotly_tuto/reg_surfacique.html %}

<br>

## Maps

### Ligne entre Miami et Chicago

```py
fig = go.Figure()

fig.add_scattermapbox(
    # on relie Miami (lat = 25.7616798, long = -80.1917902) et Chicago (lat = 41.8119, long = -87.6873)
    mode = "markers+lines",
    lon = [-80.1917902, -87.6873],
    lat = [25.7616798, 41.8119],
    marker = {'size': 10,
              'color': 'firebrick',
              })

fig.update_layout(
    margin ={'l':0,'t':0,'b':0,'r':0}, # marge left, top, bottom, right
    mapbox = {
        'center': {'lon': -80, 'lat': 40},
        'style': "stamen-terrain",
        'zoom': 3})

plot(fig)
```

<br/>
{% include plotly_tuto/ligne_map.html %}<br/>


### Aire colorée sur une carte, triangle des bermudes

```py
fig = go.Figure()

# les 3 points :
# Bermudes : lat = 32.320236, long = -64.7740215
# Miami : lat = 25.7616798, long = -80.1917902
# San Juan : lat = 18.2232855, long = -66.5927315

fig.add_scattermapbox(
    fill = "toself",
    lon = [-64.7740215, -80.1917902, -66.5927315], lat = [32.320236, 25.7616798, 18.2232855],
    marker = { 'size': 2, 'color': "red" })

fig.update_layout(
    margin ={'l':0,'t':0,'b':0,'r':0},
    mapbox = {
        'style': "stamen-terrain",
        'center': {'lon': -80, 'lat': 25 },
        'zoom': 3},
    showlegend = False)

plot(fig)
```
<br/>
{% include plotly_tuto/aire_map.html %}<br/>

### Scatter sur une map

```py
df = px.data.gapminder().query("year == 2007")
fig = px.scatter_geo(df, locations="iso_alpha", # on situe le pays avec son raccourci international
                     color="continent", # on colorie par continent
                     hover_name="country", # ce qu'on voit avec la souris
                     size="gdpPercap", # la taille des points dépend du pib du pays
                     projection="natural earth" # type de carte
                     )
plot(fig)
```
<br/>
{% include plotly_tuto/scatter_map.html %}<br/>

### Scatter avec ensemble de points

```py
token = 'your token from https://studio.mapbox.com'
fig = go.Figure()
df = pd.read_table('quake.dat', names=['depth', 'lat','long','richter'], sep=',' ,encoding='utf-8', skiprows=8)	
fig.add_scattermapbox(
    mode = "markers",
    name="",
    lon = list(df['long'].apply(lambda x : float(x))),
    lat = list(df['lat'].apply(lambda x : float(x))),
    marker = dict(size= 5,
              color= df['richter'],
              showscale = True,
              colorscale="jet"
    ),
    hovertemplate=
    "longitude: %{lon}<br>" +
    "latitude: %{lat}<br>"+
    "intensité: %{marker.color}"  ,
)
fig.update_layout(
    margin ={'l':0,'t':0,'b':0,'r':0},
    mapbox = {
        'accesstoken': token,
        'style': 'light',
        'center': {'lon': -80, 'lat': 25 },},
)
plot(fig)
```
<br/>
{% include plotly_tuto/map_points_quake.html %}

<br/>

# Plotly.figure_factory

__Plotly.figure_factory__ est la partie de plotly qui intervient quand l'utilisation de Go et Px devient impossible.

## Heatmap avec annotations

```py
z = [[1, 1, 3],
     [3, 1, 3],
     [3, 1, 1]]

x = ['Équipe A', 'Équipe B', 'Équipe C']
y = ['Match 3', 'Match 2', 'Match 1']

z_text = [['Perdu', 'Perdu', 'Gagné'],
          ['Gagné', 'Perdu', 'Gagné'],
          ['Gagné', 'Perdu', 'Perdu']]

fig = ff.create_annotated_heatmap(z, x=x, y=y, annotation_text=z_text, colorscale='gnbu')
plot(fig)
```

<br/>
{% include plotly_tuto/heatmap_ff.html %}<br/>

## Dendrogrames

```py
X = np.array([[1],[2], [5], [3]])
fig = ff.create_dendrogram(X)
fig.update_layout(width=1080, height=675)
plot(fig)
```

<br/>
{% include plotly_tuto/dendrogrames.html %}<br/>

## Champ vectoriel

```py
x,y = np.meshgrid(np.arange(0, 2, .2), np.arange(0, 2, .2))
u = -np.cos(y)*x
v = np.sin(x)*y+1

fig = ff.create_quiver(x, y, u, v)
plot(fig)
```

<br/>
{% include plotly_tuto/champ_vect.html %}<br/>

## Lignes de flux

```py
x = np.linspace(-4, 4, 80)
y = np.linspace(-4, 4, 80)
Y, X = np.meshgrid(x, y)
u = -(1 + X )**2 + 2*Y
v = 1 - X + (Y+1)**2

fig = ff.create_streamline(x, y, u, v, arrow_scale=.2)
plot(fig)
```
<br/>
{% include plotly_tuto/lignes_flux.html %}<br/>

## Création d'un tableau

### À la main avec LaTex

```py
data_matrix = [['Forme factorisée', 'Forme developpée'],
               ['$(a+b)^{2}$', '$a^{2}+2ab+b^{2}$'],
               ['$(a-b)^{2}$', '$a^{2}-2ab+b^{2}$'],
               ['$(a+b)(a-b)$', '$a^{2}-b^{2}$']]

fig =  ff.create_table(data_matrix)
plot(fig, include_mathjax='cdn')
```
<br/>
{% include plotly_tuto/latex_tab.html %}<br/>

### À partir d'un dataframe pandas

```py
df = px.data.iris()

fig=ff.create_table(df)
plot(fig)
```
<br/>
{% include plotly_tuto/pandas_tab.html %}<br/>






<br/>
<p align="center"><a href="https://antonin-lfv.github.io/2020-11-17-plotly-tuto/#Plotly-tutorial---Data-analysis-and-Machine-learning"><img src="http://randojs.com/images/backToTopButton.png" alt="Haut de la page" height="29"/></a></p>



{: .box-note}
**Note:** Un article sur l'utilisation plus détaillée de plotly sera bientot disponible.




