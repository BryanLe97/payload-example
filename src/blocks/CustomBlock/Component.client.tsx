'use client'
import React, { useState } from 'react'

export const Table: React.FC = () => {
  const [value, setValue] = useState<Array<Array<string>>>(Array(3).fill(Array(3).fill('')))

  const handleChange = (rowIndex: number, colIndex: number, newValue: string) => {
    const newValueArray = value.map((row, rIdx) =>
      row.map((cell, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? newValue : cell)),
    )
    setValue(newValueArray)
  }

  const addRow = () => {
    setValue([...value, Array(value[0]?.length).fill('')])
  }

  const addColumn = () => {
    setValue(value.map((row) => [...row, '']))
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            {Array(value[0]?.length)
              .fill(null)
              .map((_, colIndex) => (
                <th key={colIndex}>Header {colIndex + 1}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {value.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <input
                    value={cell}
                    onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button>
      <button onClick={addColumn}>Add Column</button>
    </div>
  )
}
