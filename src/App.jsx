import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/main-layout";
import { Home } from "./Pages/Home";
import { BookBlock } from "./Pages/Books";
import { Profile } from "./Pages/Profile";
import { ProfileLayout } from "./profile-layout";
import { HomeDetail } from "./Pages/HomeDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="books" element={<BookBlock />} />
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
          </Route>
          <Route path="home/detail/:id" element={<HomeDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
