export function RepositoryItem(props) {
  {/* todas as propriedades da chamada da funcao no react estao no props*/ }
  return (
    <li>
      <strong>{props.repository.name ?? 'Default'}</strong> {/*props para pegar o conteudo de repository*/}
      <p>{props.repository.description}</p>

      <a href={props.repository.link} target='_blank'>
        Acessar repositórios
      </a>
    </li>
  );
}