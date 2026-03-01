// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByyT_n93xT9nkY7gJW9R8-sTvYyZ49J9c",
  authDomain: "hersos-32a26.firebaseapp.com",
  projectId: "hersos-32a26",
  storageBucket: "hersos-32a26.firebasestorage.app",
  messagingSenderId: "509856607705",
  appId: "1:509856607705:web:21a907b10667a44ff97dc8",
  measurementId: "G-D4Q61L1HHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
  // Get a reference to the Firestore database service
  const database = getDatabase(app);
  
  var messagesRef = ref(database, 'profiles');

  // Listen for form submit
  document.getElementById('profileForm').addEventListener('submit', submitForm);
  
  function showAlert(message) {
    const alertElement = document.getElementById('alertMessage');
    alertElement.textContent = message;
    alertElement.style.display = 'block';
    alert('Profile updated successfully!');
  
    // Hide alert after 3 seconds
    setTimeout(() => {
      alertElement.style.display = 'none';
    }, 3000);
  }

  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    const fullName = getInputVal('fullName');
    const email = getInputVal('email');
    const phone = getInputVal('phone');
    const emergencyContact = getInputVal('emergencyContact');
    const location = getInputVal('location');
  
    // Save message
    saveMessage(fullName, email, phone, emergencyContact, location);
  
    
    showAlert('Profile updated successfully!');

    // Clear form
    document.getElementById('profileForm').reset();
    
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(fullName, email, phone, emergencyContact, location){
    push(ref(database, 'profiles'), {
        fullName: fullName,
        email: email,
        phone: phone,
        emergencyContact: emergencyContact,
        location: location
      });
}

