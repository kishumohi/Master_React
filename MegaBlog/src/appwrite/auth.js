import { Client, Account, ID } from "appwrite";
import Config from "../config/config.js";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(Config.appwriteUrl)
      .setProject(Config.appwriteUrlProjectId);
    this.account = new Account(this.client);
  }

  async CreateAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        this.Login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("AppWrite Service :: CreateAccount :: error", error);
    }
  }

  async Login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("AppWrite Service :: Login :: error", error);
    }
  }

  async GetCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("AppWrite Service :: GetCurrentUser :: error", error);
    }

    return null;
  }

  async Logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("AppWrite Service :: Logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
