interface AuthServiceInterface {
  getCurrentUser: () => any;
  authHeader: () => { "x-access-token": any | null };
  isAuthenticated: () => boolean;
}

class AuthService implements AuthServiceInterface {
  getCurrentUser = () => {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  };

  authHeader = () => {
    const user = this.getCurrentUser();

    if (user && user.accessToken) {
      return { "x-access-token": user.accessToken };
    } else {
      return { "x-access-token": null };
    }
  };

  isAuthenticated = () => {
    const user = this.getCurrentUser();
    if (!user) return false;

    return true;
  };

  logout = () => {
    localStorage.removeItem("user");
  };
}

const authService = new AuthService();

export default authService;
