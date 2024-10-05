import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/main-layout";
import { Home } from "./Pages/Home";
import { BookBlock } from "./Pages/Books";
import { ProfileLayout } from "./profile-layout";
import { HomeDetail } from "./Pages/HomeDetail";
import { Subscribtion } from "./Pages/Subscribtion";
import { EPay } from "./Pages/E-pay";
import { Saved } from "./Pages/Saved";
import { Settings } from "./Pages/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="books" element={<BookBlock />} />
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Subscribtion />} />
            <Route path="e-pay" element={<EPay />} />
            <Route path="saved" element={<Saved />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="home/detail/:id" element={<HomeDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
