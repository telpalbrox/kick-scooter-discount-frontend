import Layout from "../components/Layout";
import { getAllBonuses } from "../apiClient";

export default function AllBonuses(props) {
  return (
    <Layout>
      <h1>Bonuses</h1>
      <ul>
        {props.bonuses.map((bonus) => (
          <li><a>{bonus.name}</a></li>
        ))}
      </ul>
    </Layout>
  );
}

AllBonuses.getInitialProps = async (req) => {
  const bonuses = await getAllBonuses();

  return {
    bonuses,
  };
};
