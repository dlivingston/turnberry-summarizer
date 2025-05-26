"use client";

import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { ThemeToggle } from "@/components/ThemeToggle"
import TextInput from "@/components/TextInput"
import SummarizeButton from "@/components/SummarizeButton"
import ResultsPanel from "@/components/ResultsPanel"
import { useSummarizeStore } from "@/store/summarizeStore"
import { Button } from "@/components/ui/button"


export default function Home() {
  const { 
    text, 
    summary, 
    isLoading, 
    setText, 
    setSummary, 
    setIsLoading,
    reset
  } = useSummarizeStore()

    const handleSummarize = async () => {
    if (!text.trim()) return

    setIsLoading(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSummary(`Here's a summary of your ${text.length} character text...`)
    } catch (error) {
      console.error('Error generating summary:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto min-h-screen p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">AI Meeting Notes Summarizer</h1>
        <ThemeToggle />
      </header>

      <main className="flex flex-col gap-6">
        <div className="space-y-4">
          <TextInput 
            onTextChange={setText} 
            isLoading={isLoading}
            value={text}
          />
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <SummarizeButton 
              onClick={handleSummarize} 
              isLoading={isLoading} 
              className="flex-1 sm:flex-initial"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={reset}
              disabled={isLoading || (!text && !summary)}
              aria-label="Reset form"
              className="w-10 h-10"
            >
              <ArrowPathIcon className="h-5 w-5" />
            </Button>
          </div>

          <ResultsPanel summary={summary} />
        </div>
      </main>
    </div>
  );
}
