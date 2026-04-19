import { BrowserRouter, useLocation } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import i18n from "./i18n";
import FloatingContact from "./components/feature/FloatingContact";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
      >
        <AppRoutes />
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <AnimatedRoutes />
        <FloatingContact />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
