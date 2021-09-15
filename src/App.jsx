import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App() {
  return (
    <> {/* fake tag pai que a funcao pede*/}
      <RepositoryList />
      <Counter />
    </>

  )
}