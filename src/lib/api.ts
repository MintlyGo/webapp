interface WaitlistResponse {
  success: boolean;
  message: string;
}

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw6VmY9IUktZVATaaSR3HRXqMX8dGibfHcDQJ1bl5BAmOnnoQ-SGJ4IYnsRnE7JFPNlhQ/exec';

export const submitWaitlistEmail = async (email: string): Promise<WaitlistResponse> => {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }), // Match the format expected by doPost
    });

    // Since we're using no-cors, we can't actually read the response
    // We'll assume success if the request didn't throw an error
    return {
      success: true,
      message: 'Thank you for joining our waitlist! We\'ll keep you updated.',
    };
  } catch (error) {
    console.error('Error submitting waitlist email:', error);
    return {
      success: false,
      message: 'Failed to join waitlist. Please try again later.',
    };
  }
}; 