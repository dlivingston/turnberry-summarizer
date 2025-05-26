import { Button } from '@/components/ui/button'

interface SummarizeButtonProps {
  onClick: () => void
  isLoading: boolean
  className?: string
}

export default function SummarizeButton({ onClick, isLoading }: SummarizeButtonProps) {
  return (
    <Button 
      onClick={onClick} 
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="inline-flex items-center">
          Summarizing
          <span className="ml-1 animate-[ellipsis_1.5s_steps(4,end)_infinite]">...</span>
        </span>
      ) : (
        'Summarize'
      )}
    </Button>
  )
}