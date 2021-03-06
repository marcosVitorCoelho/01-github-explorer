interface RepositoryItemProps {
  repository: {
    name: string
    description: string
    html_url: string
  }
}


export function RepositoryItem(props: RepositoryItemProps) {
  {/* todas as propriedades da chamada da funcao no react estao no props*/ }
  return (
    <li>
      <strong>{props.repository.name}</strong> {/*props para pegar o conteudo de repository*/}
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url} target='_blank'>
        Acessar repositórios
      </a>
    </li>
  );
}