import { CartProvider } from 'context/CartContext';
import SalesPage from './sales/page';

const Page: React.FC = () => {
  return (
    <CartProvider>
      <SalesPage />
    </CartProvider>
  )
}

export default Page;
