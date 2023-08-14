import { BreadcrumbsLinkStyled, BreadcrumbsStyled } from "./Breadcrumbs.style";

const Breadcrumbs = ({ options, onClick, activeId }) => {
  const handleClick = (option) => () => {
    onClick?.(option);
  };

  return (
    <BreadcrumbsStyled aria-label="breadcrumb">
      {options?.map((option) => (
        <BreadcrumbsLinkStyled
          key={option.id}
          onClick={handleClick(option)}
          isActive={option.id === activeId}
        >
          {option.label}
        </BreadcrumbsLinkStyled>
      ))}
    </BreadcrumbsStyled>
  );
};

export default Breadcrumbs;
