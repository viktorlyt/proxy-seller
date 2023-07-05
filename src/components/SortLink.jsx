import classNames from "classnames";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchLink } from "./SearchLink";

export const SortLink = ({ field }) => {
  const [searchParams] = useSearchParams();
  const sortField = searchParams.get("sort") || "";
  const isReversed = searchParams.get("order") === "desc";

  const params = useMemo(() => {
    return {
      sort: field === sortField && isReversed ? null : field,
      order: field === sortField && !isReversed ? "desc" : null,
    };
  }, [field, sortField, isReversed]);

  return (
    <SearchLink params={params}>
      <span className="icon">
        <i
          className={classNames("fas", {
            "fa-sort": sortField !== field,
            "fa-sort-up": sortField === field && !isReversed,
            "fa-sort-down": sortField === field && isReversed,
          })}
        />
      </span>
    </SearchLink>
  );
};
