import { Phonebook } from '../components/Phonebook/Phonebook';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <div>
      <Layout>
        <Phonebook />
      </Layout>
    </div>
  );
};
