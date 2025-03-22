import React from 'react'
import { TableBlock as TableBlockProps } from '@/payload-types'
import { cn } from '@/utilities/ui'

import { Table } from './Component.client'

type Props = TableBlockProps & {
  className?: string
  arrayValue: Array<Array<string>>
}
export const TableBlock: React.FC<Props> = ({ className, arrayValue }) => {
  return (
    <div className={cn('mx-auto my-8 w-full', className)}>
      <Table propValue={arrayValue} />
    </div>
  )
}
