import { gql } from "@apollo/client";
import client from "../apolloClient";
import { GetStaticProps } from "next";
import Dashboard from "./dashboard";
import SubBar from "../components/subBar";

interface Iprops {
  categories: any;
  level: unknown;
}

function Home({ categories, level }: Iprops): JSX.Element {
  return (
    <div>
      <div>
        <Dashboard />
        <SubBar {...categories} />
      </div>
      <div className="flex">
        {categories.map((category, index) => {
          return (
            <ul key={index}>
              <li>{category.name}</li>
            </ul>
          );
        })}
      </div>
      {console.log(categories)}
      <div></div>
      <div>
        <pre>{JSON.stringify(categories, null, 2)}</pre>
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
      categories: data.category,
      level: data.level,
    },
  };
};
