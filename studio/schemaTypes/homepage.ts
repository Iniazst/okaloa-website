import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage Sections',
  type: 'document',
  fields: [
    // Attention Grabber
    defineField({
      name: 'heroHeadline',
      title: 'Attention Grabber Title',
      type: 'string',
      description: 'The main bold title text at the top of the homepage.'
    }),
    defineField({
      name: 'heroText',
      title: 'Attention Grabber Text',
      type: 'array',
      of: [{type: 'block'}],
      description: 'The text block underneath the attention grabber title.'
    }),

    // De-risking
    defineField({
      name: 'deriskingText',
      title: 'De-risking Text',
      type: 'array',
      of: [{type: 'block'}],
      description: 'The text content for the De-risking section.'
    }),

    // How we engage
    defineField({
      name: 'engageText',
      title: 'How We Engage Text',
      type: 'array',
      of: [{type: 'block'}],
      description: 'The text content for the How We Engage section.'
    }),

    // Is this for you
    defineField({
      name: 'whenText',
      title: 'Is This For You Text',
      type: 'array',
      of: [{type: 'block'}],
      description: 'The text content for the Is This For You section.'
    }),

    // About
    defineField({
      name: 'aboutText',
      title: 'About Text',
      type: 'array',
      of: [{type: 'block'}],
      description: 'The text content for the About section.'
    })
  ]
})
