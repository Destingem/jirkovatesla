export default function hexToRGBA(hex, opacity = 1) {
    const [r, g, b] = hex.match(/\w\w/g).map((xx) => parseInt(xx, 16));
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }