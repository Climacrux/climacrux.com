const posts = [
  {
    title: "Carbon Removed",
    subtitle: "Subscriptions & one-time for individuals",
    href: "https://carbonremoved.com/",
    category: { name: "carbonremoved.com", href: "https://carbonremoved.com/" },
    description:
      "A negative emissions broker. Packaging carbon removal into simple subscriptions and one-time purchases.",
    imageUrl: "/img/logo_carbon_removed_dark_blue_no_bg--600px.webp",
  },
  {
    title: "CDR Platform",
    subtitle: "CO₂ removal API",
    href: "https://docs.cdrplatform.com/",
    category: {
      name: "cdrplatform.com",
      href: "https://docs.cdrplatform.com/",
    },
    description:
      "Reach your net-zero goals by integrating CO₂ removal directly into your business. CDR Platform is sustainability building block for software development.",
    imageUrl: "/img/cdr-platform-horizontal.png",
  },
  {
    title: "Climacrux",
    subtitle: "Boutique CO₂ removal",
    href: "mailto://hello@climacrux.com",
    category: {
      name: "Contact us",
      href: "mailto://hello@climacrux.com",
    },
    description:
      "Boutique CO₂ removal for family offices. Fully custom portfolios and carbon removal education to build sustainability for future generations.",
    imageUrl: "/img/logo_climacrux_dark_blue_320x137--Google.webp",
  },
  //   {
  //     title: "Cogmi",
  //     subtitle: "Smarter reading recommendations",
  //     href: "https://cogmi.net/",
  //     category: {
  //       name: "cogmi.net",
  //       href: "https://cogmi.net/",
  //     },
  //     description:
  //       "Creating a network of online content  connected by similarity and relevance. Cogmi is a privacy respecting, recommendation engine that helps you discover content related to what you're reading.",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  //   },
  //   {
  //     title: "Not For Large Profit",
  //     subtitle: "Curbing corporate greed",
  //     href: "https://notforlargeprofit.org/",
  //     category: {
  //       name: "notforlargeprofit.org",
  //       href: "https://notforlargeprofit.org/",
  //     },
  //     description: "A set of principles for companies to follow to help ",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  //   },
];

const CardList = () => {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto container sm:px-2 lg:px-8 xl:px-12 ">
        <h2
          id="projects"
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Our projects
        </h2>
        <p className="mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
          We develop products and services with the goal of accelerating the
          journey to a sustainable future. Here you find our portfolio of
          projects guided by our dream of a better world.
        </p>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-1/2 mx-auto object-contain"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="group flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <span className="inline-flex items-center rounded-full bg-purple-100 px-4 py-0.5 text-xs font-medium text-purple-800">
                    {post.subtitle}
                  </span>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <p className="mt-4 text-sm text-right font-medium text-emerald-600">
                  <a
                    href={post.category.href}
                    className="group-hover:underline"
                  >
                    {post.category.name}
                  </a>
                  <span
                    className=" ml-2 group-hover:ml-5 group-hover:-mr-3 no-underline ease-out duration-300"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
