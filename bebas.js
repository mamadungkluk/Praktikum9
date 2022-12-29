function login() {
  if ($("#username").val() == "coba" && $("#password").val() == "test") {
    alert("You are a valid user");
    window.open('home.html', '_self');
  } else {
    alert("You are not a valid user");
    window.open('login.html', '_self');
  }
}
