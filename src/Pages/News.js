import List from './List';
function News(){
    return (
        <div style={{paddingBottom:'15rem' }}>
          {List('Noticias', "http://localhost:8080/post/noticia")}
        </div>
    );
}
export default News;