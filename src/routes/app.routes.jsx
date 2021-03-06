import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Profile } from '../pages/Profile'
import { NewNote } from '../pages/NewNote'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/new" element={<NewNote/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/details/:id" element={<Details/>} />
    </Routes>
  )
}