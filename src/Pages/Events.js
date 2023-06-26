import List from './List';
function Events(){
    return (
        <div style={{paddingBottom:'15rem' }}>
          {List('Eventos', "http://localhost:8080/post/evento")}
        </div>
    );
}
export default Events;