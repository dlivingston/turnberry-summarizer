import { Textarea } from '@/components/ui/textarea'

interface TextInputProps {
  onTextChange: (text: string) => void
  isLoading?: boolean
  value: string
}

export default function TextInput({ onTextChange, isLoading, value }: TextInputProps) {
  return (
    <div className="relative">
      <Textarea
        className="min-h-[200px] w-full"
        placeholder="Paste your meeting notes here..."
        onChange={(e) => onTextChange(e.target.value)}
        disabled={isLoading}
        value={value}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/50 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
        </div>
      )}
    </div>
  )
}