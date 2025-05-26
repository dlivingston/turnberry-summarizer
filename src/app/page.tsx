"use client";

import TextInput from "@/components/TextInput"
import SummarizeButton from "@/components/SummarizeButton"
import ResultsPanel from "@/components/ResultsPanel"
import { useSummarizeStore } from "@/store/summarizeStore"

export default function Home() {
  const { 
    text, 
    summary, 
    isLoading, 
    setText, 
    setSummary, 
    setIsLoading 
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
      <main className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold">AI Meeting Notes Summarizer</h1>
        
        <div className="space-y-4">
          <TextInput onTextChange={setText} isLoading={isLoading} />
          
          <div className="flex items-center gap-4">
            <SummarizeButton 
              onClick={handleSummarize} 
              isLoading={isLoading} 
            />
          </div>

          <ResultsPanel summary={summary} />
        </div>
      </main>
    </div>
  );
}
