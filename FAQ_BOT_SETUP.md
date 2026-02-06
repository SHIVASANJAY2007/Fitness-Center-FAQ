# 🏋️ Gym FAQ Chatbot - Implementation Guide

## ✅ Project Structure

```
src/
├── components/
│   ├── Chatbot.jsx          # Main chatbot component
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── Navbar.jsx
│   └── Icons.jsx
├── data/
│   └── gymData.js           # Gym information & FAQ database
├── api/
│   └── gemini.js            # Google Gemini API integration
├── utils/
│   ├── normalize.js         # Text normalization utility
│   ├── intentDetector.js    # Intent detection logic
│   └── matcher.js           # Keyword matching & scoring
├── styles/
│   └── chatbot.css          # Chatbot styling
├── App.jsx
├── main.jsx
└── App.css
.env                         # Environment variables
package.json
```

## 🔧 Components Overview

### 1. **Chatbot.jsx** - Main Component
- Displays messages in a conversation format
- User messages appear on the right (blue)
- Bot messages appear on the left (gray)
- Auto-scrolls to latest message
- Handles Enter key for quick sending
- Loading state while processing

### 2. **normalize.js** - Text Processing
```javascript
normalize(text)
// Converts to lowercase
// Removes special characters
// Normalizes whitespace
// Trims edges
```

### 3. **matcher.js** - Smart Matching
```javascript
keywordScore(query, keywords)
// Calculates match percentage

findBestMatch(query, items)
// Finds best matching item (>=30% threshold)
// Searches facilities and programs
```

### 4. **intentDetector.js** - Intent Recognition
- Detects user intent (timings, membership, programs, contact, facilities)
- Currently used as utility for future enhancements

### 5. **gemini.js** - AI Integration
- Uses Google Generative AI (Gemini 1.5 Flash)
- Sends gym data as context
- Provides intelligent responses for complex questions
- Fallback when keyword matching fails

## 🚀 How It Works

### Query Processing Flow:
1. User enters a question
2. Text is normalized (lowercase, remove special chars)
3. System tries to find exact match in facilities/programs
4. If match found (≥30% score), shows pre-defined answer
5. If no match, queries Gemini AI for intelligent response
6. Response displayed in chat

### Example Responses:

**Q: "What are the gym hours?"**
- Normalized: "what are the gym hours"
- Checks facilities/programs keywords
- If match found: Shows facility info
- Otherwise: Gemini provides answer using gymData context

**Q: "Tell me about strength training"**
- Matches: Strength Training Area facility
- Returns: Name + Description

## 🔑 Setup Instructions

### 1. Install Dependencies
```bash
npm install
```
Note: `@google/generative-ai` is already in package.json

### 2. Configure API Key
In `.env` file:
```
VITE_GEMINI_API_KEY=your_api_key_here
```
Get your API key from: https://ai.google.dev

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm build
```

## 📊 Gym Data Structure

The `gymData.js` contains:
- **gymInfo**: Gym name, description, location
- **facilities**: Array of gym facilities with keywords
- **programs**: Training programs available
- **contact**: Phone, email, address

Each facility/program has:
```javascript
{
  name: "Facility Name",
  description: "Description text",
  keywords: ["key", "word", "search"]  // Used for matching
}
```

## 🎯 Key Features

✅ **Smart Keyword Matching** - Finds relevant info quickly
✅ **AI Fallback** - Gemini AI for complex questions
✅ **Text Normalization** - Handles user input variations
✅ **Clean UI** - Modern chat interface
✅ **Responsive Design** - Works on mobile & desktop
✅ **Error Handling** - Graceful error messages
✅ **Loading States** - Shows thinking indicator

## 🔐 Security Notes

- API key stored in .env (not in code)
- Never commit `.env` to version control
- Gemini API validates requests server-side

## 🛠️ Customization

### Add New Facilities
Edit `src/data/gymData.js`:
```javascript
facilities: [
  {
    name: "Yoga Studio",
    description: "Relaxation and flexibility classes",
    keywords: ["yoga", "stretch", "meditation"]
  }
]
```

### Adjust Matching Threshold
In `src/utils/matcher.js`:
```javascript
return score >= 0.3 ? best : null;  // Change 0.3 to 0.5 for stricter matching
```

### Customize Bot Style
Edit `src/styles/chatbot.css` for colors, fonts, layout

## 🐛 Troubleshooting

**Chatbot not responding:**
- Check API key in .env
- Ensure Gemini API is enabled
- Check browser console for errors

**Keyword matching not working:**
- Verify keywords array in gymData
- Check normalization in matching logic
- Test with exact keyword terms

**Styling issues:**
- Ensure chatbot.css is imported in Chatbot.jsx
- Clear browser cache
- Check CSS class names match JSX

## 📝 Future Enhancements

- [ ] Add typing indicator while Gemini responds
- [ ] Save chat history to localStorage
- [ ] Add suggested questions as chips/buttons
- [ ] Support for multiple languages
- [ ] Analytics & user feedback
- [ ] Admin panel to manage FAQ data
- [ ] Integration with gym booking system
