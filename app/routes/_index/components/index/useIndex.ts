export const useIndex = () => {
  // TODO: apply i18n
  const appData = [
    {
      src: "/images/index/sorajima.avif",
      title: "Sorajima Toon",
      description: "This is a web comic platform I'm working on now.",
      href: "https://sorajimatoon.com/",
      linkText: "Move to the site",
    },
    {
      src: "/images/index/buysell.avif",
      title: "BuySell",
      description:
        "Developed an app that is used by some stuff to manage items at reuse shops. It's only open to the stuff so I can't share the app's url.",
      // TODO: switch ja or en depending on the language of the user
      href: "https://buysell-technologies.com/en/",
      linkText: "Move to company site",
    },
    {
      src: "/images/index/visits-forms.avif",
      title: "Visits Forms",
      description:
        "This is a tool designed to support organizational transformation by gathering feedback from employees and visualizing company vision and strategies to foster alignment and a positive organizational culture. It collects opinions through surveys, uses a unique algorithm to rank responses by importance, and facilitates effective decision-making and organizational change through data-driven insights.",
      href: "https://visitsforms.com/",
      linkText: "Move to company site",
    },
    {
      src: "/images/index/sony-bank.avif",
      title: "Sony bank",
      description:
        "An online bank established By Sony which releases Play station, primarily serving individual customers in Japan. It offers a range of financial products, including yen and foreign currency accounts, international Visa debit cards, and online banking services in English. The bank aims to provide convenient, high-quality services, making it easy for customers to manage their finances globally. Sony Bank is a part of the Sony Financial Group, wholly owned by Sony Group Corporation.",
      // TODO: switch ja or en depending on the language of the user
      href: "https://moneykit.net/en/",
      linkText: "Move to company site",
    },
    {
      src: "/images/index/softbank.avif",
      title: "Softbank ",
      description:
        "Developed management app of logistics which is a part of the SoftBank Group and provides services aimed at optimizing logistics and supply chains. Specifically, it offers a wide range of solutions related to logistics, such as warehouse management, inventory control, and delivery services, targeting e-commerce companies and retailers. Additionally, SoftBank Logistics utilizes cutting-edge technologies like AI, IoT, and robotics to support efficient logistics operations and improve the business efficiency of companies. For example, it includes automated warehouse systems, real-time inventory tracking, and route optimization for deliveries. Leveraging the technological strength of the SoftBank Group, the company is growing in the field of smart logistics.",
      href: "https://www.sbfw.co.jp/",
      linkText: "Move to company site",
    },
  ];

  return { appData };
};
