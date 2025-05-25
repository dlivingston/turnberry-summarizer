// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'

interface TextInputProps {
  onTextChange: (text: string) => void
}

export default function TextInput({ onTextChange }: TextInputProps) {
  return (
    <Textarea
      className="min-h-[200px] w-full"
      placeholder="Paste your meeting notes here..."
      onChange={(e) => onTextChange(e.target.value)}
    />
  )
}