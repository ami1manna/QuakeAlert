<table>
  <tr>
    <td>
      <a href="https://github.com/user-attachments/assets/dfaffd7d-9ca2-406e-b6d4-fd1b523408f1">
        <img src="https://github.com/user-attachments/assets/dfaffd7d-9ca2-406e-b6d4-fd1b523408f1" alt="Image 1" style="width: 100%; height: auto; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.2)';" onmouseout="this.style.transform='scale(1)';"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/user-attachments/assets/9f866566-e5ca-4e32-b2bc-78599034bab7">
        <img src="https://github.com/user-attachments/assets/9f866566-e5ca-4e32-b2bc-78599034bab7" alt="Image 2" style="width: 100%; height: auto; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.2)';" onmouseout="this.style.transform='scale(1)';"/>
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/user-attachments/assets/e2bc3257-c860-4e5e-8e99-df6d91583203">
        <img src="https://github.com/user-attachments/assets/e2bc3257-c860-4e5e-8e99-df6d91583203" alt="Image 3" style="width: 100%; height: auto; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.2)';" onmouseout="this.style.transform='scale(1)';"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/user-attachments/assets/4c69e621-17c1-4b62-b265-6e82aecfd0f4">
        <img src="https://github.com/user-attachments/assets/4c69e621-17c1-4b62-b265-6e82aecfd0f4" alt="Image 4" style="width: 100%; height: auto; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.2)';" onmouseout="this.style.transform='scale(1)';"/>
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/user-attachments/assets/42b36be0-2903-455b-823f-35906b695861">
        <img src="https://github.com/user-attachments/assets/42b36be0-2903-455b-823f-35906b695861" alt="Image 5" style="width: 100%; height: auto; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.2)';" onmouseout="this.style.transform='scale(1)';"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/user-attachments/assets/652e1c6f-5efb-447a-a76d-148c3d304b02">
        <img src="https://github.com/user-attachments/assets/652e1c6f-5efb-447a-a76d-148c3d304b02" alt="Image 6" style="width: 100%; height: auto; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.2)';" onmouseout="this.style.transform='scale(1)';"/>
      </a>
    </td>
  </tr>
</table>

# QuakeAlert

## Overview
QuakeAlert is a web-based application designed to provide real-time earthquake information, emergency response coordination, evacuation guidance, and SOS alerting for users in affected areas. It aims to improve disaster preparedness and response by integrating mapping, data visualization, and communication tools.

## Features
- **Earthquake Data Search and Visualization:** Search for places and view earthquake data on a map. Visualize earthquake statistics using charts (magnitude, depth, frequency by country, etc.).
- **Evacuation Guidance:** View a list of nearby safe places and get directions from your current location to a selected safe place.
- **SOS Alert System:** Trigger an SOS alert, update your location, notify emergency contacts and response teams, and track SOS status.
- **Admin Dashboard:** Manage users and response teams (view details, toggle SOS status, add, edit, delete, update status).
- **Response Page:** Display weather and environmental data relevant to disaster response.

## Architecture
```
+------------------+       +------------------+       +------------------+
|                  |       |                  |       |                  |
|  React Frontend  | <---> |  Backend API     | <---> |  Database        |
|                  |       |  (Node.js/Express)|       |  (MongoDB)       |
|                  |       |                  |       |                  |
+------------------+       +------------------+       +------------------+
        |                          |                          |
        |                          |                          |
        v                          v                          v
+------------------+       +------------------+       +------------------+
|                  |       |                  |       |                  |
|  Third-Party APIs|       |  Email/SMS       |       |  Geolocation     |
|  (Maps, Geocoding)|       |  Notifications   |       |  Services        |
|                  |       |                  |       |                  |
+------------------+       +------------------+       +------------------+
```

## Tech Stack
- **Frontend:** React, React Router, Chart.js, Leaflet (for maps), Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Third-Party APIs:** Maps (Leaflet), Geocoding, EmailJS (for email notifications)

## Getting Started
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/QuakeAlert.git
   cd QuakeAlert
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Start the backend server:**
   ```bash
   cd backend
   npm install
   npm start
   ```

5. **Open your browser and navigate to `http://localhost:3000`.**

## Project Structure
```
QuakeAlert/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   │   ├── DashBoard/
│   │   ├── HomePage.jsx
│   │   ├── Chart.jsx
│   │   ├── ResponsePage.jsx
│   │   ├── Evacuation.jsx
│   │   └── Sos.jsx
│   ├── services/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── backend/
├── package.json
└── README.md
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
