import Login from '../../components/Login';
import './login.scss';

// TODO - Connect the login container through Redux and remove local useState hook from App.jsx
function LoginPage() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <div class="login-page">
					<h1>Welcome to Lees Family Tree App</h1>
					<Login></Login>
        </div>
      </main>
    );
  }

export default LoginPage;