import Home from './pages/home';

import { Routes, Route, Navigate } from 'react-router-dom';
import useFirebaseAuthentication from './lib/hooks/useFirebaseAuthentication ';
import Login from './pages/onboarding/Login';
import SignUp from './pages/onboarding/SignUp';
import TeachersPage from './pages/teachers';
import StudentsPage from './pages/students';
import GroupsPage from './pages/groups';
import CreateTeacher from './components/CreateContanier/CreateTeacher';
import CreateGroup from './components/CreateContanier/CreateGroup';
import CreateStudent from './components/CreateContanier/CreateStudent';
import { Loader } from './components/shared/loader';

function App() {
  const { authUser, loading } = useFirebaseAuthentication();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {authUser ? (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/teachers' element={<TeachersPage />} />
          <Route path='/students' element={<StudentsPage />} />
          <Route path='/groups' element={<GroupsPage />} />
          <Route path='/create/teacher' element={<CreateTeacher />} />
          <Route path='/create/student' element={<CreateStudent />} />
          <Route path='/create/group' element={<CreateGroup />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
        </Routes>
      )}
    </>
  );
}

export default App;
