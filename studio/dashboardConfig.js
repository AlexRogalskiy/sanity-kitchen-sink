export default {
  widgets: [
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
                  buildHookId: '5fc6f70510d925b5fa69ebbd',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wdumshjn',
                  apiId: '52cf39d2-c802-4088-8b64-4a8e43f0a711'
                },
                {
                  buildHookId: '5fc6f7057462ceb45868fb55',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-7x16ycmy',
                  apiId: '41d769d4-736f-4d15-9d44-f06ed53a5cd2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AlexRogalskiy/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-7x16ycmy.netlify.app', category: 'apps'}
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
