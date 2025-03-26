// Import Firebase SDK in your HTML file before using this script
// Example: <script src="https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js"></script>
//          <script src="https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"></script>
//          <script src="https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js"></script>

document.addEventListener("DOMContentLoaded", () => {
    // Firebase configuration (Replace with your Firebase config)
    const firebaseConfig = {
        apiKey: "AIzaSyDpxn5Wp8Hgo8KcJd3XuTBE_hEu7jInGVM",
        authDomain: "harv-intell.firebaseapp.com",
        projectId: "harv-intell",
        storageBucket: "harv-intell.firebasestorage.app",
        messagingSenderId: "386320241460",
        appId: "1:386320241460:web:9de36f83dcb6a252d54b61",
        measurementId: "G-P03NL0ZKL7"
    };

    if (firebase.apps.length > 0) {
        console.log("✅ Firebase successfully initialized.");
    } else {
        console.error("❌ Firebase failed to initialize.");
    }
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const analytics = firebase.analytics();

    // Show main content
    document.getElementById("main-content").style.display = "block";

    // Navigation with Google Analytics event tracking
    function navigateTo(section, url) {
        analytics.logEvent('page_view', { page: section });
        window.location.href = url;
    }

    document.getElementById("weather-section").addEventListener("click", () => {
        navigateTo("Weather", "weather/weather.html");
    });
    
    document.getElementById("chatbot-section").addEventListener("click", () => {
        navigateTo("Chatbot", "chatbot/chatbot.html");
    });
    
    document.getElementById("disease-section").addEventListener("click", () => {
        navigateTo("Disease Detection", "disease_detection/disease-detection.html");
    });
    
    document.getElementById("news-section").addEventListener("click", () => {
        navigateTo("News", "news/news.html");
    });
    
    document.getElementById("analysis-section").addEventListener("click", () => {
        navigateTo("Analysis", "analytics/analysis.html");
    });
});
