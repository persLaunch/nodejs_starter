module.exports = {
  "extends": "airbnb-base",
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
  "env": {
  "node": true
  },
  "rules": {
      "max-len": ["error", 1000], // Afficher une erreur si la ligne dépasse, tu peux changer à 5 pour voir ce que ça fait. t'as juste à save pour observer l'erreur dans VS Code, à retirer pour les gros projets. Par défaut c'est 100
      "no-console": 0,
      "padded-blocks": 0,// Pour pouvoir sauter une ligne après function () {
      "indent": ["error",4], // Indentation de 4
      "no-trailing-spaces": 0, // Faire 2 sauts de ligne
    }
};
