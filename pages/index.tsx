import { gql } from "@apollo/client";
import client from "../apolloClient";
import { GetStaticProps } from "next";

interface Iprops {
  category: unknown;
}

function Home({ category }: Iprops): JSX.Element {
  return (
    <div>
      <div>Hello Fiverr</div>
      <div>{category[0]}</div>
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
          price
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
    },
  };
};
