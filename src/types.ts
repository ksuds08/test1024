// Define types and interfaces for your components here.
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ComponentProps {
  user: User;
}