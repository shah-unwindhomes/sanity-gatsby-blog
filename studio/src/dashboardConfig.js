export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61da39f73d5c0319bfae26fe",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-f67exyo1",
                  apiId: "fbaa2e45-e8b2-41c4-8cd9-2d97b9d83526",
                },
                {
                  buildHookId: "61da39f7e432d7ef871fd9bf",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-5s8mmrt1",
                  apiId: "d988cf9f-4dc7-41bc-905d-333fdeb83a56",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/shah-unwindhomes/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-5s8mmrt1.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
