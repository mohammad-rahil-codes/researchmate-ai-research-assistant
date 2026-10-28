import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'

function App() {
  const [content, setContent] = useState('')
  const [operation, setOperation] = useState('summarize')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  async function handleSubmit() {
    if (!content.trim()) {
      setError('Please enter some research content first.')
      return
    }

    setLoading(true)
    setError('')
    setResult('')

    try {
      const response = await fetch(
          'https://researchmate-backend-zw17.onrender.com/api/research/process',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content, operation }),
        },
      )

      const data = await response.text()

      if (!response.ok) {
        throw new Error(data)
      }

      setResult(data)
    } catch (err) {
    if (err instanceof TypeError) {
      setError(
          "Unable to connect to the server. Please make sure Spring Boot is running on port 8080."
      );
    } else {
      setError(
          err.message || "Something went wrong. Please try again."
      );
    }
  } finally {
    setLoading(false);
  }
  }

  async function copyResult() {
    try {
      await navigator.clipboard.writeText(result)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setError('Could not copy the result.')
    }
  }

  function clearAll() {
    setContent('')
    setResult('')
    setError('')
    setOperation('summarize')
  }

  return (
    <main className="app">
      <header className="header">
        <div className="brand-icon">R</div>
        <div>
          <h1>ResearchMate</h1>
          <p>AI Smart Research Assistant</p>
        </div>
      </header>

      <section className="hero">
        <span className="eyebrow">YOUR AI RESEARCH PARTNER</span>
        <h2>Turn complex research into clear insights.</h2>
        <p>
          Paste your research content and let AI help you
          understand it, summarize it, and discover new ideas.
        </p>
      </section>

      <section className="workspace">
        <label htmlFor="research-content">
          Research content
        </label>

        <textarea
          id="research-content"
          placeholder="Paste your article, notes, or research content here..."
          value={content}
          onChange={(event) => setContent(event.target.value)}
          rows={9}
        />

        <div className="actions">
          <button
            className={operation === 'summarize' ? 'active' : ''}
            onClick={() => setOperation('summarize')}
            disabled={loading}
          >
            Summarize
          </button>

          <button
            className={operation === 'suggest' ? 'active' : ''}
            onClick={() => setOperation('suggest')}
            disabled={loading}
          >
            Suggest ideas
          </button>

          <button
            className="primary"
            onClick={handleSubmit}
            disabled={loading}
          >

            {loading ? (
                <span className="loading-label">
    <span className="loading-spinner"></span>
    Generating insights...
  </span>
            ) : (
                'Generate insights'
            )}

          </button>
        </div>

        {(content || result) && (
            <div className="extra-actions
            result-actions">
              <button
                  onClick={clearAll}
                  disabled={loading}
                  style={{
                    backgroundColor: "#1e293b",
                    color: "#ffffff",
                    border: "1px solid #818cf8",
                    borderRadius: "10px",
                    padding: "10px 18px",
                    cursor: "pointer"
                  }}
              >
                Clear
              </button>


              {result && (

                  <button
                      onClick={copyResult}
                      style={{
                        backgroundColor: "#1e293b",
                        color: "#ffffff",
                        border: "1px solid #818cf8",
                        borderRadius: "10px",
                        padding: "10px 18px",
                        cursor: "pointer",
                        fontWeight: 600
                      }}
                  >
                    {copied ? 'Copied ✓' : 'Copy Result'}
                  </button>

              )}
            </div>
        )}

        {error && (
          <div className="error" role="alert">
            {error}
          </div>
        )}

        {result && (
          <section className="result result--card">
            <h3>AI Insights</h3>
            <div className="markdown-result">
              <ReactMarkdown>{result}</ReactMarkdown>
            </div>
          </section>
        )}
      </section>

      <footer>
        Powered by Spring Boot &amp; Gemini AI
      </footer>
    </main>
  )
}

export default App
