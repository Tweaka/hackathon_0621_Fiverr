import { gql } from "@apollo/client";
import client from "../apolloClient";
import { GetStaticProps } from "next";
import Dashboard from "./dashboard";
import SubBar from "../components/subBar";
import CategoriesBar from "../components/categoriesBar";
import PlusButton from "../components/plusButton";

interface Iprops {
  category: any;
  level: unknown;
}

function Home({ category, level }: Iprops): JSX.Element {
  return (
    <div>
      <div>
        <Dashboard />
        <SubBar />
        <div className="bg-gray-100">
          <CategoriesBar category={category} />
        </div>
      </div>
      <div>{category[1].name}</div>
      <div></div>
      <div>
        <pre>{JSON.stringify(category, null, 2)}</pre>
      </div>
      <div>
        <pre>{JSON.stringify(level, null, 2)}</pre>
      </div>
      <div></div>
    </div>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async (_context) => {
  const { data } = await client.query({
    query: gql`
      query GET_ALL_DATA {
        category {
          id
          name
        }
        level {
          id
          type
        }
        project {
          delivery_time
          id
          member_nbr
          name
        }
        user {
          category_id
          comment
          id
          level_id
          rating
        }
      }
    `,
  });
  console.log(data);
  return {
    props: {
      category: data.category,
      level: data.level,
    },
  };
};
