import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Project API calls
export const getProjects = async () => {
  const response = await axios.get(`${API_URL}/projects`);
  return response.data;
};

export const createProject = async (projectData: any) => {
  const response = await axios.post(`${API_URL}/projects`, projectData);
  return response.data;
};

export const deleteProject = async (id: string) => {
  const response = await axios.delete(`${API_URL}/projects/${id}`);
  return response.data;
};

// Skills API calls
export const getSkills = async () => {
  const response = await axios.get(`${API_URL}/skills`);
  return response.data;
};

export const createSkill = async (skillData: any) => {
  const response = await axios.post(`${API_URL}/skills`, skillData);
  return response.data;
};

export const deleteSkill = async (id: string) => {
  const response = await axios.delete(`${API_URL}/skills/${id}`);
  return response.data;
};