import React, { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

const HomePage = lazy(() => import("./pages/Home/Home"));
const TweetsPage = lazy(() => import("./pages/Tweets/Tweets"));

export const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Is loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="tweets" element={<TweetsPage />} />
            {/* <Route path="*" element={} /> */}
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
