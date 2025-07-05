const formTitle = document.getElementById('formTitle');
const switchForm = document.getElementById('switchForm');
const formBox = document.getElementById('formBox');

let isLogin = true;

switchForm.addEventListener('click', () => {
  isLogin = !isLogin;
  formTitle.textContent = isLogin ? 'Login' : 'Sign Up';
  formBox.querySelector('button').textContent = isLogin ? 'Login' : 'Sign Up';
  switchForm.innerHTML = isLogin
    ? `Don't have an account? <span>Sign Up</span>`
    : `Already have an account? <span>Login</span>`;
});
