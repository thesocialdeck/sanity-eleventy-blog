export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f97601007d350191bad5488',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-7ou8t1p8',
                  apiId: '499571e6-b6cb-46ae-b755-b9d54cf7c4bd'
                },
                {
                  buildHookId: '5f976010521fc2135c946b37',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-srx8z8qn',
                  apiId: '7b5f5067-bfd9-43d8-b343-d6bf627b8f7c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thesocialdeck/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-srx8z8qn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
