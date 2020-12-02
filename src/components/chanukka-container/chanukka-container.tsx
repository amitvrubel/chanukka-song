import React from 'react';
import {ChanukkaEnglish} from '../chanukka-english/chanukka-english';
import {ChanukkaEnglishTranslation} from '../chanukka-english/chanukka-english-translation';
import {ChanukkaHebrew} from '../chanukka-hebrew/chanukka-hebrew';
import './chanukka-container.css';
export const ChanukkaContainer: React.FC = () => {
  return (
    <div className="chanukka-container">
      <ChanukkaEnglish/>
      <ChanukkaHebrew/>
      <ChanukkaEnglishTranslation/>
    </div>
  )
}