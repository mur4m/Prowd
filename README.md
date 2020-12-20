##################################
############################ FRANÇAIS ######
##################################

QUOI //

app qui utilise l'api de Prowd, le but étant de pouvoir :
    1) demander l'historique de la conversation
    2) envoyer un message à l'api puis l'afficher suivie la réponse du bot.
    3) cliquer sur les boutons qu'envoie le bot et l'envoyer en tant que text.
    
contient :

Composant APP :

-> emmet l'appel axios qui récupère l'historique de conversation 
-> contient des sous composants et leur passes des props

Composant MessageBot : 

-> gère les messages envoyés par le bot
-> permet de passer des données en tant que props aux autres composants.

Composant Button : 

-> gère les messages de type bouttons envoyés par le bot
-> il post via axios le résultat du bouton en text
-> affiche les bouttons ainsi que leurs titres

Composant TextField : 

-> gère les messages envoyés par l'utilisateur
-> il post via axios le résultat du reçu d'un TextInput 
-> reçoient depuis le parent via une prop callback, un callback qui lui permet de raffraîchir la page pour afficher la réponse du bot


UTILISATION //

l'app utilse React Nativ
installer les dépendances avec : npm install
lancer l'app avec : Expo start

ATTENTION //

l'app marche sur le navigateur pour le moment, encore des erreurs à régler avant qu'elle ne s'affiche sur un téléphone.

##################################
############################ ENGLISH ######
##################################

WHAT //

app interacting with Prowd's api, main goals being :
    1) request the chat history.
    2) send a message to the api to then display it followed by the bot answer.
    3) Click on the buttons received by the bot, send a string.
    
contains :

APP Component :

-> emits the axios call that fetches the chat's history.
-> made out of subcomponent which it sends some props to.

MessageBot Component: 

-> handle messages sent by the bot.
-> sends data as props to other components.


Button Component: 

-> handle button type messages received from the bot.
-> posts the result via axios in string format.
-> display buttons along their titles.

TextField Component: 

-> handle messages sent by the user.
-> posts via axios the result which is type in a TextInput.
-> receives through parent component, a callback props that makes it possible to refresh the page once the message is sent to receive the bot answer immidiately.


HOW TO USE //

Uses React Nativ
install dependancies with command : npm install
launch app : Expo start

CAUTION //

The app only displays on web browser at the moment while I am resolving issues that prevent display on mobile phones.
