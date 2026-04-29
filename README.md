# TextBloom

A lightweight React component library for text animations.

## Install

```bash
npm install textbloom
# or
pnpm add textbloom
# or
yarn add textbloom
```

## Usage

Import the component and its CSS:

```tsx
import { TextReveal } from "textbloom";
import "textbloom/style.css";

function App() {
  return <TextReveal>Hello World</TextReveal>;
}
```

## `<TextReveal />`

A character-by-character reveal animation with blur transition.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `string` | — | Text content to animate |
| `text` | `string` | — | Alternative to `children` prop |
| `color` | `string` | `"inherit"` | Text color |
| `delay` | `number` | `80` | Delay between each character (ms) |
| `initialDelay` | `number` | `0` | Initial delay before animation starts (ms) |
| `className` | `string` | — | Additional CSS class |
| `style` | `React.CSSProperties` | — | Additional inline styles |

### Example

```tsx
<TextReveal
  text="Welcome"
  delay={100}
  initialDelay={200}
  color="#e11d48"
/>
```

## Requirements

- React >= 17

## License

MIT
