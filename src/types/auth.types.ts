export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}

export interface User {
  id: string;
  name: string;
  email: string;
  // Add other user-related fields
}
