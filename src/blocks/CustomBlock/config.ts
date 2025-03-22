import type { Block } from 'payload'

export const CustomBlock: Block = {
  slug: 'customBlock',
  fields: [
    {
      name: 'customTable',
      type: 'ui',
      admin: {
        components: {
          Field: '@/blocks/CustomBlock/Component#CustomTableField',
        },
      },
    },
  ],
}
