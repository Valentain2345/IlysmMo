'use client'

import { useState } from 'react'

type LetterState = 'closed' | 'breaking' | 'opening' | 'revealed' | 'read'

export default function Page() {
  const [state, setState] = useState<LetterState>('closed')
  const isOpen = state === 'opening' || state === 'revealed' || state === 'read'

  const openSeal = () => {
    if (state !== 'closed') return
    setState('breaking')
    window.setTimeout(() => setState('opening'), 620)
    window.setTimeout(() => setState('revealed'), 1900)
  }

  return (
    <main className={`love-letter-app state-${state}`}>
      <section className="scene" aria-label="Interactive love letter">
        <div className={`envelope-wrap ${isOpen ? 'envelope-is-open' : ''}`}>
          <div className="envelope">
            <div className="letter-shadow" />
            <button
              className="letter-button"
              type="button"
              onClick={() => state === 'revealed' && setState('read')}
              aria-label={state === 'revealed' ? 'Tap to read the letter' : 'Love letter'}
              disabled={state !== 'revealed'}
            >
              <span className={`letter-card ${state === 'read' ? 'letter-is-read' : ''}`}>
                <span className="letter-front">
                  <span className="front-mark">♡</span>
                  <span className="front-title">Tap to read</span>
                  <span className="front-rule" />
                  <span className="front-small">A letter, just for you</span>
                </span>
                <span className="letter-back">
                  <span className="back-date">September 5, 2026</span>
                  <span className="back-greeting">My dearest,</span>
                  <span className="back-body">Some feelings are too lovely to keep folded away. Thank you for being the softest part of my every day, the quiet joy I carry with me wherever I go.</span>
                  <span className="back-body">If I could send one thing across the miles, it would be this little reminder: you are loved, deeply and completely.</span>
                  <span className="back-signoff">Always yours,</span>
                  <span className="back-name">with all my heart</span>
                </span>
              </span>
            </button>
            <div className="envelope-back" />
            <div className="envelope-flap" />
            <div className="envelope-front" />
            <button
              className="seal-button"
              type="button"
              onClick={openSeal}
              aria-label="Break the wax seal to open the letter"
              disabled={state !== 'closed'}
            >
              <span className="wax-seal"><span className="seal-heart">♥</span></span>
            </button>
          </div>
        </div>
      </section>

    </main>
  )
}
