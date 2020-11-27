import CountryTable from 'components/CountryTable/CountryTable';
import Layout from 'components/Layout/Layout';
import SearchInput from 'components/SearchInput/SearchInput';
import styles from 'styles/Home.module.css';

export default function Home({ countries }) {
  console.log(countries);
  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} contries</div>

      <SearchInput placeholder="Filter by Name, Region or SubRegion" />

      <CountryTable countries={countries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
};
