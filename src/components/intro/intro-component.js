import React from 'react';
import './intro.css';
import { useTranslation } from 'react-i18next';

const Intro = ({ title, subtitle, date }) => {
  const { t } = useTranslation();
  return (
    <div className="intro step absolute h-screen w-screen bg-cover bg-no-repeat">
      <div className="background-cover absolute h-screen w-screen flex flex-col justify-center items-center">
        <div className="container max-w-lg text-white text-center mb-10">
          <h1 className="title text-10xl font-serif mb-10">{t(title)}</h1>
          <h2 className="text-lg font-regular">{t(subtitle)}</h2>
        </div>
        <div className="container max-w-xl text-white">
          {date && (
            <div className="text-xs font-bold text-white flex items-center mb-6">
              <span className="separator" />
              <span className="font-bold uppercase px-1">
                {`${t('Published')} ${t(date)}`}
              </span>
              <span className="separator" />
            </div>
          )}
        </div>
        <div className="container max-w-sm text-gray-100 text-center">
          {t('scroll down to discover')}
        </div>
      </div>
    </div>
  );
}

export default Intro;