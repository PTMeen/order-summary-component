import Card from './components/Card';
import CardHero from './components/CardHero';
import CardContent from './components/CardContent';

const App = () => {
  return (
    <div className="wave-background w-full h-[100vh] flex justify-center items-center">
      <Card>
        <CardHero />
        <CardContent />
      </Card>
    </div>
  );
};
export default App;
