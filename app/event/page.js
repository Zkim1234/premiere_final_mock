import EventCard from '@/ui/FullSizedEventCard/FullSizedEventCard';
import style from '@/app/event/event.module.css';
import Header from '@/ui/HeaderComponent/Header';
import Slideshow from '@/ui/FeaturedEventSlider/EventSlider';
import NavBar from '@/ui/NavBar/NavBar';

export default function EventPage() {
  return (
    <div className={style.bodyContainer}>
      <Header sectionTitle="Featured this month" /> 
      <Slideshow slides={slides} /> 
      <CarouselComponent />
      <PopularEvents />
      <HandpickedCards />
      <NavBar />
    </div>
  );
}

const slides = [
  {
    image: '/images/tina_banner.png',
    title: 'TINA – The Tina Turner Musical',
    description: 'Queen Elizabeth Theatre 630 Hamilton Street, Vancouver\n2hrs, 40mins with 1 intermission.',
  },
  {
    image: '/images/blossom_banner.png',
    title: 'Blossoms After Dark',
    description: 'Blossoms After Dark takes place at David Lam Park.\nFriday, March 28, 6:30PM – 10:00PM\nSaturday, March 29, 6:30PM – 10:00PM',
  },
  {
    image: '/images/squamish_banner.png',
    title: 'Squamish Spring Dance (Grade 7-9)',
    description: 'Squamish Nation Totem Hall\nFri, May 16, 2025 7:30 PM - 9:30 PM PDT',
  },
];

export function CarouselComponent() {
  return (
    <div className={style.carouselWrapper}>
      <div className={style.carouselHeader}>
        <h3 className={style.carouselTitle}>Popular in Vancouver</h3>
        <div className={style.subtitleContainer}>
          <h5 className={style.carouselSubtitle}>Happening live this year!</h5>
          <h5 className={style.seeMore}>see more...</h5>
        </div>
      </div>
      <div className={style.carouselScroll}>
      <EventCard
        image="/images/weeknd_banner.png"
        title="The Weeknd"
        subtitle="After Hours till Dawn with Playboi Carti."
        size="small"
      />
      <EventCard
        image="/images/tulip_banner.png"
        title="Tulip Festival"
        subtitle="100 varieties of Tulips in Abbotsford."
        size="small"
      />
      <EventCard
        image="/images/nightmarket_banner.png"
        title="Night Market"
        subtitle="Come to Richmond Night Market."
        size="small"
      />
      <EventCard
        image="/images/kitsilano_banner.png"
        title="Kitsilano Comedy Classic"
        subtitle="(Produced By Jokers..."
        size="small"
      />
      </div>
    </div>
  );
}

export function PopularEvents() {
  return (
    <div className={style.wrapper}>
      <div className={style.sectionHeader}>
        <h3 className={style.sectionTitle}>Happening this month</h3>
        <div className={style.subtitleContainer}>
          <h5 className={style.carouselSubtitle}>Don't miss out!</h5>
          <h5 className={style.seeMore}>see more...</h5>
        </div>
      </div>
      <div className={style.eventCardContainer}>
      <EventCard 
        image="/images/art_vancouver.jpg"
        title="Art Vancouver 2025"
        subtitle={`Vancouver Convention Centre East\nThu, Apr 24, 2025 6:00 PM - Sun, Apr 27, 2025 5:00 PM`}
        size="normal" 
      />
      <EventCard 
        image="/images/banana_banner.png"
        title="This is Bananas! 20th Anniversary Celebration Fundraiser"
        subtitle="dtcenshouse.ca"
        size="normal"
      />
      <EventCard 
        image="/images/swimming_banner.png"
        title="Pedalheads Swim Open House - Fremont"
        subtitle={`Pedalheads Swim | Fremont Village\nFri, Apr 18, 2025 9:00 AM - 2:00 PM PDT`}
        size="normal"
      />
      </div>
    </div>
  );
}

export function HandpickedCards() {
  return (
    <div className={style.quadrantWrapper}>
      <div className={style.sectionHeader}>
        <h3 className={style.sectionTitle}>We think you might like</h3>
        <div className={style.subtitleContainer}>
          <h5 className={style.carouselSubtitle}>Hand picked just for you!</h5>
          <h5 className={style.seeMore}>see more...</h5>
        </div>
      </div>
      <div className={style.quadrantCards}>
      <EventCard
        image="/images/weeknd_banner.png"
        title="The Weeknd"
        subtitle="After Hours till Dawn with Playboi Carti."
        size="small"
      />
      <EventCard
        image="/images/tulip_banner.png"
        title="Tulip Festival"
        subtitle="100 varieties of Tulips in Abbotsford."
        size="small"
      />
      <EventCard
        image="/images/nightmarket_banner.png"
        title="Night Market"
        subtitle="Come to Richmond Night Market."
        size="small"
      />
      <EventCard
        image="/images/kitsilano_banner.png"
        title="Kitsilano Comedy Classic"
        subtitle="(Produced By Jokers..."
        size="small"
      />
      </div>
    </div>
  )
} 