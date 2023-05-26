// api url
// var url = 'https://jsonplaceholder.typicode.com/users';
// 위에 url 에서 1번 값을 
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} email
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} emil
 * @property {Address} address
 * 
 */

//js doc 기본 문법
/**
 * 
 * @returns {Promise<User>}
 */

function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function (response){
  response.address
})


function startApp() {
  // axios
  //   .get(url)
  // 위에랑 같은 로직
  fetchUser()
    .then(function (response) {
      console.log(response);
      user = response.data;
      username.innerHTML = user[0].name;
      email.innerHTML = user[0].email;
      address.innerHTML = user[0].address.street;
      // TODO: 이름, 이메일, 주소 표시하기
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
