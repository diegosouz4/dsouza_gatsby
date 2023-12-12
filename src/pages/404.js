import React from "react";
import Layout404 from "../Layout/Layout404";
import ErroPage from "../components/ErroPage/ErroPage";
import Seo from "../components/Seo";

const NotFoundPage = () => {
  return (
    <Layout404>
      <ErroPage />
    </Layout404>
  );
};

export default NotFoundPage;
export const Head = () => <Seo title="404 Página não encontrada" />;
