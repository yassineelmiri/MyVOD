# MyVOD - Plateforme de Streaming

![image](https://github.com/user-attachments/assets/58fc9935-6704-4abc-bb59-0a8aa30990c6)


MyVOD est une plateforme de streaming vidéo permettant aux utilisateurs de regarder des films en ligne, de gérer leurs abonnements et d'interagir avec du contenu via des commentaires et des évaluations.

## 🚀 Fonctionnalités
- 🎥 **Streaming de films et séries**
- 📅 **Gestion des abonnements**
- 📝 **Ajout de commentaires et évaluations**
- 🔍 **Recherche et filtrage des films**
- 📂 **Stockage des vidéos avec MinIO**
- 📊 **Tableau de bord administrateur**

## 🛠️ Technologies utilisées
- **Frontend** : React.js, Redux Toolkit, Axios, Tailwind CSS
- **Backend** : Node.js, Express.js, MongoDB, JWT
- **Stockage** : MinIO pour les vidéos
- **Authentification** : JWT
- **Docker** : Docker et Docker Compose pour le déploiement
- **Tests** : Jest/Mocha

## 📦 Installation
### Prérequis
- Node.js
- MongoDB
- Docker (optionnel pour le déploiement)

### Étapes d'installation
1. **Cloner le projet**
   ```sh
   git clone https://github.com/YassineElmiri/MyVOD.git
   cd MyVOD
   ```
2. **Installer les dépendances**
   ```sh
   cd backend-streaming
   npm install
   cd ../frontend-streaming
   npm install
   ```
3. **Configurer les variables d'environnement**
   - Crée un fichier `.env` dans `backend-streaming` et `frontend-streaming`
   - Remplis les variables comme indiqué dans `.env.example`

4. **Lancer le projet**
   ```sh
   # Lancer le backend
   cd backend-streaming
   npm start
   
   # Lancer le frontend
   cd ../frontend-streaming
   npm start
   ```

## 🐳 FIGMA

![image](https://github.com/user-attachments/assets/4f00211a-b098-488c-b0ee-9c41e23ea25b)


## 📜 API Documentation
L'API est documentée avec Swagger. Accède à la documentation via :
```
http://localhost:5000/api-docs
```

## 📩 Contact
Créé par **Yassine Elmiri** - [miriyassine123@gmail.com](mailto:miriyassine123@gmail.com)

