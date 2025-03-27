'use client'
import React from 'react'
import { useField } from '@payloadcms/ui'
import '../style.scss'

type TableData = string[][]

export const TableFieldComponent: React.FC = () => {
  const { value, setValue } = useField<TableData>({
    path: 'tableData',
  })

  const updateCell = (row: number, col: number, val: string) => {
    const newData = value.map((r, ri) =>
      ri === row ? r.map((c, ci) => (ci === col ? val : c)) : r,
    )
    setValue(newData)
  }

  return (
    <div className="custom-table-ui">
      <div className="table-container">
        <div className="table">
          {value.map((row, ri) => (
            <div className="table-row" key={ri}>
              {row.map((cell, ci) => (
                <div className="table-cell" key={`${ri}-${ci}`}>
                  <input
                    className="table-input"
                    value={cell}
                    onChange={(e) => updateCell(ri, ci, e.target.value)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
