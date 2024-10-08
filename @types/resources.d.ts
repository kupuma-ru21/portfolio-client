interface Resources {
  common: object;
  index: {
    greeting: "Hello";
    pageTitle: "Portfolio";
    test: "{{val}}";
    nested: {
      nestedKey: "nestedKey";
    };
  };
}

export default Resources;
