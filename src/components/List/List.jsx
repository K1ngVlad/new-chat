const List = (props) => {
  const { elems, func } = props;
  return <>{elems.map(func)}</>;
};

export { List };
