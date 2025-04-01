// src/collections/blocks/Table.ts
import { Block } from 'payload'
import { TableType } from './TableType'

export const TableBlockV2: Block = {
  slug: 'tableBlockV2',
  admin: {
    components: {
      Block: '@/blocks/Table-v2/Component#TableFieldComponent',
    },
  },
  fields: [
    {
      name: 'selectTable',
      type: 'select',
      defaultValue: 'VehiclePricing',
      required: true,
      options: [
        {
          label: 'Vehicle Pricing',
          value: 'VehiclePricing',
        },
        {
          label: 'Vehicle Specs',
          value: 'VehicleSpecs',
        },
      ],
    },
    {
      name: 'tableData',
      type: 'json',
      defaultValue: TableType,
      jsonSchema: {
        uri: 'https://example.com/schemas/table-data.json', // Provide a valid URI
        fileMatch: ['*.json'],
        schema: {
          oneOf: [
            {
              type: 'object',
              additionalProperties: {
                type: 'array',
                items: {
                  type: 'array',
                  items: {
                    type: ['string', 'array'],
                  },
                },
              },
            },
            {
              type: 'null',
            },
          ],
        },
      },
      admin: {
        components: {
          Field: {
            path: '@/blocks/Table-v2/Component.client#TableComponent',
          },
        },
      },
    },
  ],
}
