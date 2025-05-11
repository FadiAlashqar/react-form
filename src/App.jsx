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

  const [newArticle, setNewArtcle] = useState("");
  const [newComponent, setNewComponent] = useState(articoli)

  const addArticolo = (e) => {
    e.preventDefault();

    const nuovoArticolo = {
      id: newComponent.length + 1,
      titolo: newArticle,
      autore: "Autore Sconosciuto",
      data: "11/05/2025"
    };

    setNewComponent([...newComponent, nuovoArticolo]);
    setNewArtcle("");
  };

  return (
    <>
      <div className="container">
        <h1>REACT FORM</h1>
        <ul className="list-group mt-4">
          {newComponent.map((articolo) => {
            return <li key={articolo.id} className='list-group-item'>
              {articolo.titolo}
            </li>
          })}
        </ul>
        <form onSubmit={addArticolo} className='d-flex mt-4'>
          <div className="input-group">
            <input value={newArticle} onChange={(e) => { setNewArtcle(e.target.value) }} type="text" className='form-control'
              placeholder='Nuovo Titolo' />
          </div>
          <button className="btn btn-primary">Aggiungi</button>
        </form>
      </div>
    </>
  )
}

export default App
