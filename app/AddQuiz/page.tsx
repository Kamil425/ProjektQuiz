"use client"
import Navbar from '../components/Navbar'
import {ChangeEvent, useState } from "react";
export default function Home() {
  const [formValues, setFormValues] = useState({
    NazwaQuiz:"",
    KategoriaQuiz:"",
    TypQuiz:"Flashcard",
    TrudnoscQuiz:"Łatwy",
    TrescPytania:"",
    OdpowiedzA:"",
    OdpowiedzB:"",
    OdpowiedzC:"",
    OdpowiedzD:"",
  }
  );
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setLoading(true);
    setFormValues({
      NazwaQuiz:"",
      KategoriaQuiz:"",
      TypQuiz:"Flashcard",
      TrudnoscQuiz:"Łatwy",
      TrescPytania:"",
      OdpowiedzA:"",
      OdpowiedzB:"",
      OdpowiedzC:"",
      OdpowiedzD:"",
    });
    try {
      console.log(formValues);
      const response = await fetch('/api/AddQuiz', {
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setLoading(false);
      } else {
        console.error('Form submission failed');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = event.target;
    setFormValues({...formValues, [name]:value});
  }
  const handleChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) =>{
    const {name, value} = event.target;
    setFormValues({...formValues, [name]:value});
  }
  const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) =>{
    const {name, value} = event.target;
    setFormValues({...formValues, [name]:value});
  }
  return (
  <div className='h-full w-full flex justify-center'>
    <Navbar/>
    <form onSubmit={handleSubmit}>
      <div className='w-full h-full mt-40 flex justify-start'>
        <div className='w-full flex flex-col'>
        <div className='border-solid border-2 w-full h-1/5 border-five p-2 mb-2'>
          <div className='h-full w-full border-l-4 border-solid border-three pl-2 flex flex-col'>
          <label className='  '>Nazwa Quizu: </label>
          <input type ="text" placeholder="Nazwa Quizu" name='NazwaQuiz' value={formValues.NazwaQuiz} onChange={handleChange} required></input>
          </div>
        </div>
        <div className='border-solid border-2 w-full h-1/5 border-five p-2 mb-2'>
          <div className='h-full w-full border-l-4 border-solid border-three  pl-2 flex flex-col'>
          <label className='  '>Kategoria: </label>
          <input type ="text" placeholder="Kategoria" name='KategoriaQuiz' value={formValues.KategoriaQuiz} onChange={handleChange} required></input>
          </div>
        </div>
        <div className='border-solid border-2 w-full h-1/5 border-five p-2 mb-2'>
          <div className='h-full w-full border-l-4 border-solid border-three  pl-2 flex flex-col'>
          <label className='  '>Typ Quizu: </label>
          <select name="TypQuiz" value={formValues.TypQuiz}  onChange={(e) => setFormValues({ ...formValues, TypQuiz: e.target.value })} required>
            <option value="Flashcard">Flashcard</option>
            <option value="Quiz pojedynczego wyboru">Quiz pojedynczego wyboru</option>
            <option value="Quiz wielokrotnego wyboru">Quiz wielokrotnego wyboru</option>
            <option value="Quiz bez limitu czasoweg">Quiz bez limitu czasowego</option>
            <option value="Quiz prawda fałsz">Quiz prawda fałsz</option>
            <option value="Quiz na czas">Quiz na czas</option>
        </select>
          </div>
        </div>
        <div className='border-solid border-2 w-full h-1/5 border-five p-2 mb-2'>
          <div className='h-full w-full border-l-4 border-solid border-three  pl-2 flex flex-col'>
          <label className='  '>Poziom trudnosci: </label>
          <select name="TrudnoscQuiz" value={formValues.TrudnoscQuiz}  onChange={(e) => setFormValues({ ...formValues, TrudnoscQuiz: e.target.value })} required>
            <option value="Łatwy">Łatwy</option>
            <option value="Średni">Średni</option>
            <option value="Trudny">Trudny</option>
        </select>
          </div>
        </div>
        
        <div className='border-solid border-2 w-full h-1/5 border-five p-2 mb-2'>
          <div className='h-full w-full border-l-4 border-solid border-three pl-2  flex flex-col'>
          <label className='  '>Treść: </label>
          <input type='text' placeholder="Treść Pytania" name='TrescPytania' value={formValues.TrescPytania} onChange={handleChange} required></input>
          </div>
        </div>
        <div className='w-full h-full flex'>
        <div className='border-solid border-2 w-1/4 h-full border-five p-2 mb-2'>
          <div className='h-full w-full border-l-4 border-solid border-three pl-2 flex flex-col'>
          <label className='  '>Odpowiedz A: </label>
          <textarea placeholder="Odp A" name='OdpowiedzA' className=' resize-none h-full' value={formValues.OdpowiedzA} onChange={handleChangeTextArea} required></textarea>
          </div>
        </div>
        <div className='border-solid border-2 w-1/4 h-full border-five p-2 mb-2'>
          <div className='h-full w-full border-l-4 border-solid border-three pl-2 flex flex-col'>
          <label className='  '>Odpowiedz B: </label>
          <textarea placeholder="Odp B" name='OdpowiedzB' className=' resize-none h-full' value={formValues.OdpowiedzB} onChange={handleChangeTextArea} required ></textarea>
          </div>
        </div>
        <div className='border-solid border-2 w-1/4 h-full border-five p-2 mb-2'>
          <div className='h-full w-full border-l-4 border-solid border-three  pl-2 flex flex-col'>
          <label className='  '>Odpowiedz C: </label>
          <textarea placeholder="Odp C" name='OdpowiedzC' className=' resize-none h-full' value={formValues.OdpowiedzC} onChange={handleChangeTextArea} required></textarea>
          </div>
        </div>
        <div className='border-solid border-2 w-1/4 h-full border-five p-2 mb-2'>
          <div className='h-full w-full border-l-4 border-solid border-three pl-2 flex flex-col'>
          <label className='  '>Odpowiedz D: </label>
          <textarea placeholder="Odp D" name='OdpowiedzD' className=' resize-none h-full' value={formValues.OdpowiedzD} onChange={handleChangeTextArea} required></textarea>
          </div>
        </div>
        
        </div>
        <button type="submit" className='w-1/4 mt-2 border-five border-2' disabled={loading}>{loading ? "Dodawanie w toku..." : "Dodaj Quiz"}</button>
        </div>
        </div>
    </form>
  </div>
  )
}
