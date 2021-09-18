---
layout: post
title: Build Streamlit apps
---

Cet article va vous montrer pas à pas comment créer votre première application grâce à Streamlit,
et comment la mettre en ligne. Aucun prérequis n'est nécessaire.


<br>

# Étape 1 : créer un compte Streamlit sharing

Avant toute chose, il vous faudra créer un compte sur le site de [**Streamlit sharing**](https://streamlit.io/sharing-sign-up). 
La validation de votre demande prend en général quelques jours a être traitée. Une fois validée, vous aurez accès à ce panel :

![Panel](https://user-images.githubusercontent.com/63207451/127782495-e65fe7fc-e0d4-4e5c-acc5-d9dab4aee6ea.png){: .mx-auto.d-block :}


Si vous venez seulement de vous inscrire vous pouvez tout de même suivre la suite du tutoriel.
<br>

# Étape 2 : création du repository

- Si vous êtes à l'aise avec GIT, créez un repository, clonez le sur votre pc et ouvrez-le avec votre éditeur Python. 

- Pour ceux qui ne seraient pas à l'aise avec GIT, téléchargez [**Github Desktop**](https://desktop.github.com), puis depuis le repository Github faites "Open with GitHub Desktop" comme ceci :

![Click](https://user-images.githubusercontent.com/63207451/127778333-d54f590d-f83e-4413-ab4f-6b85284cae5a.png){: .mx-auto.d-block :}

<br>

Puis, dans Github Desktop, choisissez l'endroit sur votre pc pour créer le dossier de ce repositoy (Par défaut il le mettra dans le dossier nommé Github) comme ceci :

![desktop](https://user-images.githubusercontent.com/63207451/127778447-882fe0e7-3c7d-45f3-9dcc-ec25f790074e.png){: .mx-auto.d-block :}


Maintenant, vous avez accès au dossier de votre repository !
<br>

# Étape 3 : création de l'application avec Streamlit

À présent, ouvrez le dossier du repository que vous avez cloné avec PyCharm ou VScode par exemple.
Ouvrez la console python, et tapez : 

```py
pip install streamlit
```

On peut maintenant commencer à coder notre app ! Je vais me contenter de vous donner une petite base de ce que l'on peut faire avec Streamlit. Pour découvrir tout ce qu'on peut faire avec streamlit, je vous laisse lire la [documentation](https://docs.streamlit.io/en/stable/deploy_streamlit_app.html).  
<br>

Copiez collez dans votre fichier main.py ce code : 

```py
import streamlit as st
import numpy as np

st.title("Mon Dashboard")
st.sidebar.title("Titre sur le volet latéral")
st.write(
    """
    Chapitre 1 : 
    présentation des fonctions ones et zeros de numpy 
    """
         )
st.write("##")

col1, col2, col3 = st.beta_columns((1,0.2,1))
with col1 :
    st.write("numpy.ones((10,10))")
    st.write(np.ones((10,10)))

with col3 :
    st.write("numpy.zeros((10,10))")
    st.write(np.zeros((10,10)))

st.sidebar.checkbox("Checkbox")
```

Puis dans la console du dossier de votre application, tapez :

```py
streamlit run main.py
```

Vous devriez voir apparaître dans une page web votre Dashboard : 

![dashboard](https://user-images.githubusercontent.com/63207451/127779145-746c17fb-8114-4df5-9329-c238b39f1736.png){: .mx-auto.d-block :}


Félicitations vous avez créé votre premier Dashboard !
<br>

# Étape 4 : mise en ligne

Pour effectuer la mise en ligne de notre Dashboard il va falloir ajouter quelques fichiers supplémentaires.

Il va falloir ajouter un fichier requirements.txt dans le dossier principal, qui va contenir toutes les librairies dont votre application aura besoin. Par exemple ici nous aurons besoin de numpy donc ce fichier contiendra ceci :

```py
numpy
```

Ensuite, il faudra créer un répertoire .streamlit qui contiendra un fichier nommé config.toml .  
Ce fichier sert à configurer les paramètres de l'application, comme les couleurs pour le texte, le fond, le volet latéral, et le thème.

Par exemple : 

```toml
[theme]
base="light"

# Primary accent color for interactive elements.
primaryColor = '#2e86de'

# Background color for the main content area.
backgroundColor= '#FFF'

# Background color used for the sidebar and most interactive widgets.
#secondaryBackgroundColor = '#dcdde1'

# Color used for almost all text.
textColor = '#222f3e'

# Font family for all text in the app, except code blocks. 
# One of "sans serif", "serif", or "monospace".
font = "sans serif"
```

On obtient finalement cette architecture : 

![archi](https://user-images.githubusercontent.com/63207451/127779393-50791d8e-55d5-44aa-ba73-3ba994320f45.png){: .mx-auto.d-block :}

<br>

Finalement, il ne reste plus qu'à déployer l'application. Pour cela, rendez-vous sur le site de [**Streamlit Sharing**](https://share.streamlit.io) et appuyez sur "New app" puis "From existing repo" :

![newapp](https://user-images.githubusercontent.com/63207451/127779503-72433cc8-44de-4255-8b66-ef26565b760f.png){: .mx-auto.d-block :}


Il faut maintenant simplement s'assurer que le fichier "Main file path" soit bien le fichier "main.py" que nous avons créé.
Ensuite, Deploy !

<br>

Une page web devrait s'ouvrir comme ceci :

![oven](https://user-images.githubusercontent.com/63207451/127779611-cad53ed7-bf95-415c-a945-fca10c824db8.png){: .mx-auto.d-block :}

Cela signifie que l'application est en cours de déploiement, on peut y suivre la progression sur le volet de droite. Une fois le traitement terminé votre application est en ligne ! Et accessible depuis n'importe où, grâce à votre url qu'il suffit de partager à tout le monde.



{: .box-note}
Si ce **tutoriel** vous a été utile n'hésitez pas à laisser un commentaire sous ce post, et à partager l'url de votre application !

