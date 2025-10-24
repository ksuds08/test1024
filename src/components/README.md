## ChatUI Component

The `ChatUI` component allows users to engage in chat functionality with a visually appealing interface utilizing glassmorphism effects.

### Features
- Dynamic messaging with user name display.
- Basic chat message sending feature.
- Accessibility options via Radix Menu.

### Usage
```tsx
import ChatUI from './components/ChatUI';

<ChatUI displayName="User Name" />
```

### Accessibility Updates
- Wrapped in `React.memo` to optimize performance and minimize re-renders.

### Error Handling
This component checks if `displayName` is a non-empty string and ensures messages are not empty before sending. Appropriate error messages are displayed as alerts when validation fails.