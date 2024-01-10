import React from 'react'
import { instractions } from './instractions-data'
import './instractions.css'
export default function Instractions () {
  return (
        <>
            <div className="col-md-12 no-gutters instructionslist mb-3 py-2 ps-2 whitebg shadow font-12 sourcesanspro text-color5 bordered7 border-radius ">
                <ul tabIndex={0} aria-live="polite">
                    {instractions.map(items =>
                        <li className="mb-2" key={items.title}>
                            <span tabIndex={0} aria-label={items.title}>{items.title}</span>
                        </li>
                    )}
                </ul>
            </div>
        </>
  )
}
