import { Client, Databases, Storage, Query, ID } from "appwrite";
import Config from "../config/config.js";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(Config.appwriteUrl)
      .setProject(Config.appwriteUrlProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.bucket);
  }
  async CreatePost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        Config.appwriteUrlDatabaseId,
        Config.appwriteUrlCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("AppWrite Service :: Database_CreatePost :: error", error);
      return false;
    }
  }

  async UpdatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        Config.appwriteUrlDatabaseId,
        Config.appwriteUrlCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("AppWrite Service :: Database_UpdatePost :: error", error);
      return false;
    }
  }

  async DeletePost(slug) {
    try {
      await this.databases.deleteDocument(
        Config.appwriteUrlDatabaseId,
        Config.appwriteUrlCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("AppWrite Service :: Database_DeletePost :: error", error);
      return false;
    }
  }

  async GetPost(slug = "") {
    try {
      return await this.databases.getDocument(
        Config.appwriteUrlDatabaseId,
        Config.appwriteUrlCollectionId,
        slug
      );
    } catch (error) {
      console.log("AppWrite Service :: Database_GetPost :: error", error);
      return false;
    }
  }
  async ListPost(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        Config.appwriteUrlDatabaseId,
        Config.appwriteUrlCollectionId,
        queries
      );
    } catch (error) {
      console.log("AppWrite Service :: Database_ListPost :: error", error);
      return false;
    }
  }

  // file upload service

  async UploadFile(file) {
    try {
      return await this.bucket.createFile(
        Config.appwriteUrlBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("AppWrite Service :: File_Upload :: error", error);
      return false;
    }
  }

  async DeleteFile(fileId) {
    try {
      await this.bucket.DeleteFile(Config.appwriteUrlBucketId, fileId);
      return true;
    } catch (error) {
      console.log("AppWrite Service :: File_Delete :: error", error);
      return false;
    }
  }

  async GetFilePreview(fileId) {
    try {
      return await this.bucket.GetFilePreview(
        Config.appwriteUrlBucketId,
        fileId
      );
    } catch (error) {
      console.log("AppWrite Service :: File_Get_Preview :: error", error);
      return false;
    }
  }
}

const service = new Service();
export default service;
