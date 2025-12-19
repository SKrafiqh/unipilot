import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Verify from '../pages/Verify';
import Dashboard from '../pages/Dashboard';
import NotesList from '../pages/NotesList';
import SubjectDetail from '../pages/SubjectDetail';
import RoadmapList from '../pages/RoadmapList';
import RoadmapDetail from '../pages/RoadmapDetail';
import ProjectCategoryList from '../pages/ProjectCategoryList';
import ProjectList from '../pages/ProjectList';
import ProjectDetail from '../pages/ProjectDetail';
import AiNotes from '../pages/AiNotes';
import AiDoubt from '../pages/AiDoubt';
import LandingPage from '../pages/LandingPage';

// Legacy components import (removed to avoid conflict)
// import { LandingPage } from "./components/LandingPage";
// import { Auth } from "./components/Auth";
// import { StudentDashboard } from "./components/StudentDashboard";
// ... other imports ...

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ai-notes" element={<AiNotes />} />
        <Route path="/ai-doubt" element={<AiDoubt />} />

        {/* Notes Module Routes */}
        <Route path="/notes" element={<NotesList />} />
        <Route path="/notes/:subjectId" element={<SubjectDetail />} />

        {/* Roadmap Module Routes */}
        <Route path="/roadmaps" element={<RoadmapList />} />
        <Route path="/roadmaps/:roadmapId" element={<RoadmapDetail />} />

        {/* Projects Module Routes */}
        <Route path="/projects" element={<ProjectCategoryList />} />
        <Route path="/projects/:categoryId" element={<ProjectList />} />
        <Route path="/projects/:categoryId/:projectId" element={<ProjectDetail />} />

        <Route path="/projects/:categoryId/:projectId" element={<ProjectDetail />} />

        {/* Public Landing Page */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
