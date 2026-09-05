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
              aria-label={state === 'revealed' ? 'Tocar para leer' : 'Carta de amor'}
              disabled={state !== 'revealed'}
            >
              <span className={`letter-card ${state === 'read' ? 'letter-is-read' : ''}`}>
                <span className="letter-front">
                  <span className="front-mark">♡</span>
                  <span className="front-title">Tocar para leer</span>
                  <span className="front-rule" />
                  <span className="front-small">Una carta para mi amada Mo</span>
                </span>
                <span className="letter-back">
                  <span className="back-date">Septiembre 5 de 2026</span>
                  <span className="back-greeting">Mi querida Mo</span>
                  <span className="back-body">Estar con vos es hermoso y me haces reir muchisimo, me encanta todo de vos siempre. Todos los días soy cada vez mas feliz y mas locamente perdido por vos, pienso que no puedo mas y si puedo, es increible</span>
                  <span className="back-body">Te amo muchisimo, las palabras no me alcanzan para describir la felicidad que me das y la sensacion de calidez y lo especial que me haces sentir</span>
                  <span className="back-signoff">Con muchisimo amor</span>
                  <span className="back-name">Tu amado Valen</span>
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
