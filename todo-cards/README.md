# Todo & Cards App

This React application demonstrates component composition and interactive UI patterns:

## 📝 Todo List Component
- **Add new todos** with title and description
- **Dynamic list rendering** using `map()`
- **State management** for todo array
- **Form handling** with controlled/uncontrolled inputs
- **Visual todo cards** with status indicators

## 🎨 Card Component System
- **Reusable Card component** using `children` prop
- **Flexible content rendering** - cards can contain any JSX
- **Component composition** pattern demonstration
- **Responsive flexbox layout** for side-by-side cards
- **Post creation interface** example

## Key React Concepts Demonstrated
- ✅ `children` prop for component composition
- ✅ Array rendering with `map()` and `key` prop
- ✅ Form handling and DOM manipulation
- ✅ Reusable component design patterns
- ✅ Inline styling and CSS-in-JS
- ✅ Component architecture and separation of concerns

## How to Run
```bash
# Navigate to this directory
cd todo-cards

# Install dependencies (if needed)
npm install

# Start development server
npm run dev
```

## Code Structure
- `App.jsx` - Main component with TodoApp and CardDemo
- `App.css` - Styling for todos, cards, and layout
- Demonstrates clean component composition patterns

## Component Hierarchy
```
App
├── TodoApp
│   └── Todo Items (mapped)
└── CardDemo
    └── Card Components
        └── Custom Content (children)
```