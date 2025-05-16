import EventCard from '@/ui/full-sized-event-card/full-sized-event-card';
import style from '@/app/homepage/homepage.module.css';
import Header from '@/ui/header-component/header';
import Slideshow from '@/ui/FeaturedEventSlider/EventSlider';

export default function EventPage() {
  return (
    <div>
      <Header sectionTitle="For you" /> 
      <Slideshow slides={slides} /> 
      <CarouselComponent />
      <PopularEvents />
    </div>
  );
}

const slides = [
  {
    image: '/images/juno_awards.png',
    title: 'Juno Awards in Vancouver',
    description: 'Takes place at Rogers Arena. Sunday, March 30, 5:00PM..',
  },
  {
    image: '/images/zara_sale.png',
    title: 'Zara Sale',
    description: 'Price drops and sales everyday at your local Zara.',
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
        <h3 className={style.carouselTitle}>Recently viewed</h3>
        <div className={style.subtitleContainer}>
          <h5 className={style.carouselSubtitle}>Take another look here!!</h5>
          <h5 className={style.seeMore}>see more...</h5>
        </div>
      </div>
      <div className={style.carouselScroll}>
      <EventCard
        image="/images/autoshow_banner.png"
        title="Auto Show"
        subtitle="Vancouver International Auto Show."
        size="small"
      />
      <EventCard
        image="/images/vancouvertour_banner.png"
        title="Vancouver Tour"
        subtitle="Stanley Park/English Bay/Canada Place/Gas."
        size="small"
      />
      <EventCard
        image="/images/tourpass_banner.png"
        title="Vancouver Tour Pass"
        subtitle="24 or 48-Hour Hop-On Hop-Off Trolley Tour Pass."
        size="small"
      />
      <EventCard
        image="/images/pacifichotel_banner.png"
        title="Pan Pacific Hotel"
        subtitle="Get 50% off meeting room rental."
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
        <h3 className={style.sectionTitle}>More Events</h3>
        <div className={style.subtitleContainer}>
          <h5 className={style.carouselSubtitle}>See what’s in store for you!</h5>
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

