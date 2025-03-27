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
      admin: {
        components: {
          Field: '@/blocks/Table-v2/Component#TableFieldComponent',
        },
      },
    },
  ],
  // fields: [
  //   {
  //     name: 'tableData',
  //     type: 'json',
  //     defaultValue: [
  //       [[''], [''], ['']],
  //       [[''], [''], ['']],
  //     ],
  //     admin: {
  //       components: {
  //         Field: '@/blocks/Table-v2/Component#TableFieldComponent',
  //       },
  //     },
  //   },
  // ],
}
