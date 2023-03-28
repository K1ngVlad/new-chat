const onChangeHeandler = (e, name, state) => {
  state[`set${name[0].toUpperCase() + name.slice(1)}`](e.target.value);
};

export { onChangeHeandler };
