import { ClipboardDocumentIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"

interface ResultsPanelProps {
  summary: string | null
}

export default function ResultsPanel({ summary }: ResultsPanelProps) {
  if (!summary) return null

    const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  return (
    <div className="rounded-lg border p-4 mt-4">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-lg font-semibold">Summary</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="text-gray-500 hover:text-gray-700"
        >
          <ClipboardDocumentIcon className="h-5 w-5" />
        </Button>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{summary}</p>
    </div>
  )
}