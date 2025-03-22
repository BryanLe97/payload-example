import type { Block } from 'payload'

export const TableBlock: Block = {
  slug: 'tableBlock',
  fields: [
    {
      name: 'arrayValue',
      type: 'ui',
      admin: {
        components: {
          Field: '@/blocks/Table/Component#TableBlock',
        },
      },
    },
  ],
}
