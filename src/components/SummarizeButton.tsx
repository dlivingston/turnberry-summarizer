import { Button } from '@/components/ui/button'

interface SummarizeButtonProps {
  onClick: () => void
  isLoading: boolean
}

export default function SummarizeButton({ onClick, isLoading }: SummarizeButtonProps) {
  return (
    <Button 
      onClick={onClick} 
      disabled={isLoading}
      className="w-full sm:w-auto"
    >
      {isLoading ? 'Summarizing...' : 'Summarize'}
    </Button>
  )
}