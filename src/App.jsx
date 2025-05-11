import { useState } from 'react'


function App() {
  const articoli = [
    {
      id: 1,
      titolo: "Come imparare JavaScript",
      autore: "Mario Rossi",
      data: "2025-05-10"
    },
    {
      id: 2,
      titolo: "Guida HTML per principianti",
      autore: "Luca Bianchi",
      data: "2025-04-28"
    },
    {
      id: 3,
      titolo: "CSS: trucchi e consigli",
      autore: "Giulia Verdi",
      data: "2025-05-01"
    }
  ];

  return (
    <>
      <div className="container">
        <h1>REACT FORM</h1>
        <ul className="list-group mt-4">
          {articoli.map((articolo) => {
            return <li key={articolo.id} className='list-group-item'>
              {articolo.titolo}
            </li>
          })}
        </ul>
        <form className='d-flex mt-4'>
          <div className="input-group">
            <input type="text" className='form-control' placeholder='Nuovo Titolo' />
          </div>
          <button className="btn btn-primary">Aggiungi</button>
        </form>
      </div>
    </>
  )
}

export default App
