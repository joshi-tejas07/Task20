import Card from './component/Card/Card'
import './App.css'

const cardsData = [
  {
    title: 'Card Title 1',
    description: 'This is the description for card 1.',
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    title: 'Card Title 2',
    description: 'This is the description for card 2.',
    imageUrl: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    title: 'Card Title 3',
    description: 'This is the description for card 3.',
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    title: 'Card Title 4',
    description: 'This is the description for card 4.',
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    title: 'Card Title 5',
    description: 'This is the description for card 5.',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    title: 'Card Title 6',
    description: 'This is the description for card 6.',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fGJlYWNofGVufDB8fHx8MTY4NDA1MjAyNA&ixlib=rb-1.2.1&q=80&w=400'
  },
  {
    title: 'Card Title 7',
    description: 'This is the description for card 7.',
    imageUrl: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5hdHVyZXxlbnwwfHx8fDE2ODQwNTE4NjE&ixlib=rb-1.2.1&q=80&w=400'
  },
  {
    title: 'Card Title 8',
    description: 'This is the description for card 8.',
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    title: 'Card Title 9',
    description: 'This is the description for card 9.',
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    title: 'Card Title 10',
    description: 'This is the description for card 10.',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    title: 'Card Title 11',
    description: 'This is the description for card 11.',
    imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    title: 'Card Title 12',
    description: 'This is the description for card 12.',
    imageUrl: 'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  }
];

function App() {
  return (
    <div className="App">
      <h1>All the Card are here...</h1>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App
