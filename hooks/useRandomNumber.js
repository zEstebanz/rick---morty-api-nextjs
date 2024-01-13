//Funciona matematica para generar un numero de 1 a 826

export const useRandomNumber = (min,max) => { return Math.floor(Math.random() * (max - min + 1) + min) };