import React from "react";
import Seo from "../components/Seo";
import LayoutLinkTree from "../Layout/LayoutLinkTree";
import Profile from "../components/LinkTree/Profile/Profile";

export default function links() {
  return (
    <LayoutLinkTree>
      <Profile />
    </LayoutLinkTree>
  );
}

export const Head = () => <Seo title="Meus links" />;
