// src/collections/blocks/Table.ts
import { Block } from 'payload'

export const TableBlockV2: Block = {
  slug: 'tableBlockV2',
  fields: [
    {
      // UI component for editing
      name: 'tableData',
      type: 'json',
      defaultValue: [
        [[''], [''], ['']],
        [[''], [''], ['']],
      ],
      admin: {
        components: {
          Field: '@/blocks/Table-v2/Component/FieldComponent#TableFieldComponent',
        },
      },
    },
  ],
}
