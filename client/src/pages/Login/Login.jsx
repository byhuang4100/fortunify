import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const Login = () => {
  const handleLogin = () => {
    console.log('login button clicked');
  };

  return (
    <div>
      <NavBar />
      <Logo />
      <button onClick={() => handleLogin()}>Log in with Spotify</button>
      <Footer />
    </div>
  );
};

export default Login;
