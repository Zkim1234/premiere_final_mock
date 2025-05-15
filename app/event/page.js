// import Header from '@/ui/header-component/header'
import EventCard from '@/ui/full-sized-event-card/full-sized-event-card'
import style from '@/app/event/event.module.css'

const PopularEvents = () => {
  return (
    <div className={style.container}>
      <EventCard
        image="/images/art_vancouver.jpg"
        title="Art Vancouver 2025"
        subtitle="Vancouver Convention Centre East
Thu, Apr 24, 2025 6:00 PM - Sun, Apr 27, 2025 5:00 PM "
      />
      <EventCard
        image="/images/"
        title="This is Bananas! 20th Anniversary "
        subtitle="Celebration Fundraiser"
      />
      <EventCard
        image="/"
        title="Pedalheads Swim Open House - Fremont"
        subtitle="Pedalheads Swim | Fremont Village
Fri, Apr 18, 2025 9:00 AM - 2:00 PM PDT"
      />
    </div>
  );
};

export default PopularEvents;

