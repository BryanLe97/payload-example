'use client'
import React, { useEffect } from 'react'
import { BlockCollapsible } from '@payloadcms/richtext-lexical/client'
import { useField } from '@payloadcms/ui'
import './TableBlock.scss'
import { TableType } from './TableType'

type TableData = Record<string, string[][]>
type TableTypeKeys = keyof typeof TableType
export const TableFieldComponent = () => {
  const table = useField<TableData>({
    path: 'tableData',
  })
  const tableSelected = useField<TableTypeKeys>({
    path: 'selectTable',
  })

  const selectedKey = tableSelected.value // The currently selected key (e.g., 'VehiclePricing' or 'VehicleSpecs')

  // Ensure the selected table data exists
  const selectedTable = Array.isArray(table.value?.[selectedKey]) ? table.value[selectedKey] : []

  const updateCell = (row: number, col: number, val: string) => {
    if (!Array.isArray(table.value?.[selectedKey])) return

    // Update only the selected table's array
    const updatedTable = table.value[selectedKey].map((r, ri) =>
      ri === row ? r.map((c, ci) => (ci === col ? val : c)) : r,
    )

    // Update the table object immutably
    table.setValue({
      ...table.value,
      [selectedKey]: updatedTable,
    })
  }

  return (
    <div>
      <BlockCollapsible>
        <div className="custom-table-ui">
          <div className="table-container">
            {selectedTable.length > 0 ? (
              <div className="table">
                {selectedTable.map((row, ri) => (
                  <div className="table-row" key={ri}>
                    {row.map((cell, ci) => (
                      <div
                        className="table-cell"
                        key={`${ri}-${ci}`}
                        data-content={ri === 0 ? cell : undefined}
                      >
                        <input
                          className="table-input"
                          value={cell}
                          onChange={(e) => updateCell(ri, ci, e.target.value)}
                          disabled={ri === 0} // Disable editing for the first row (header)
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <p>No table data available.</p>
            )}
          </div>
        </div>
      </BlockCollapsible>
    </div>
  )
}
