// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

class UserApi {
  url = "http://localhost:3000/api/v1/user";

  async login(params) {
    let res = await fetch(this.url + "/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    return await res.json();
  }

  async isLoggedIn() {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    if(token && user) {
        return true;
    }
    return false;
  }
}

export default new UserApi();
