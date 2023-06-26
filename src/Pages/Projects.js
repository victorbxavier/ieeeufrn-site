import List from './List';
function Projects(){
    return (
        <div style={{paddingBottom:'15rem' }}>
          {List('Projetos', "http://localhost:8080/post/projeto")}
        </div>
    );
}
export default Projects;