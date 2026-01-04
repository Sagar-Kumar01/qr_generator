import { useEffect, useRef, useState } from "react";
import { CiText, CiWifiOn, CiLocationOn, CiPhone } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineAttachEmail, MdOutlineSms } from "react-icons/md";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import TextToQr from "./pages/TextToQr";
import LinkToQr from "./pages/LinkToQr";
import WifiToQr from "./pages/WifiToQr";
import EmailToQr from "./pages/EmailToQr";
import ContactToQr from "./pages/ContactToQr";
import PhoneToQr from "./pages/PhoneToQr";
import SmsToQr from "./pages/SmsToQr";
import LocationToQr from "./pages/LocationToQr";

import styles from "./App.module.css";

function App() {

  return (
    <div className={styles.container}>
      <h1>QR Code Generator Pro</h1>
      <p>Advanced QR code generator with real-time preview, customization options, and multiple export formats. Perfect for businesses, events, and personal use.</p>

      <BrowserRouter>

        <nav>
          
          <NavLink className={({ isActive }) =>
            isActive ? styles.active : styles.link
          } to="/"> <CiText /> Text</NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? styles.active : styles.link
          } to="/link"> <IoIosLink /> Link/URL</NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? styles.active : styles.link
          } to="/wifi"> <CiWifiOn /> WiFi</NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? styles.active : styles.link
          } to="/contact"> <RiContactsLine /> Contact</NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? styles.active : styles.link
          } to="/email"> <MdOutlineAttachEmail /> Email</NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? styles.active : styles.link
          } to="/phone"> <CiPhone /> Phone</NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? styles.active : styles.link
          } to="/sms"> <MdOutlineSms /> SMS</NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? styles.active : styles.link
          } to="/location"> <CiLocationOn /> Location</NavLink>

        </nav>

        <Routes>
          <Route path="/" element={<TextToQr />} />
          <Route path="/link" element={<LinkToQr />} />
          <Route path="/wifi" element={<WifiToQr />} />
          <Route path="/contact" element={<ContactToQr />} />
          <Route path="/email" element={<EmailToQr />} />
          <Route path="/phone" element={<PhoneToQr />} />
          <Route path="/sms" element={<SmsToQr />} />
          <Route path="/location" element={<LocationToQr />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
