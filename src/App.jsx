import { useEffect, useState } from 'react'
import { BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import './App.css'
import Page from './views/page/Page';
import HomePage from './views/home/Home';
import { useSettingsStore } from './store/store';

function App() {
  const darkTheme = useSettingsStore(state => state.darkTheme);

  // dark theme
  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("is-dark-theme");
    } else {
      document.body.classList.remove("is-dark-theme");
    }
  }, [darkTheme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Page>
            <HomePage />
          </Page>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
