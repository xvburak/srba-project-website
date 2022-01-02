export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '61d17d7e0b792029618503f1',
                  title: 'Sanity Studio',
                  name: 'srba-project-website-studio',
                  apiId: '15390736-daba-4496-898b-101f1b9e1c6c'
                },
                {
                  buildHookId: '61d17d7eadd95e5c7b46c2a5',
                  title: 'Blog Website',
                  name: 'srba-project-website',
                  apiId: 'b02db6e7-5b97-4f36-a44b-5783558287fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xvburak/srba-project-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://srba-project-website.netlify.app', category: 'apps'}
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
