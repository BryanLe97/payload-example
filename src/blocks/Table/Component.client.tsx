'use client'
import React, { useState } from 'react'
type tableValue = Array<Array<string>>
type Props = {
  propValue: tableValue
}
export const Table: React.FC<Props> = ({ propValue }) => {
  const [value, setValue] = useState<tableValue>(Array(3).fill(Array(3).fill('')))

  const handleChange = (rowIndex: number, colIndex: number, newValue: string) => {
    const newValueArray = value.map((row, rIdx) =>
      row.map((cell, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? newValue : cell)),
    )
    setValue(newValueArray)
  }

  if (value?.length !== 0) {
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
      </div>
    )
  } else {
    return <div>Table is empty</div>
  }
}
