import Tablet from './Tablet'
import "../../styles/calendarStyles/appointmentsContainer.css"


const Appointments = ({data}) => {
  return (
    <>
    <div className='appointments-container'>
      {data.map((item, index) => (
        <div  key={index} className={item.order}>
          <Tablet 
          title={item.title}
          image={item.image}
          time={item.time}
          name={item.name} />
        </div>
      ))}
      </div>
    </>
  );
}

export default Appointments