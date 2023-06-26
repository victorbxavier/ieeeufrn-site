import List from './List';
function Home(){
    return (
        <div style={{paddingBottom:'15rem' }}>
          {List('Noticias', "http://localhost:8080/post/noticia")}
          {List('Projetos', "http://localhost:8080/post/projeto")}
          {List('Eventos', "http://localhost:8080/post/evento")}
        </div>
    );
}
export default Home;