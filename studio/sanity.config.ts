import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Okaloa CMS',

  projectId: 'b7wqv3yo',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton for Homepage Content
            S.listItem()
              .title('Homepage Sections')
              .id('homepage')
              .child(
                S.document()
                  .schemaType('homepage')
                  .documentId('homepage')
                  .title('Homepage Sections')
              ),
            S.divider(),
            // Regular list for Events
            S.documentTypeListItem('event').title('Upcoming Events'),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    // For singleton types, filter out actions that are not allowed (like delete/duplicate)
    actions: (prev, context) => {
      if (context.schemaType === 'homepage') {
        return prev.filter(({ action }) => 
          action === 'publish' || action === 'discardChanges' || action === 'restore'
        )
      }
      return prev
    },
  },
})
