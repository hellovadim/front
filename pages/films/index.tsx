import axios from "axios";
import { GetStaticProps } from "next/types";
import React from "react";
import Layout from "../../components/Layout";
import { FilmsProps } from "./films.props";
import Link from "next/link";

interface FilmsPageProps extends Record<string, unknown> {
  films: FilmsProps;
}

const Films = ({ films }: FilmsPageProps) => {
  return (
    <Layout title="Список фильмов">
      <>
        <>
          <ul className="list-none space-y-4 text-4xl font-bold mb-3">
            {films &&
              films.data.map((film) => {
                return (
                  <li key={film.id}>
                    <Link href={`film/` + film.attributes.slug}>
                      {film.attributes.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </>
      </>
    </Layout>
  );
};

export default Films;

export const getStaticProps: GetStaticProps = async () => {
  const getFilms = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}films`);
  const filmsResponse = await getFilms.json();
  console.log(filmsResponse);
  return {
    props: {
      films: filmsResponse,
    },
  };
};
