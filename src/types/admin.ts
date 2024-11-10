export interface AdminState {
    adminInfo: {
        nom: string;
        prenom:string;
      email: string;
      // Add more fields as needed
    } | null;
    loading: boolean;
    accessToken: string | null;
    error: string | null;
    success: boolean;
  }
  
  export interface Admin {
    nom: string;
    prenom:string;
    email: string;
    // Add more fields as needed
  }


  export interface LoginResponse {
    admin: Admin;
    accessToken: string;
  }
  
  export interface LoginCredentials {
    login: string;
    password: string;
  }