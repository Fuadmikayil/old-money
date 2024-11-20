import React from 'react'
import Header from '../components/header'
import { Link, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

const AboutPage = () => {

  const {t,i18n} = useTranslation()

  return (
    <div>
      <Header />
      <div className="rounded-2xl container mx-auto w-full py-20 flex flex-col gap-4 items-center justify-center bg-emerald-500">
        <h1 className="text-white tracking-wider uppercase text-6xl font-semibold">
          {t('heroText')}
        </h1>
        <h1 className="text-white tracking-wider uppercase text-6xl font-semibold">
          Language: {i18n.language}
        </h1>
        <button onClick={() => changeLanguage('az')}>Change Language to AZ</button>
        <button onClick={() => changeLanguage('en')}>Change Language to EN</button>
        <button onClick={() => changeLanguage('tr')}>Change Language to TR</button>
      </div>

      <div className="flex rounded-2xl container mx-auto w-full p-20 px-10 border border-emerald-300 mt-20">
        <nav className="flex flex-col gap-7 border-r border-r-gray-400">
          <Link
            to=""
            className="text-3xl border-l-2 border-transparent hover:border-l-2 hover:border-l-emerald-300 pl-2 pr-8"
          >
            macbook
          </Link>
          <Link
            to="iphone"
            className="text-3xl border-l-2 border-transparent hover:border-l-2 hover:border-l-emerald-300 pl-2 pr-8"
          >
            iphone
          </Link>
          <Link
            to="iwatch"
            className="text-3xl border-l-2 border-transparent hover:border-l-2 hover:border-l-emerald-300 pl-2 pr-8"
          >
            iwatch
          </Link>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default AboutPage