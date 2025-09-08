# CLERK! Student Management System (SMS) Backend

Express API backend with MongoDB and Cloudinary integration for managing student records and file uploads.

## Features

- RESTful API endpoints for students and courses
- Image upload handling with Multer and Cloudinary
- MongoDB database integration
- CORS enabled for frontend requests

## Project Structure
```
student-backend/
├── config/
│   └── cloudinary.js   
├── models/
│   ├── Course.js         
│   └── Student.js        
├── routes/
│   ├── courseRoutes.js   
│   └── studentRoutes.js  
├── server.js             
├── .env                  
└── package.json
```

## Prerequisites

- Node.js 16 or higher
- MongoDB (local or cloud)
- Cloudinary account
- Windows PowerShell or terminal

## Setup

1. Install dependencies:
```powershell
cd c:\path\to\student-backend
npm install
```

2. Create `.env` file:
```bash
# Database
MONGO_URI=your_mongo_uri
PORT=your_server_port

# Cloudinary - use either URL or separate credentials
CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME

# OR
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# CORS
CLIENT_URL=your_client_uri
```

## API Endpoints

### Students
- GET `/api/students` - Fetch all students
- POST `/api/students` - Create student (multipart/form-data)
  - Fields: name, email, course, image (file)
- PUT `/api/students/:id` - Update student
- DELETE `/api/students/:id` - Delete student

### Courses
- GET `/api/courses` - Fetch all courses
- POST `/api/courses` - Create course
  - Fields: name, description

## Development

Start the server:
```powershell
# With nodemon
npm run dev

# Without nodemon
node server.js
```

Server runs at `http://localhost:5000` by default.

## Testing API Endpoints

Using PowerShell:

```powershell
# GET students
Invoke-RestMethod -Uri "http://localhost:5000/api/students" -Method Get

# POST student with image
$form = @{
    name = "Test Student"
    email = "test@example.com"
    course = "course_id"
    image = Get-Item "path/to/image.jpg"
}
Invoke-RestMethod -Uri "http://localhost:5000/api/students" -Method Post -Form $form
```

## Common Issues

1. "Must supply api_key" error
   - Check Cloudinary credentials in .env
   - Ensure .env is loaded before Cloudinary config

2. MongoDB connection fails
   - Verify MONGO_URI is correct
   - Check database access/credentials

3. CORS errors
   - Verify CLIENT_URL in .env matches frontend origin
   - Check if frontend is using correct API URL

## Dependencies

- express: Web framework
- mongoose: MongoDB ODM
- multer: File upload handling
- cloudinary: Cloud image storage
- multer-storage-cloudinary: Cloudinary integration
- cors: Cross-origin resource sharing
- dotenv: Environment configuration
