import { useContext } from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react';
import { ContextGlobal } from "../Components/utils/ContextGlobalProvider";
import ContextGlobalProvider from "../Components/utils/ContextGlobalProvider";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Routes/Home';
import Contact from '../Routes/Contact';
import Favs from '../Routes/Favs';
import App from '../App';

test('Cambio de tema al llamar toggleTheme', () => {
  const TestComponent = () => {
    const { contextValue } = useContext(ContextGlobal);
    const { toggleTheme } = contextValue;
    const { theme } = contextValue;
    return (
      <div>
        <div data-testid="theme">{theme}</div>
        <button data-testid="toggle-button" onClick={toggleTheme}>
          Cambiar Tema
        </button>
      </div>
    );
  };

  const { getByTestId } = render(
    <ContextGlobalProvider>
      <TestComponent />
    </ContextGlobalProvider>
  );

  const toggleButton = getByTestId('toggle-button');

  expect(getByTestId('theme').textContent).toEqual('light');

  fireEvent.click(toggleButton);

  const currentTheme = getByTestId('theme').textContent;

  expect(currentTheme).toEqual('dark');
});

test('Llamada a la API de usuarios', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  expect(users.length).toBeGreaterThan(0);

  users.forEach((user) => {
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('username');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('address');
    expect(user).toHaveProperty('phone');
    expect(user).toHaveProperty('website');
  });

  // Verifica el estado de la respuesta
  expect(response.status).toBe(200);
});

test('Agregar elemento a favoritos - Verificar almacenamiento en localStorage', async () => {
  jest.spyOn(window, 'fetch').mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve([{ id: 1, name: 'Ejemplo' }]), // Simular el array de usuarios retornado por la API
  });

  const addFav = (id) => {
    const existingData = localStorage.getItem("apiData");
    let newData = [];
  
    if (existingData) {
      try {
        newData = JSON.parse(existingData);
        if (!Array.isArray(newData)) {
          throw new Error("Los datos existentes no son un array válido.");
        }
      } catch (error) {
        console.error("Error al parsear los datos existentes del localStorage:", error);
        return;
      }
    }

  addFav(1);

  const storedData = localStorage.getItem('apiData');

  expect(storedData).toContain('Ejemplo');

  window.fetch.mockRestore();
}});

test('Enlace de rutas', () => {
  render(
    <BrowserRouter>
      <ContextGlobalProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
          </Route>
        </Routes>
      </ContextGlobalProvider>
    </BrowserRouter>
  );

  expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/home');
  expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '/contact');
  expect(screen.getByRole('link', { name: /favorites/i })).toHaveAttribute('href', '/favs');
});

test('Verificar almacenamiento del tema en localStorage', () => {
  let storedTheme;

  storedTheme = localStorage.getItem('theme');

  expect(storedTheme).toBeTruthy();

  expect(storedTheme).toMatch(/^(light|dark)$/);
});