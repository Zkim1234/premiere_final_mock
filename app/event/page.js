import EventCard from '@/ui/full-sized-event-card/full-sized-event-card';
import style from '@/app/event/event.module.css';
import SmallCard from '@/ui/carousel-card/Small-card';

export function CarouselComponent() {
  return (
    <div>
      <SmallCard
        image="/example.jpg"
        title="Sample Title"
        description="This is a description."
      />
    </div>
  );
}

export default function PopularEvents() {
  return (
    <div className={style.container}>
      <EventCard
        image="/images/art_vancouver.jpg"
        title="Art Vancouver 2025"
        subtitle={`Vancouver Convention Centre East\nThu, Apr 24, 2025 6:00 PM - Sun, Apr 27, 2025 5:00 PM`}
      />
      <EventCard
        image="/images/banana_banner.png"
        title="This is Bananas! 20th Anniversary Celebration Fundraiser"
        subtitle="dtcenshouse.ca"
      />
      <EventCard
        image="/images/swimming_banner.png"
        title="Pedalheads Swim Open House - Fremont"
        subtitle={`Pedalheads Swim | Fremont Village\nFri, Apr 18, 2025 9:00 AM - 2:00 PM PDT`}
      />
    </div>
  );
}
