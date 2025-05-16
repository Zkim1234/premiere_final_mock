import EventCard from '@/ui/full-sized-event-card/full-sized-event-card';
import style from '@/app/event/event.module.css';
import SmallCard from '@/ui/carousel-card/Small-card';
import Header from '@/ui/header-component/header';
import Slideshow from '@/ui/FeaturedEventSlider/EventSlider';

export default function EventPage() {
  return (
    <div>
      <Header />
    <Slideshow />
      <CarouselComponent />
      <PopularEvents />
      <HandpickedCards />
    </div>
  );
}



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
          <h5 className={style.carouselSubtitle}>Handpicked just for you!</h5>
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