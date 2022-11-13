const posts = [
  {
    title: "Carbon Removed",
    subtitle: "Subscriptions & one-time for individuals",
    href: "https://carbonremoved.com/",
    category: { name: "carbonremoved.com", href: "https://carbonremoved.com/" },
    description:
      "A negative emissions broker. Packaging carbon removal into simple subscriptions and one-time purchases.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
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
      "Reach your net-zero goals by integrating CO₂ removal directly into your business.",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
];

const CardList = () => {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto container sm:px-2 lg:px-8 xl:px-12 ">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our projects
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
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
                <p className="mt-4 text-sm text-right font-medium text-emerald-600 group">
                  <a
                    href={post.category.href}
                    className="group-hover:underline"
                  >
                    {post.category.name}
                  </a>
                  <span
                    className=" ml-1 group-hover:ml-4 group-hover:-mr-3 no-underline ease-out duration-300"
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
