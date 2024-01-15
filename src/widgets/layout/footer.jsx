import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function Footer({ routes }) {
  const year = new Date().getFullYear();

  const imageStyle = {
    marginRight: '15px', // Value to separate!
  };

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
      <Typography variant="small" className="font-normal text-inherit">
       &copy; {year}, Research Unit of Computer Graphics, Technical University of Vienna. Developed by Hugo Hernández Alemán.
      </Typography>
        <ul className="flex items-center gap-4">
          {routes.map(({ name, path }) => (
            <li key={name}>
              <Typography
                as="a"
                href={path}
                target="_blank"
                variant="small"
                className="py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
              >
                {name}
              </Typography>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <img src="/img/TU.png" alt="Imagen 1" width="50" height="50" style={imageStyle} />
          <img src="/img/comgra.png" alt="Imagen 2" width="67" height="67" style={imageStyle} />
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  routes: [],
};

Footer.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
