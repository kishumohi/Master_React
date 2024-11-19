const Config = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteUrlProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteUrlDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteUrlCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteUrlBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default Config;
