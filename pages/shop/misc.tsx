import type { NextPage } from 'next';
import Image from 'next/image';

import { Layout } from '../../components/layout';

import styles from './styles/Home.module.scss';

const Misc: NextPage = () => {
  return (
    <Layout>
      <h1> Misc Products</h1>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </Layout>
  );
};

export default Misc;
