/* eslint-disable no-useless-catch */
import { Client, Account } from "appwrite";
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
        // eslint-disable-next-line no-undef
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
      throw error;
    }
  }

  async Login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async GetCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("AppWrite serive :: getCurrentUser");
      throw error;
    }
    // eslint-disable-next-line no-unreachable
    return null;
  }

  async Logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("AppWrite serive :: Logout");
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
