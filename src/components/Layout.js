import { Helmet } from 'react-helmet';
import Navbar from "./Navbar";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta charSet="utf-8" />
      </Helmet>
      <Navbar />

      <div className="flex-grow">{children}</div>

      
    </div>
  );
}

Layout.defaultProps = {
  title: "Francheye",
  description: "Francheye",
  keywords: "Francheye",
};
