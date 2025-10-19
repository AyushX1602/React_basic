# Counter & Notifications App

This React application demonstrates two key concepts:

## 🔢 Counter Component
- **Auto-incrementing counter** that updates every second
- Uses `useEffect` with `setInterval` for automation
- **Proper cleanup** with `clearInterval` to prevent memory leaks
- Demonstrates React lifecycle management

## 🔔 Notifications Component  
- **Manual notifications** via button click
- **Automatic notifications** added every 5 seconds
- **Conditional rendering** to show notification count
- Uses function form of `setState` for reliable updates

## Key React Concepts Demonstrated
- ✅ `useState` hook for state management
- ✅ `useEffect` hook for side effects
- ✅ Proper cleanup functions to prevent memory leaks
- ✅ Function form of state setters: `setState(prev => prev + 1)`
- ✅ Conditional rendering with `&&` operator
- ✅ Event handling with `onClick`

## How to Run
```bash
# Navigate to this directory
cd counter-notifications

# Install dependencies (if needed)
npm install

# Start development server
npm run dev
```

## Code Structure
- `App.jsx` - Main component containing Counter and Notifications
- `App.css` - Styling for the components
- Clean, well-commented code with proper React patterns