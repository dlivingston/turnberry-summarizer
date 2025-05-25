interface ResultsPanelProps {
  summary: string | null
}

export default function ResultsPanel({ summary }: ResultsPanelProps) {
  if (!summary) return null

  return (
    <div className="rounded-lg border p-4 mt-4">
      <h2 className="text-lg font-semibold mb-2">Summary</h2>
      <p className="text-gray-700 dark:text-gray-300">{summary}</p>
    </div>
  )
}