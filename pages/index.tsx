import { GetServerSideProps } from 'next';

const HomePage = () => {
  // Your homepage content
  return <div>Welcome to the homepage!</div>;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Redirect to '/auth/signup'
  res.writeHead(302, { Location: '/auth/login' });
  res.end();

  // Return an empty object to prevent rendering the component
  return { props: {} };
};

export default HomePage;
