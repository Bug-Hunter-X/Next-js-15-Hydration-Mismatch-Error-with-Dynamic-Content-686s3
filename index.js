```javascript
// pages/about.js

export async function getServerSideProps() {
  const date = new Date();
  return {
    props: {
      date: date.toString(),
    },
  };
}

export default function About({ date }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>Current time: {date}</p>
    </div>
  );
}
```