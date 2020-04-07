import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getBonus } from "../../apiClient";

export default function Bonus(props) {
  const bonus = props.bonus;
  const router = useRouter();
  console.log(router.query);
  return (
    <Layout>
      { router.query.showBonusCreatedMessage && <p>Bonus {bonus.name} was created successfuly</p>}
      <h1>Bonus</h1>
      <p>id: {bonus.id}</p>
      <p>userid: {bonus.userid}</p>
      <p>Name: {bonus.name}</p>
      <p>Start date: {bonus.startDate}</p>
      <p>End date: {bonus.endDate}</p>
      <p>Active: <input type="checkbox" disabled checked={bonus.active} /></p>
    </Layout>
  );
}

Bonus.getInitialProps = async (req) => {
  const bonus = await getBonus(req.query.id);

  return {
    bonus,
  };
};
