import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  cunstructor() {
    this.client.setEndpoint(conf.appwriteUr).setProject(conf.appwriteProjectId);
    this.account = new this.Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method
        return this.login({ email, password });
      } else {
        return null;
      }
    } catch (error) {
      console.log("apperite");
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  async logout(){
    try {
        await this.account.deltesession();
    } catch (error) {
        console.log(error)
    }
  }
  
}

const authService = new AuthService();

export default authService;
