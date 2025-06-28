const API_BASE = 'http://localhost:8080';

export const api = {
  // User endpoints
  createUser: (userData: any) => 
    fetch(`${API_BASE}/user/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    }),

  deleteUser: (userId: string) =>
  fetch(`${API_BASE}/user/delete?id=${userId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }),


  loginUser: (email: string, password: string) =>
    fetch(`${API_BASE}/user/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    }),

  updateUser: (id: string, fieldName: string, value: string) =>
    fetch(`${API_BASE}/user/update`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, fieldName, value })
    }),

  rateFreelancer: (rating: number, id: string) =>
    fetch(`${API_BASE}/user/rating?rating=${rating}&id=${id}`, {
      method: 'POST'
    }),

  // Project endpoints
  createProject: (projectData: any) =>
    fetch(`${API_BASE}/project/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projectData)
    }),

  deleteProject: (id: string) =>
    fetch(`${API_BASE}/project/delete?id=${id}`, {
      method: 'DELETE'
    }),

  getUserProjects: (id: string) =>
    fetch(`${API_BASE}/project/user/projects?id=${id}`),

  updateProjectStatus: (id: string, status: string) =>
    fetch(`${API_BASE}/project/update?id=${id}&status=${status}`, {
      method: 'PUT'
    }),

  // Request endpoints
  sendApplication: (projectId: string, userId: string) =>
    fetch(`${API_BASE}/request/send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projectId, userId })
    }),

  acceptApplication: (pr_id: string, re_id: string) =>
    fetch(`${API_BASE}/request/accept`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pr_id, re_id })
    }),

  getProjectRequests: (id: string) =>
    fetch(`${API_BASE}/request/project/request?id=${id}`),

  // Admin endpoints
  getAllUsers: () =>
    fetch(`${API_BASE}/admin/all/users`),

  getAllProjects: () =>
    fetch(`${API_BASE}/admin/all/projects`)
};