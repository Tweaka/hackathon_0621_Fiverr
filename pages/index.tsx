import { gql } from "@apollo/client";
import client from "../apolloClient";
import { GetStaticProps } from "next";
import Dashboard from "./dashboard";
import SubBar from "../components/subBar";
import CategoriesBar from "../components/categoriesBar";

interface IProps {
  projects: any;
  categories: any;
  levels: any;
}

function Home({ projects, categories, levels }: IProps): JSX.Element {
  return (
    <div>
      <div>
        <Dashboard
          projects={projects}
          categories={categories}
          levels={levels}
        />
      </div>
      <div></div>
      <div>
        <pre>{JSON.stringify(categories, null, 2)}</pre>
      </div>
      <div>
        <pre>{JSON.stringify(levels, null, 2)}</pre>
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
          image
          description
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
      levels: data.level,
      projects: data.project,
    },
  };
};
