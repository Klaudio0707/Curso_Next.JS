interface PageDetailProps{
    params: {
        id: string;
    }

}

async function getData(id: string) {
    const repositorios = await fetch("https://api.github.com/users/klaudio0707/repos");
    return repositorios.json();
  }

export default async function RepositorioId({params}:PageDetailProps) {
    const data = await  getData(params.id);
    return(
        <div>
            <h1> Detalhes do reporitorio {params.id}</h1>
        </div>


    )
}