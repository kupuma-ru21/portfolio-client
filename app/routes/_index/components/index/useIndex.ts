export const useIndex = () => {
  // TODO: apply i18n
  const appData = [
    {
      src: "/images/index/sorajima.avif",
      title: "Sorajima Toon",
      description: "This is a web comic platform I'm working on now.",
      href: "https://sorajimatoon.com/",
    },
    {
      src: "/images/index/buysell.avif",
      title: "BuySell",
      description:
        "Developed an app that is used by some stuff to manage items at reuse shops. It's only open to the stuff so I can't share the app's url.",
      // TODO: switch ja or en depending on the language of the user
      href: "https://buysell-technologies.com/en/",
    },
    {
      src: "/images/index/visits-forms.avif",
      title: "Visits Forms",
      description:
        "This is a tool designed to support organizational transformation by gathering feedback from employees and visualizing company vision and strategies to foster alignment and a positive organizational culture. It collects opinions through surveys, uses a unique algorithm to rank responses by importance, and facilitates effective decision-making and organizational change through data-driven insights.",
      href: "https://visitsforms.com/",
    },
  ];

  return { appData };
};
