import List from './List';
function Home(){
    return (
        <div style={{paddingBottom:'15rem' }}>
          {List('Noticias')}
          {List('Projetos')}
          {List('Eventos')}
        </div>
    );
}
export default Home;