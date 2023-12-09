import './App.css';
import Guarantee from './Guarantee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Guarantee
            img="/f-delivery.png"
            title="Free shipping"
            description="Enjoy the convenience of free shipping on all orders, making your shopping experience effortless and cost-effective. Elevate your purchase without worrying about shipping fees, ensuring your items arrive at your doorstep with no additional cost for delivery."
          />
          <Guarantee
            img="/coin.png"
            title="100% Money back"
            description="Rest easy with our 100% Money-Back Guarantee. Shop confidently knowing that if you are not completely satisfied with your purchase, we will refund your money without any hassle. Your satisfaction is our priority, and our guarantee ensures your peace of mind while shopping with us."
          />
          <Guarantee
            img="/chat.png"
            title="Online support 24/7"
            description="Experience round-the-clock support with our online assistance available 24/7. Our dedicated team is here to help, providing instant support and guidance whenever you need it. Access our reliable online support anytime, ensuring you receive assistance and answers to your queries promptly and efficiently."
          />
        </p>
      </header>
    </div>
  );
}

export default App;
