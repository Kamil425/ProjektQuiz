"use client"
import Image from "next/image";
import MainPage from "/public/MainPage.svg";
import Strzala from "/public/Strzala.svg";
const QuizChoice = () => {
    window.location.href = "/QuizChoice";
}
const StartPage = () => {
    return ( 
        <div className="h-full w-5/6 flex flex-row">
            <div className="h-full w-1/2 flex flex-col">
                <div className="h-1/2 w-1/2 flex flex-wrap pt-6"><h1 className="h-full w-full 2xl:text-6xl xl:text-5xl l:text-4xl md:text-4xl sm:text-2xl max-sm:text-xl font-semibold">Poszerzaj swoją wiedzę razem z nami</h1></div>
                <div className="h-1/4 w-1/2"><p className="border-l-2 pl-4 text-lg sm:text-md">Pomożemy Ci przygotować się do egzaminów</p></div>
                <div className="h-1/4 w-1/2 flex">
                    <button className="h-1/2 w-1/2 bg-three text-white shadow-md shadow-three text-lg" onClick={QuizChoice}>Zacznij naukę</button>
        
                    </div>
                </div>
            <div className="h-full w-1/2"><Image src={MainPage} alt="MainPage" className='h-full w-full'/>
            </div>
        </div>
     );
}
 
export default StartPage;