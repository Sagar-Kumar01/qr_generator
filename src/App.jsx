import { useEffect, useRef, useState } from "react";
import { CiText,CiWifiOn,CiLocationOn,CiPhone} from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineAttachEmail,MdOutlineSms } from "react-icons/md";

import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";

import TextToQr from "./pages/TextToQr";
import LinkToQr from "./pages/LinkToQr";
import WifiToQr from "./pages/WifiToQr";
import EmailToQr from "./pages/EmailToQr";
import ContactToQr from "./pages/ContactToQr";
import PhoneToQr from "./pages/PhoneToQr";
import SmsToQr from "./pages/SmsToQr";
import LocationToQr from "./pages/LocationToQr";

import "./App.css";

function App() { 

  return (
    <div>
    <h1>QR Code Generator Pro</h1>
    <p>Advanced QR code generator with real-time preview, customization options, and multiple export formats. Perfect for businesses, events, and personal use.</p>

    <BrowserRouter>

      <nav>
        <NavLink to="/"> <CiText /> Text</NavLink>
        <NavLink to="/link"> <IoIosLink /> Link/URL</NavLink>
        <NavLink to="/wifi"> <CiWifiOn /> WiFi</NavLink>
        <NavLink to="/contact"> <RiContactsLine /> Contact</NavLink>
        <NavLink to="/email"> <MdOutlineAttachEmail /> Email</NavLink>
        <NavLink to="/phone"> <CiPhone /> Phone</NavLink>
        <NavLink to="/sms"> <MdOutlineSms /> SMS</NavLink>
        <NavLink to="/location"> <CiLocationOn /> Location</NavLink>
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
