import React from 'react';

// 💥 Dynamic Import from a remote app
const Product = React.lazy(() => import('../product/ProductsApp'));

function App() {
  return (
    <React.Suspense fallback="Loading Button...">
      <Product />
    </React.Suspense>
  );
}

export default App;