import { Breadcrumb } from "antd";
import {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from "antd/es/breadcrumb/Breadcrumb";
import { useMatches, useLocation, Link } from "react-router-dom";

export const RouteBreadcrumb: React.FC = () => {
  const matches = useMatches();
  const matchIds = matches.map((item) => ({
    title: item.id,
    path: item.pathname,
  }));

  const location = useLocation();

  const itemRender = (
    route: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>,
  ) => {
    if (route.path === location.pathname) {
      return <span>{route.title}</span>;
    }
    return <Link to={route.path as string}>{route.title}</Link>;
  };

  return (
    <Breadcrumb
      items={matchIds}
      itemRender={(route) => itemRender(route)}
    />
  );
};
