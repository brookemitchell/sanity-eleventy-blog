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
                  buildHookId: '5ffbab78e12eb12c93d16269',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-1psmxvry',
                  apiId: 'd14ed9f5-f177-41e3-94be-cee2bde8bc29'
                },
                {
                  buildHookId: '5ffbab7893ca4ad31d652f7b',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-7tyqyoy4',
                  apiId: '64e7eee1-ef92-4323-89a4-7120af95fab7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brookemitchell/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-7tyqyoy4.netlify.app', category: 'apps'}
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
