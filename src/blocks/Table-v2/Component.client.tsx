'use client'
import React from 'react'
import './TableBlock.scss'
import type { TableBlockV2 } from '@/payload-types'
export type TableDataType = Record<string, string[][]> | undefined

interface TableV2Props extends TableBlockV2 {
  isAdmin?: boolean
  onCellUpdate?: (row: number, col: number, value: string) => void
}

export const TableComponent: React.FC<TableV2Props> = (props) => {
  const { tableData, selectTable, isAdmin = true, onCellUpdate = () => {} } = props

  return (
    <div>
      <div className="custom-table-ui">
        <div className="table-container">
          <div className="table">
            {tableData?.[selectTable]?.map((row, ri) => (
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
                      disabled={isAdmin}
                      onChange={(e) => onCellUpdate(ri, ci, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
