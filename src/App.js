import React, {useState} from "react";
import './App.css';
import Image1 from './images/01-min.svg';
import Image2 from './images/02-min.svg';
import Image3 from './images/03-min.svg';
import Image4 from './images/04-min.svg';
import Image5 from './images/05-min.svg';
import Image6 from './images/06-min.svg';
import Image7 from './images/07-min.svg';
import Image8 from './images/08-min.svg';
import Image9 from './images/09-min.svg';
import Image10 from './images/10-min.svg';
import Image11 from './images/11-min.svg';
import Image13 from './images/13-min.svg';
import Image14 from './images/14-min.svg';
import Image15 from './images/15-min.svg';
import Image16 from './images/16-min.svg';
import Image17 from './images/17-min.svg';
import Image18 from './images/18-min.svg';
import Image19 from './images/19-min.svg';
import Image20 from './images/20-min.svg';
import Image21 from './images/21-min.svg';
import Image22 from './images/22-min.svg';
import Image23 from './images/23-min.svg';
import Image24 from './images/24-min.svg';
import Image25 from './images/25-min.svg';
import Fireworks from './FireWorks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [bingoCard] = useState([
        [Image1, Image25, Image13, Image11, Image9],
        [Image7, Image20, Image3, Image4, Image22],
        [Image17, Image8, 13, Image6, Image5],
        [Image15, Image24, Image21, Image2, Image10],
        [Image18, Image14, Image16, Image23, Image19],
    ]);
    const [faceTitle] = useState([
        ['Experiences type', 'Selfie type', 'Dooer type', 'Sadness type', 'What if type'],
        ['Harmony type', 'Confident type', 'A photo first type', 'Zen type', 'Johny B type'],
        ['Stylish type', 'Positive type', 'Overthinker type', 'Thinker type', 'At phone type'],
        ['Artist type', 'Boyfriend type', 'Other think type', 'Illumine type', 'Strategy type'],
        ['Music & Life type', 'Schedule type', 'Colors type', 'Photos type', 'Netrual type']
    ])
    const [winners, setWinners] = useState([]);
    const [selectNumbers, setSelectNumbers] = useState([]);
    const [fireWorks, setFireWorks] = useState(false)

    const handleClick = (rowIndex, colIndex) => {
        const newWinners = winners.slice();
        newWinners.push([rowIndex, colIndex]);
        setWinners(newWinners);
    };
    const handleClickNumber = (number) => {
        if (selectNumbers.includes(number)) {
            let newSelectedNumbers = selectNumbers.filter(
                (pickedNumber) => pickedNumber !== number
            );
            setSelectNumbers(newSelectedNumbers);
        } else {
            setSelectNumbers([...selectNumbers, number]);
        }
    };
    const checkForBingo = () => {
        // row win check
        for (let i = 0; i < 5; i++) {
            if (
                winners.findIndex((el) => el[0] === i) >= 0 &&
                winners.findIndex((el) => el[0] === i && el[1] === 1) >= 0 &&
                winners.findIndex((el) => el[0] === i && el[1] === 2) >= 0 &&
                winners.findIndex((el) => el[0] === i && el[1] === 3) >= 0 &&
                winners.findIndex((el) => el[0] === i && el[1] === 4) >= 0
            ) {
                setFireWorks(true)
                toast.success('You won in row ' + i)
            }
        }
        // column win check
        for (let i = 0; i < 5; i++) {
            if (
                winners.findIndex((el) => el[1] === i) >= 0 &&
                winners.findIndex((el) => el[0] === 1 && el[1] === i) >= 0 &&
                winners.findIndex((el) => el[0] === 2 && el[1] === i) >= 0 &&
                winners.findIndex((el) => el[0] === 3 && el[1] === i) >= 0 &&
                winners.findIndex((el) => el[0] === 4 && el[1] === i) >= 0
            ) {
                setFireWorks(true)
                toast.success('You won in column ' + i)
            }
        }
        // check for diagonal win
        if (
            winners.findIndex((el) => el[0] === 0 && el[1] === 0) >= 0 &&
            winners.findIndex((el) => el[0] === 1 && el[1] === 1) >= 0 &&
            winners.findIndex((el) => el[0] === 2 && el[1] === 2) >= 0 &&
            winners.findIndex((el) => el[0] === 3 && el[1] === 3) >= 0 &&
            winners.findIndex((el) => el[0] === 4 && el[1] === 4) >= 0
        ) {
            setFireWorks(true)
            toast.success('Win from top-left to bottom-right in diagonal')
        }
        if (
            winners.findIndex((el) => el[0] === 0 && el[1] === 4) >= 0 &&
            winners.findIndex((el) => el[0] === 1 && el[1] === 3) >= 0 &&
            winners.findIndex((el) => el[0] === 2 && el[1] === 2) >= 0 &&
            winners.findIndex((el) => el[0] === 3 && el[1] === 1) >= 0 &&
            winners.findIndex((el) => el[0] === 4 && el[1] === 0) >= 0
        ) {
            setFireWorks(true)
            toast.success('Win from top-right to bottom-left in diagonal')
        }
    };

    return (
        <React.Fragment>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false}
                        closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
        <ToastContainer />
        <div className="App">
            <div className="App-header md:mt-10">
                <div className="container">
                    <div className="mx-auto my-auto">
                    <div className="py-5 md:pb-5 md:pt-0 font-bold text-5xl">Bingo App</div>
                    <div className="pl-5 pr-5 pb-5 md:pb-5 font-medium text-sm">I developed this app with the idea that each user has his own character and this is a way to ask how you feel today by clicking the bingo cards.</div>
                    <div className="pl-5 pr-5 pb-5 md:pb-5 font-medium text-xl">How do you feel today ?</div>

                        {bingoCard.map((row, rowIndex) => (
                            <div>


                            <div className="grid grid-cols-5 md:grid-cols-7" key={rowIndex}>
                                <div className="hidden md:block md:col-start-1"></div>
                                {row.map((number, colIndex) => (
                                    <div
                                        className={`${number === 13 ? 'flex flex-col justify-center p-4 cursor-pointer' : ' flex flex-col justify-start p-1 md:p-4 border-2 cursor-pointer '}`}
                                        key={colIndex}
                                        onClick={() => {
                                            handleClick(rowIndex, colIndex);
                                            handleClickNumber(number);
                                        }}
                                        style={{
                                            display: 'flex',
                                            border: '1px solid #000',
                                            backgroundColor: selectNumbers.includes(number) ? '#cc6b6e' : '#4c919c',
                                        }}>
                                        {number === 13 ? 'Free Slot' : <img src={number} alt="" key={colIndex}
                                                                            className="scale-90 hover:scale-100 ease-in duration-100 "/>}
                                        <div
                                            className="text-xs md:text-lg font-bold mt-1">{number === 13 ? '' : faceTitle[rowIndex][colIndex]}</div>
                                    </div>
                                ))}
                            </div>
                            </div>
                        ))}
                    <button onClick={() => checkForBingo()} className="bg-[#4c919c] text-xl p-4 mx-auto my-auto mt-5 font-semibold w-full border-0 hover:bg-white hover:text-[#011334] hover:bg-white object-cover">Check for Bingo!</button>
                    {fireWorks ? <Fireworks fireworks={fireWorks} setFireWorks={setFireWorks}/> : null}
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
  );
}

export default App;
