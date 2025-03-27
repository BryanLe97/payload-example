'use client'
import type { TableBlock as TableBlockProps } from 'src/payload-types'
import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

type Props = {
  className?: string
} & TableBlockProps

export const TableBlock: React.FC<Props> = ({ className, content }) => {
  return (
    <div className={cn('mx-auto my-8 w-full', className)}>
      <RichText data={content} enableGutter={false} enableProse={false} />
    </div>
  )
}
