import Footer from "../components/footer";
import Header from "../components/header";
import React from "react";
import { motion } from "framer-motion";
import okak from "../assets/okak.png";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Анимированный хедер */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="bg-white text-black"
      >
        <Header />
      </motion.div>
        
      <div className="flex justify-between m-20">
        
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 text-[500px] font-black text-white/10 select-none z-0 leading-none"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      >
        404
      </motion.div>
      <motion.div
        className="bg-gray-500/20 border border-transparent w-1/2 rounded-xl shadow-xl z-10 relative"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className="flex flex-col justify-between m-10 h-full">
          <div className="">
            <h1 className="text-7xl font-extrabold mb-6 leading-tight">
              СТРАНИЦА
              <br />
              НЕ РАБОТАЕТ
            </h1>
            <p className="text-3xl">
              Пока не знаем в чем проблема,
              <br />
              но мы скоро это пофиксим!
            </p>
          </div>
          <a
            href="/"
            className="bg-white text-accent-text py-3 px-6 rounded-lg w-48 text-center mb-20 font-medium"
          >
            Окак, на главную
          </a>
        </div>
      </motion.div>

        <div className="w-1/2 flex justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5, ease: "easeOut" }}
          >
            <img
              src={okak}
              alt="404 кот"
              className="max-h-[700px] w-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
      {/* </div>  */}
    </div>
  );
};

export default NotFound;
