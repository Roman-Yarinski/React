import React from "react";
import "./Main.css";
import smallFarm from './smallFarm.svg';

function Main() {
    return <main className="main">
        <p className='main__text main__text_simple'> Ответьте на 3 вопроса и узнайте</p>
        <p className='main__text main__text_big'>Как<span className='main__text main__text_big main__text_green'> увеличить удой каждой коровы до 15% </span>путем</p>
        <div className='main-info'>
            <div className='main-info__item'>
                <img src={smallFarm} className='main-info__item_logo' />
                <div>
                <p className='main-info__item_bold'>Своевременного <br /> определения половой охоты </p>
                <p className='main-info__item_simple'>особенно если она не заметна <br /> по внешним признакам</p>
                </div>
            </div>

            <div className='main-info__item'>
                <img src={smallFarm} className='main-info__item_logo' />
                <div>
                <p className='main-info__item_bold'>Анализом состояния <br /> здоровья коровы </p>
                <p className='main-info__item_simple'>при наблюдении за жвачкой, <br /> активностью и температурой тела </p>
                </div>
            </div>

            <div className='main-info__item'>
                <img src={smallFarm} className='main-info__item_logo' />
                <div>
                <p className='main-info__item_bold'> Выявление хромоты </p>
                <p className='main-info__item_simple'>предупреждением <br /> и выявлением развития <br /> хромоты</p>
                </div>
            </div>

        </div>
        <div className='quiz'>
            <div className='pin'></div>
            <div className='question'></div>
        </div>
    </main>;
}

export default Main;