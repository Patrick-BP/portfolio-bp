import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const token = localStorage.getItem('token');

const hearders = {
  Authorization: `Bearer ${token}`,
  'content-type': 'application/json',
}


//login API call
export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

// about Me API calls
export const getAbout = async () => {
  const response = await axios.get(`${API_URL}/aboutMe`, { headers: hearders });
  return response.data;
};


// Project API calls
export const getProjects = async () => {
  const response = await axios.get(`${API_URL}/projects`, { headers: hearders });
  return response.data;
};

export const createProject = async (projectData: any) => {
  const response = await axios.post(`${API_URL}/projects`, projectData, { headers: hearders });
  return response.data;
};

export const deleteProject = async (id: string) => {
  const response = await axios.delete(`${API_URL}/projects/${id}`, { headers: hearders });
  return response.data;
};

// Skills API calls
export const getSkills = async () => {
  const response = await axios.get(`${API_URL}/skills`, { headers: hearders });
  return response.data;
};

export const createSkill = async (skillData: any) => {
  const response = await axios.post(`${API_URL}/skills`, skillData, { headers: hearders });
  return response.data;
};

export const deleteSkill = async (id: string) => {
  const response = await axios.delete(`${API_URL}/skills/${id}`, { headers: hearders });
  return response.data;
};