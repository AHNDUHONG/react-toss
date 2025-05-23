import Description from './components/description';
import Hero from './components/hero';
import HomeService from './components/home-service';
import TransferService from './components/transfer-service';

export default function Home() {
  return (
    <div>
      <Hero />
      <Description />
      <HomeService />
      <TransferService />
    </div>
  );
}
