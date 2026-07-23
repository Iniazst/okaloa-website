import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'sectionContent',
  title: 'Section Content',
  type: 'object',
  fields: [
    defineField({
      name: 'text1',
      title: 'Text Block 1',
      type: 'array',
      of: [{type: 'block'}],
      description: 'First text block in this section.'
    }),
    defineField({
      name: 'image1',
      title: 'Image 1',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string'
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string'
        })
      ],
      description: 'First image in this section.'
    }),
    defineField({
      name: 'text2',
      title: 'Text Block 2',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Second text block in this section.'
    }),
    defineField({
      name: 'image2',
      title: 'Image 2',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string'
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string'
        })
      ],
      description: 'Second image in this section.'
    }),
    defineField({
      name: 'text3',
      title: 'Text Block 3',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Third text block in this section.'
    })
  ]
})
