



import {OwnerRepo} from "@/components/OwnerRepo"

interface DataPropts {
    id: number;
    name: string;
    full_name: string;
    language: string;
    owner: {
        login: string;
        id: number;
        avatar_url: string;
      }
    
    }
    
    async function getData() {
      // https://api.github.com/users/klaudio0707/repos
      // https://api.github.com/projects/:id/repository/commits/:sha/sequence
      const repositorios = await fetch("https://api.github.com/users/klaudio0707/repos");
      return repositorios.json();
    }
    const data: DataPropts[] = await getData();
    
    export default function Repositorios(){
    
    return (
        <main>
          <h1>Home</h1>
          <p>Sejá bem vindo ao repositorios</p>
          <br />
          <h3>Meus repositorios</h3>
          {data.map((item) => (
            <div key={item.id}>
              <strong><p>Repositorio: {item.full_name}</p></strong>
              <p>{item.language}</p>
              <p>{item.owner.login}</p>
              <p>{item.name}</p>
              <OwnerRepo
              avatar_url={item.owner.avatar_url}
              name={item.owner.login}/>
            </div>
          ))}
        </main>
    
      )
    }
    


