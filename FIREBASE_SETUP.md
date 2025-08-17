# Firebase Setup Instructions

## 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name (e.g., "agri-landing-page")
4. Enable Google Analytics (optional)
5. Click "Create project"

## 2. Enable Firestore Database

1. In your Firebase project, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location for your database
5. Click "Done"

## 3. Get Firebase Configuration

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Web" icon (</>) to add a web app
4. Register your app with a nickname
5. Copy the Firebase configuration object

## 4. Update Firebase Config

Replace the placeholder values in `src/firebase/config.js` with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-actual-sender-id",
  appId: "your-actual-app-id",
  measurementId: "your-actual-measurement-id"
};
```

## 5. Firestore Security Rules (Development)

For development, you can use these permissive rules in Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

**⚠️ Important**: Change these rules for production to secure your database!

## 6. Production Security Rules

For production, use more restrictive rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contact_forms/{document} {
      allow write: if true; // Allow form submissions
      allow read: if false; // Prevent reading by clients
    }
  }
}
```

## 7. Form Data Structure

The form submissions will be stored in the `contact_forms` collection with this structure:

```javascript
{
  fullName: "John Doe",
  email: "john@example.com",
  phone: "+1234567890",
  investmentInterest: "1-acre",
  slotDateTime: "2024-01-15T10:00", // Optional
  notes: "", // Optional
  submittedAt: Timestamp,
  status: "new",
  source: "website"
}
```

## 8. Viewing Form Submissions

1. Go to Firestore Database in Firebase Console
2. Navigate to the `contact_forms` collection
3. View all form submissions with timestamps
4. Export data if needed for CRM integration

## 9. Environment Variables (Optional)

For better security, you can use environment variables:

1. Create `.env` file in project root
2. Add Firebase config as environment variables:
```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
```

3. Update `src/firebase/config.js` to use environment variables

## 10. Testing

1. Fill out the contact form on your website
2. Check Firestore Database in Firebase Console
3. Verify the data appears in `contact_forms` collection
4. Test form validation and error handling

## Troubleshooting

- **Form not submitting**: Check browser console for errors
- **Permission denied**: Update Firestore security rules
- **Config errors**: Verify Firebase configuration values
- **Network errors**: Check internet connection and Firebase status
