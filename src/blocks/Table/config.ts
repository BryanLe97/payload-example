import type { Block } from 'payload'
import { lexicalEditor, EXPERIMENTAL_TableFeature } from '@payloadcms/richtext-lexical'

export const TableBlock: Block = {
  slug: 'tableBlock',
  fields: [
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: () => [EXPERIMENTAL_TableFeature()],
      }),
    },
  ],
}
