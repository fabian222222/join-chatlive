Pour contexte, il était demandé de continuer sur les features demandés :

- afficher les messages
- envoyer les messages
- pouvoir auto scroll
- mettre en pause le scroll
- revenir au scroll avec un cta

j'ai décidé d'ajouter les features suivantes :

- pouvoir afficher et cacher le chat
- afficher les viewers (j'ai fait un système D pour pouvoir imiter)
- filtrer les viewers
- pouvoir survoler les messages et sélectionner un message en cliquant dessus, il sera alors plus clair que les autres pour pas le perdre de vue

Résultat : j'ai fait tout ceci en 4h11 (ce qui est un peu au dessus mais je voulais finir ce que j'avais en tête), le tout sans IA comme demandé (j'ai déterré le bon vieux VSCode et stackoverflow)

On avait mentionné la confiance entre personnes qui vont peut être travaillé ensemble, c'est pour cette raison que j'ai enregistré toute la session code (caméra + écran), si des doutes émergent, je peux upload la vidéo sur youtube en répertoir privé et vous envoyer un lien

J'ai utilisé les lib suivantes :

- react hook form
- styled components
- zod (je l'ai enlevé puisque je ne voyais plus l'utilité)
- react icons
- socket.io client

Quand j'ai commencé voici la liste des features que je voulais faire (avec les prio qui vont avec) :

avoir une archi clean code / plus important
pouvoir lire les messages / 1
pouvoir envoyer un message / 1
pouvoir masquer/afficher le chat / 1
pouvoir auto scroll les messages / 1
pouvoir mettre en pause l'auto scroll / 1
pouvoir voir les personnes du chat / 2
pouvoir filtrer les personnes du chat / 2
pouvoir afficher les points sur la chaine / bits / 2
pouvoir highlight les messages au click / 3
pouvoir personnaliser son apparence dans le chat / 3
pouvoir parametrer le chat / 3
pouvoir envoyer des emojis liés à la chaine / 3

J'ai évité les trois derniers sinon j'allais durer trop longtemps

J'ai opté pour l'archi suivante :
components / constants / providers / services / types

Le projet était cool à faire ! j'ai pas trop eu de mal, le seul endroit où j'ai beaucoup perdu du temps était la partie où on doit stoper l'auto scroll et ensuite afficher un cta pour reprendre le scroll (j'avais oublié comment faire et j'ai perdu du temps à chercher et tester)

Pour lancer le projet il faut tout simplement faire :

- npm install
- mettre les env
- npm run dev
