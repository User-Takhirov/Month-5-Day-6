import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/main-layout";
import { Home } from "./Pages/Home";
import { BookBlock } from "./Pages/Books";
import { Profile } from "./Pages/Profile/profile";
import { ProfileLayout } from "./profile-layout/profile-layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<BookBlock />} />
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
