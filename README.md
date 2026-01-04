# QR Code Generator Pro

An advanced, feature-rich web application for generating QR codes with real-time preview, extensive customization options, and multiple export formats. Designed for businesses, events, marketing campaigns, and personal use cases.

## Overview

QR Code Generator Pro is a modern, user-friendly application built with React and Vite that allows users to generate QR codes from various input types including text, URLs, WiFi credentials, contact information, email addresses, phone numbers, SMS, and geographic locations. The application provides intuitive interfaces for each QR code type with real-time preview and customization capabilities.

## Features

### QR Code Generation Types

- **Text to QR**: Convert plain text or short messages into scannable QR codes
- **Link/URL to QR**: Generate QR codes from website URLs and web links
- **WiFi to QR**: Create QR codes for easy WiFi network sharing
- **Contact to QR**: Encode contact information in vCard format
- **Email to QR**: Generate mailto QR codes for email communications
- **Phone to QR**: Create QR codes for direct phone number calling
- **SMS to QR**: Generate SMS QR codes with pre-filled messages
- **Location to QR**: Encode geographic coordinates for location sharing

### Customization Options

- **Dynamic Color Customization**: Adjust QR code color and background color in real-time
- **Real-time Preview**: See QR code changes instantly as you modify inputs and settings
- **Error Correction**: Implements high error correction level (Level H) for reliability
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices

### Export Capabilities

- **PNG Download**: Export generated QR codes as high-quality PNG images
- **Optimized Size**: QR codes are generated at optimal size (200x200 pixels) with proper margins

## Technology Stack

### Frontend Framework
- **React** (v19.2.0): UI component library for building interactive user interfaces
- **React Router** (v7.11.0): Client-side routing for seamless page navigation
- **React Icons** (v5.5.0): Comprehensive icon library for intuitive UI elements

### Build Tools
- **Vite** (v7.2.4): Next-generation frontend build tool with fast development server
- **@vitejs/plugin-react** (v5.1.1): React support for Vite

### QR Code Generation
- **qrcode** (v1.5.4): JavaScript QR code encoder library

### Development & Linting
- **ESLint** (v9.39.1): Code quality and style enforcement
- **ESLint React Hooks** (v7.0.1): React hooks linting rules
- **ESLint React Refresh** (v0.4.24): React refresh plugin for linting

## Project Structure

```
src/
├── App.jsx              # Main application component with routing
├── App.css              # Main application styles
├── main.jsx             # Application entry point
├── index.css            # Global styles
├── components/
│   ├── QrArea.jsx       # Reusable QR code display and download component
│   └── QrArea.css       # QR area component styles
└── pages/
    ├── TextToQr.jsx     # Text input QR generation page
    ├── LinkToQr.jsx     # URL/Link input QR generation page
    ├── WifiToQr.jsx     # WiFi credentials QR generation page
    ├── ContactToQr.jsx  # Contact information QR generation page
    ├── EmailToQr.jsx    # Email QR generation page
    ├── PhoneToQr.jsx    # Phone number QR generation page
    ├── SmsToQr.jsx      # SMS message QR generation page
    └── LocationToQr.jsx # Geographic location QR generation page
```

## Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd qr_generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173` (default Vite port)

## Usage

### Development Mode
```bash
npm run dev
```
Starts the development server with hot module replacement (HMR) for instant code updates.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist` directory.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing before deployment.

### Code Quality
```bash
npm run lint
```
Runs ESLint to check code quality and adherence to coding standards.

## How to Use the Application

1. **Navigate** to the desired QR code type using the navigation tabs
2. **Enter** your data in the input field (text, URL, contact info, etc.)
3. **Customize** the QR code appearance using the color picker controls
4. **Preview** the QR code in real-time as you make changes
5. **Download** the QR code as a PNG image by clicking the "Download PNG" button

### Input Validation
- **URL Validation**: Link/URL inputs are validated to ensure proper format (http:// or https://)
- **WiFi Validation**: WiFi credentials are validated for proper authentication methods
- **Email/Phone Validation**: Contact fields support standard formats

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Highlights

✨ **Multi-Format Support** - Generate QR codes from 8 different input types

🎨 **Full Customization** - Customize QR code and background colors

⚡ **Real-time Preview** - See changes instantly as you adjust settings

💾 **Easy Export** - Download QR codes as PNG with a single click

📱 **Responsive Design** - Works perfectly on all device sizes

🔒 **Client-Side Processing** - All QR code generation happens locally in your browser

## Future Enhancements

- [ ] SVG export format
- [ ] Batch QR code generation
- [ ] QR code styling with logos/images
- [ ] QR code analytics and tracking
- [ ] History of generated QR codes
- [ ] Dark mode support

## Performance Optimization

- Implements efficient canvas rendering with proper cleanup
- Lazy loading of components through React Router
- Optimized build output with Vite

## Security Considerations

- All QR code generation occurs client-side in your browser
- No data is sent to external servers
- URLs and contact information remain private and secure

## License

This project is available for personal and commercial use.

## Support & Contact

For issues, suggestions, or contributions, please refer to the repository documentation.

---

**Last Updated**: January 2026  
**Version**: 1.0.0
