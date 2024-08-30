import axios from "axios";

const api = axios.create({ baseURL: 'http://localhost:3001' })
 
export const getDailyExpenses = () => api.get('/dailyExpenses');
export const getTravelExpenses = () => api.get('/travelExpenses');

export const getDailyExpensesById = (id: number) => api.get(`/dailyExpenses/${id}`);
export const getTravelExpensesById = (id: number) => api.get(`travelExpenses/${id}`);

export const createDailyExpenses = (de: any) => api.put('/dailyExpenses', de);
export const createTravelExpenses = (te: any) => api.put('/travelExpenses', te);

export const updateDailyExpenses = (de: any, id: number) => api.put(`/dailyExpenses/${id}`, de);
export const updateTravelExpenses = (te: any, id: number) => api.put(`/travelExpenses/${id}`, te);

export const deleteDailyExpenses = (id: number) => api.delete(`/dailyExpenses/${id}`);
export const deleteTravelExpenses = (id: number) => api.delete(`/travelExpenses/${id}`);

export const deleteAllDailyExpenses = () => api.delete('/dailyExpenses');
export const deleteAllTravelExpenses = () => api.delete(`/travelExpenses`);


