import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

// Collection name for form submissions
const COLLECTION_NAME = 'contact_forms';

/**
 * Test Firestore connection
 * @returns {Promise<boolean>} - True if connection is successful
 */
export const testFirestoreConnection = async () => {
  try {
    console.log('🔍 Testing Firestore connection...');
    console.log('🔍 Database instance:', db);
    console.log('🔍 Database app:', db.app);
    console.log('🔍 Project ID:', db.app.options.projectId);

    // Try to add a simple test document
    const testData = {
      test: true,
      timestamp: serverTimestamp(),
      message: 'Connection test',
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    console.log('🔍 Attempting to write test document...');
    const docRef = await addDoc(collection(db, 'test_connection'), testData);
    console.log('✅ Firestore connection successful! Test document ID:', docRef.id);
    return true;
  } catch (error) {
    console.error('❌ Firestore connection failed:', error);
    console.error('❌ Error code:', error.code);
    console.error('❌ Error message:', error.message);
    console.error('❌ Full error object:', error);

    // Check for specific error types
    if (error.code === 'permission-denied') {
      console.error('❌ This is a permission error - check your Firestore security rules');
    } else if (error.code === 'not-found') {
      console.error('❌ Database not found - make sure Firestore is enabled in your Firebase project');
    } else if (error.code === 'unavailable') {
      console.error('❌ Service unavailable - check your internet connection and Firebase status');
    }

    return false;
  }
};

/**
 * Submit contact form data to Firestore
 * @param {Object} formData - The form data to submit
 * @returns {Promise<string>} - Document ID of the created record
 */
export const submitContactForm = async (formData) => {
  try {
    console.log('Attempting to submit form data:', formData);

    // Add timestamp and format data
    const submissionData = {
      ...formData,
      submittedAt: serverTimestamp(),
      status: 'new', // Can be: new, contacted, scheduled, completed
      source: 'website'
    };

    console.log('Formatted submission data:', submissionData);

    // Add document to Firestore
    const docRef = await addDoc(collection(db, COLLECTION_NAME), submissionData);

    console.log('✅ Form submitted successfully with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('❌ Error submitting form:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    console.error('Error details:', error);

    // Provide more specific error messages
    if (error.code === 'permission-denied') {
      throw new Error('Permission denied. Please check Firestore security rules.');
    } else if (error.code === 'unavailable') {
      throw new Error('Firestore service is currently unavailable. Please try again later.');
    } else if (error.code === 'invalid-argument') {
      throw new Error('Invalid data provided. Please check your form inputs.');
    } else {
      throw new Error(`Failed to submit form: ${error.message || 'Unknown error'}`);
    }
  }
};

/**
 * Validate form data before submission
 * @param {Object} formData - The form data to validate
 * @returns {Object} - Validation result with isValid and errors
 */
export const validateFormData = (formData) => {
  const errors = {};
  
  // Required field validation
  if (!formData.fullName || formData.fullName.trim().length < 2) {
    errors.fullName = 'Full name is required (minimum 2 characters)';
  }
  
  // Email is optional, but if provided, it must be valid
  if (formData.email && formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!formData.phone || !/^[\+]?[1-9][\d]{9,14}$/.test(formData.phone.replace(/\s/g, ''))) {
    errors.phone = 'Valid phone number is required';
  }
  
  if (!formData.investmentInterest) {
    errors.investmentInterest = 'Please select your investment interest';
  }
  
  // Optional: Validate slot booking if provided
  if (formData.slotDateTime) {
    const selectedDate = new Date(formData.slotDateTime);
    const now = new Date();
    
    if (selectedDate <= now) {
      errors.slotDateTime = 'Please select a future date and time';
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Format form data for submission
 * @param {Object} rawFormData - Raw form data from inputs
 * @returns {Object} - Formatted form data
 */
export const formatFormData = (rawFormData) => {
  return {
    fullName: rawFormData.fullName?.trim() || '',
    email: rawFormData.email?.trim().toLowerCase() || '',
    phone: rawFormData.phone?.trim() || '',
    investmentInterest: rawFormData.investmentInterest || '',
    slotDateTime: rawFormData.slotDateTime || null,
    notes: rawFormData.notes?.trim() || ''
  };
};
