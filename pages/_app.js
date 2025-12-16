import Layout from '../components/Layout';
import '../styles/globals.css';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('W9kqgGX5AeD1Jdfsg');

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;