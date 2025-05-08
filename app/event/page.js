import Header from '@/ui/header-component/header'
import EventCard from '@/ui/full-sized-event-card/full-sized-event-card'
import style from '@/app/event/event.module.css'

const PopularEvents = () => {
  return (
    <div className={style.container}>
      <EventCard
        image="art_vancouver.js"
        title="Art Vancouver 2025"
        subtitle="Vancouver Convention Centre East
Thu, Apr 24, 2025 6:00 PM - Sun, Apr 27, 2025 5:00 PM "
      />
      <EventCard
        image="/images/tulip.jpg"
        title="Tulip Festival"
        subtitle="100 varieties of Tulips in Abbotsford"
      />
      <EventCard
        image="/images/tulip.jpg"
        title="Tulip Festival"
        subtitle="100 varieties of Tulips in Abbotsford"
      />
      <EventCard
        image="/images/tulip.jpg"
        title="Tulip Festival"
        subtitle="100 varieties of Tulips in Abbotsford"
      />
    </div>
  );
};

export default PopularEvents;


const LocationHeader = () => {
  return (
    <div>
      
      <Header />
    </div>
  )
}