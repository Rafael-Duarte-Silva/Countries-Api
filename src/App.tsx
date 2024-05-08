import './App.css';

import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

import { ScrollRestoration } from "react-router-dom";

import { useDarkMode } from './hooks/useDarkMode';

export const App = () => {
  const { handleChangeDarkMode, isDark } = useDarkMode();

  return (
    <>
      <Header
        onChange={handleChangeDarkMode}
        isDark={isDark}
      />

      <main>

        <Outlet/>

        <ScrollRestoration/>
      </main>
    </>
  )
}