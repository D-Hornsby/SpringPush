class Auth {
    constructor() {
      this.authenticated = false
    }
    // does the history.push form login, login path callback anonymous funct 
    //true you logged in 
    login(callback) {
      this.authenticated = true
      callback()
    }

    logout(callback) {
      this.authenticated = false
      callback()
    }
    isAuthenticated() {
      return this.authenticated
    }
  }
  export default new Auth();