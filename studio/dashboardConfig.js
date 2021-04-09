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
                  buildHookId: '6070cbe12602ab008fdc1088',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-gi9zw6j5',
                  apiId: '4fceee3e-959c-4728-90e0-61ece00110ba'
                },
                {
                  buildHookId: '6070cbe1d7bc6900adf7ae6a',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-nusxzdbc',
                  apiId: 'de9048d6-476b-460e-9cc2-30952078e6a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nalmeida/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-nusxzdbc.netlify.app', category: 'apps'}
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
