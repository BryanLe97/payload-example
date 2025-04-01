'use client'
import React from 'react'
import { BlockCollapsible } from '@payloadcms/richtext-lexical/client'
import { useField } from '@payloadcms/ui'
import './TableBlock.scss'
import { TableType } from './TableType'
import { TableBlockV2 as TableV2Props } from '@/payload-types'
import { TableComponent, TableDataType } from './Component.client'

type TableTypeKeys = keyof typeof TableType
export const TableFieldComponent: React.FC<TableV2Props> = (prop) => {
  const { value: tableValue, setValue } = useField<TableDataType>({
    path: 'tableData',
  })
  const tableSelected = useField<TableTypeKeys>({
    path: 'selectTable',
  })

  const selectedKey: TableTypeKeys = tableSelected.value

  const updateCell = (row: number, col: number, val: string) => {
    if (!Array.isArray(tableValue?.[selectedKey])) return

    // Update only the selected table's array
    const updatedTable = tableValue[selectedKey].map((r, ri) =>
      ri === row ? r.map((c, ci) => (ci === col ? val : c)) : r,
    )
    // Update the table object immutably
    setValue({
      ...tableValue,
      [selectedKey]: updatedTable,
    })
  }

  return (
    <div>
      <BlockCollapsible>
        <div className="custom-table-ui">
          <div className="table-container">
            {tableValue?.[selectedKey]?.length == 0 ? (
              <p>No table data available.</p>
            ) : (
              <TableComponent
                blockType="tableBlockV2"
                tableData={tableValue}
                selectTable={selectedKey}
                isAdmin={false}
                onCellUpdate={updateCell}
              />
            )}
          </div>
        </div>
      </BlockCollapsible>
    </div>
  )
}
