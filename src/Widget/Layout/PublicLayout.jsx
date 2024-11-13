import Header from "../../Common/Header/Header";
import { Footer } from "../import/PublicImport";

const PublicLayout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default PublicLayout;
