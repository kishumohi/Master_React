# MegaBlog App With Appwrite and VITE App

1. [Configration](#1---basic-app-configration)
2. [Env-Setup](#2---env-variable-setup)

## 1 - Basic App Configration

### npm module install

```javascript
    npm install @reduxjs/toolkit
    npm install @tinymce/tinymce-react
    npm install appwrite
    npm install html-react-parser
    npm install react-dom
    npm install react-hook-form
    npm install react-redux
    npm install react-router-dom
```

## 2 - Env Variable Setup

### Create ENV File and Variable

```javascript
VITE_APPWRITE_URL = "";
VITE_APPWRITE_PROJECT_ID = "";
VITE_APPWRITE_DATABASE_ID = "";
VITE_APPWRITE_COLLECTION_ID = "";
VITE_APPWRITE_BUCKET_ID = "";
```

### Create Config File for Convert Env Variable to string

```javascript
const Config = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteUrlProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteUrlDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteUrlCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteUrlBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default Config;
```

### Access Env Variable in VITE App

```javascript
import "./App.css";
import Config from "./config/config.js";

function App() {
  console.log(Config.appwriteUrl);
  return (
    <>
      <h1>Blog App With Appwrite</h1>
    </>
  );
}

export default App;
```
