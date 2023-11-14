const conf={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.DATEABASE_ID),
    appwriteCollectionId:String(import.meta.env.COLLECTION_ID),
    appwriteBucketId:String(import.meta.env.BUCKET_ID)
}

export default conf;