// src/pages/Main.jsx
// Main page component (Home)

export default function Main() {
  console.log('Rendering Main component');
  
  if (typeof window === 'undefined' || window === null) {
    console.error('window is undefined or null');
    throw new Error('window is undefined or null');
  }

  console.log('window is defined');

  return (
    <div>
      <h1>Welcome to CryptoPrices!</h1>
      <p>Track the latest cryptocurrency prices here.</p>
    </div>
  );
}
