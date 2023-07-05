import { Link, useSearchParams } from "react-router-dom";
import { getSearchWith } from "../helpers/searchHelper";

export const SearchLink = ({ children, params, ...props }) => {
  const [searchParams] = useSearchParams();

  return (
    <Link
      to={{
        search: getSearchWith(searchParams, params),
      }}
      {...props}
    >
      {children}
    </Link>
  );
};
